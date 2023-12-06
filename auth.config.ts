import { randomUUID } from 'crypto';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {

    async session({ session, user}){
      session.user!.id = user.id
      return session
    },
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = user.id
      }
      return token
    }
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
  },
  secret: process.env.AUTH_SECRET ,
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    strategy:'jwt',
    generateSessionToken: () => {
      return randomUUID()
    }
  },
 providers:[]
} satisfies NextAuthConfig;