'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())


export default function Home() {
  const { data, error, isLoading } = useSWR('https://randomuser.me/api/', fetcher)

    return (
      <div className="">
        Commandes

        {JSON.stringify(data)}
      </div>
    );
  }
  