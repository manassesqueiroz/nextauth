import { auth } from '@/auth'
import { redirect } from 'next/navigation'
export default async function Page(){ 
  const session = await auth()

  if (!session?.user){
      redirect('/login')
  }
  console.log(session.user)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}