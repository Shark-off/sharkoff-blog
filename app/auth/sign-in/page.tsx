// app/auth/sign-in/page.tsx
import { Suspense } from 'react'
import LoginForm from './login-form'

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}
