import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Discord from "next-auth/providers/discord"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient, User } from "@prisma/client"
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient()



async function getUser(email: string): Promise<User | undefined> {
  const user = await prisma.user.findUnique({
    where:{ email } 
  });
  if(!user || user.password){
    throw new Error('Failed to fetch user.');
  }
  return user;
}

export const {
  handlers: { GET, POST },
  auth, signIn, signOut
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Discord,
    Google,
    Facebook,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user || !user.password) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
})