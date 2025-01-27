import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "../lib/db"
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  adapter: MongoDBAdapter(client),
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })],
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;