'use client'
import { OAuthProviderType } from 'next-auth/providers'

export function SigninButton(
  { children, signIn }
: { children: React.ReactNode, signIn :() => void}) {

  return (
    <button
      onClick={() => {
        signIn()
      }}>
      {children}
    </button>
  )
}

export function SignOutButton({ signOut }: { signOut: () => void }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px"
      onClick={() => {
        signOut()
      }}>
      Sign Out
    </button>
  )
}