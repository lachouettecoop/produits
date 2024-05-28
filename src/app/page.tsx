'use client'

import { useUser } from '@/state/user';
import { useRouter } from 'next/navigation'

export default function Home() {
  const { isAuth } = useUser(state => state)
    const router = useRouter()

    if (!isAuth) {
        router.push('/login')
    }
  return (
    <div className="flex flex-col">
      <div>Home</div>
      <div>champs de recherche</div>
      <div>filtres par type de produits</div>
      <div>liste des produits clickable + ajout au panier</div>
    </div>
  );
}
