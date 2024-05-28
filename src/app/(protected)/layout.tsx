'use client'

import { useUser } from '@/state/user';
import { useRouter } from 'next/navigation'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const { isAuth } = useUser(state => state)
    const router = useRouter()

    if (!isAuth) {
        router.push('/login')
    }
    
    return (
        <>
            {children}
        </>
    );
  }
  