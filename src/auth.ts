import { User } from 'next-auth';
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { cookies } from 'next/headers';
import { postToken } from './token';

export interface AuthUser extends User {
  userName: string;
  useEmail: string;
  accessToken: string;
  refreshToken: string;
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    KakaoProvider({
      clientId: process.env.AUTH_KAKAO_CLIENT_ID!,
      clientSecret: process.env.AUTH_KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("JWT", token, user, account);
      return { ...token, ...user };
    },

    async session({ session, token }) {
      // console.log("SESSION", session, token);
      session.user = token as any;
      return session;
    },

    async signIn({ user, account }) {
      console.log("SignIN", user, account);

      if (account?.access_token) {
        try {
          const response = await postToken({ accessToken: account.accessToken as string});
          const data = await response.json();
          const { accessToken, refreshToken } = data;

          cookies().set('accessToken', accessToken);
          cookies().set('refreshToken', refreshToken);

          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      }

      return true;
    },
  }
  // secret: process.env.AUTH_SECRET,
});
