import Link from "next/link";
import { signOut } from '@/auth'
import { SignOutButton } from "./AuthButtons";

export function Navbar(){
  return (
    <nav className="flex items-center justify-between w-full border-b-1 border-gray-200 py-6 px-4">
      <Link href={'/'}>
        Authention
      </Link>

      <Link href={'/login'}>
        Login
      </Link>

      <Link href={'/dashboard'}>
        Dashboard
      </Link>

      <SignOutButton signOut={async () =>{
        'use server'
        await signOut({
          redirectTo: '/'
        })
      }  
      }/>

    </nav>
  )
}