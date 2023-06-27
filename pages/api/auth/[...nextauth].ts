
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from 'jsonwebtoken';
import GoogleProvider from "next-auth/providers/google"
import NextAuth, { NextAuthOptions, User } from 'next-auth';
import axios from 'axios';



const options: NextAuthOptions  = {
  secret: process.env.NEXT_PUBLIC_SECRET_KEY,
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
      
        try {
          const response = await axios.post('http://127.0.0.1:8000/auth/login/', credentials);
      
          const data = response.data;
      
          if (response.status === 200) {
            // Return user data if authentication is successful
            // console.log(data.user)
            return {
              id: data.user.id,
              email: data.user.email,
              username: data.user.username,
              phone: data.user.phone,
              accessToken: data.user.access,
              image: data.user.profile_picture,
            } 
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

