import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import { prisma } from '../../../../lib/prisma'
import { compare } from 'bcrypt'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@ynov.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email
          }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password as string
        )

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id + '',
          email: user.email,
          name: user.firstName + ' ' + user.lastName,
          randomKey: 'Hey cool'
        }
      }
    })
  ],
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      console.log('Sign In Callback', { user, account, profile, email, credentials })
      return true
    },
    redirect: async ({ url }) => {
      console.log('Redirect Callback', { url });
      return url;
    },
    session: ({ session, token }) => {
      console.log('Session Callback', { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
        }
      }
    },
    jwt: ({ token, user }) => {
      console.log('JWT Callback', { token, user })
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.Id,
          randomKey: u.randomKey
        }
      }
      return token
    }
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }