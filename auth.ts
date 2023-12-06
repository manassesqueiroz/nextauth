import NextAuth from "next-auth"
import { authConfig } from './auth.config';
import credentials from 'next-auth/providers/credentials';
import discord from 'next-auth/providers/discord';
import facebook from 'next-auth/providers/facebook';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

async function getUser(email: string): Promise<User | undefined> {
  const user = await prisma.user.findMany({
    where:{ email } 
  });
  if(!user[0] || !user[0].password){
    throw new Error('Failed to fetch user.');
  }
  return user[0];
}


export const {
  handlers: { GET, POST },
  auth, signIn, signOut
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    github({
      allowDangerousEmailAccountLinking: true,
    }),
    discord({
      allowDangerousEmailAccountLinking:true
    }),
    google({
      allowDangerousEmailAccountLinking:true
    }),
    facebook({
      allowDangerousEmailAccountLinking:true
    }),
    credentials({
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
  ], // Add providers with an empty array for now
})