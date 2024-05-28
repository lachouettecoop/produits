'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())


export default function Home() {
  const { data, error, isLoading } = useSWR('https://randomuser.me/api/', fetcher)

    return (
      <div className="">
        <div>Commandes</div>
        <div>commande en cours du user</div>
        <div>commande passé du user</div>

        {JSON.stringify(data)}
      </div>
    );
  }
  