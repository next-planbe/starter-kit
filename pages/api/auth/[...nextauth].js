import NextAuth from "next-auth/next"
import EmailProvider from "next-auth/providers/email"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM,
      maxAge: 2 * 3600, //login-links valid for 2h
    }),
  ],
})
