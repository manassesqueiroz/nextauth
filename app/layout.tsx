import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/Navbar'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex h-screen flex-col'>
        <Navbar />  
        <main className='h-full '>
          {children}
        </main>
      </body>
    </html>
  )
}
