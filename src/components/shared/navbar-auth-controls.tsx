'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

export function NavbarAuthControls() {
  const router = useRouter()
  const { logout } = useAuth()

  const handleSignOut = () => {
    logout()
    router.push('/')
    router.refresh()
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={handleSignOut}
        className="h-10 rounded-full border-[rgba(110,26,55,0.14)] bg-[rgba(255,250,244,0.88)] px-4 text-[#6e1a37] hover:bg-[rgba(110,26,55,0.06)] hover:text-[#8f1f3f]"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Sign Out
      </Button>
    </>
  )
}
