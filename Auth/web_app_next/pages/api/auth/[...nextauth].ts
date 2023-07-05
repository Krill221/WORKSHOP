import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from 'jsonwebtoken';
import {JWT} from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "krill221" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {

        const { username, password } = credentials as any;

        const user = {
          id: "1",
          name: "krill221",
          email: "krill221@email.com",
          password: "123",
          image: "image",
        }

        if (user.name == username && user.password === password) {
          return { role: 'admin', name: user.name, email: user.email, image: user.image }
        } else {
          return null
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  jwt: {
    async encode(params): Promise<string> {
      // console.log(params)
      // console.log('------')
      const jwtClaims = params.token;
      const encodedToken = jwt.sign(jwtClaims, params.secret, {
        algorithm: 'HS512',
      });
      return encodedToken;
    },
    async decode(params): Promise<JWT | null> {
      const verify = jwt.verify(params.token, params.secret) as JWT;
      return verify;
    },
  },
}

export default NextAuth(authOptions)
