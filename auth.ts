// src/auth.ts
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  pages: {
    signIn: '/auth/sign-in',
  },
  callbacks: {
    // 1. 访问 /admin 必须登录
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname.startsWith('/admin'))
        return !!auth
      return true
    },

    // 2. 登录后永远进 /admin（硬跳）
    redirect({ url, baseUrl }) {
      // 如果 url 是相对路径，拼成绝对
      if (url.startsWith('/'))
        return `${baseUrl}${url}`
      // 防止外部站，其余也回 /admin
      return `${baseUrl}/admin`
    },
  },
})
