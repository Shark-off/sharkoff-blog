// src/auth.ts
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: '用户名', type: 'text' },
        password: { label: '密码', type: 'password' },
      },
      async authorize(credentials) {
        // 硬编码管理员，生产请换数据库查询
        if (
          credentials.username === 'sharkoff'
          && credentials.password === '8198'
        ) {
          return { id: '1', name: 'sharkoff', email: '1193568198@outlook.com' }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname.startsWith('/admin'))
        return !!auth
      return true
    },
    redirect({ url, baseUrl }) {
      return url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/admin`
    },
  },
})
