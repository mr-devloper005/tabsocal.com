'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'

interface LoginFormProps {
  buttonClassName: string
  inputClassName: string
}

export function LoginForm({ buttonClassName, inputClassName }: LoginFormProps) {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const { toast } = useToast()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async () => {
    const email = emailRef.current?.value ?? ''
    const password = passwordRef.current?.value ?? ''
    const success = await login(email, password)
    if (!success) {
      toast({ title: 'Sign in failed', description: 'Please enter a valid email and password.' })
      return
    }
    toast({ title: 'Signed in', description: 'Welcome back.' })
    router.push('/')
    router.refresh()
  }

  return (
    <div className="mt-6 grid gap-4">
      <input
        ref={emailRef}
        name="email"
        className={inputClassName}
        placeholder="Email address"
        type="email"
        required
      />
      <input
        ref={passwordRef}
        name="password"
        className={inputClassName}
        placeholder="Password"
        type="password"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault()
            void handleSubmit()
          }
        }}
        required
      />
      <button type="button" className={buttonClassName} disabled={isLoading} onClick={() => void handleSubmit()}>
        {isLoading ? 'Signing in...' : 'Sign in'}
      </button>
    </div>
  )
}
