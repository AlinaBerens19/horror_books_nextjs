
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from 'jsonwebtoken';
import GoogleProvider from "next-auth/providers/google"
import { Token } from 'typescript';
import { JWT } from 'next-auth/jwt';
import NextAuth, { NextAuthOptions } from 'next-auth';


const options: NextAuthOptions  = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        // Implement your authorization logic here
        // For example, make an API call to your Django backend to validate the credentials
        try {
          const response = await fetch('http://127.0.0.1:8000/auth/login/', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const data = await response.json();

          if (response.ok) {
            // Return user data if authentication is successful
            const secret = process.env.NEXT_PUBLIC_SECRET_KEY!;
            const token = jwt.sign(credentials, secret);
            const decodedToken = jwt.verify(token, secret);

            return data.user;
          } else {
            // Throw an error if authentication fails
            throw new Error(data.error);
          }
        } catch (error) {
          throw new Error('Failed to authenticate');
        }
      },

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

  ],
};

export default NextAuth(options);

