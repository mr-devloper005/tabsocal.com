'use client'

import { type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'

interface RegisterFormProps {
  buttonClassName: string
  inputClassName: string
}

export function RegisterForm({ buttonClassName, inputClassName }: RegisterFormProps) {
  const router = useRouter()
  const { signup, isLoading } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const password = String(formData.get('password') ?? '')
    const workType = String(formData.get('workType') ?? '')
    const success = await signup(name, email, password)
    if (!success) {
      toast({ title: 'Sign up failed', description: 'Please complete all required fields.' })
      return
    }
    toast({
      title: 'Account created',
      description: workType ? `Ready to publish your ${workType.toLowerCase()}.` : 'Your profile is ready.',
    })
    router.push('/')
    router.refresh()
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <input
        name="name"
        className={inputClassName}
        placeholder="Full name"
        required
      />
      <input
        name="email"
        className={inputClassName}
        placeholder="Email address"
        type="email"
        required
      />
      <input
        name="password"
        className={inputClassName}
        placeholder="Password"
        type="password"
        required
      />
      <input
        name="workType"
        className={inputClassName}
        placeholder="What kind of work do you share?"
      />
      <button type="submit" className={buttonClassName} disabled={isLoading}>
        {isLoading ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  )
}
