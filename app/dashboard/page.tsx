import { auth } from '@/auth'
import { redirect } from 'next/navigation'
export default async function Page(){ 
  const session = await auth()

  if (!session?.user){
      redirect('/login')
  }
  console.log(session.user)
  return (
    <div className="flex h-screen justify-center">
        <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}