'use client'
import Preparation from '@/components/Preparation'
import PreparationsList from '@/components/PreparationsList'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Content() {

  const searchParams = useSearchParams()
  const id = searchParams.get('id')

    if (id) {
      return <Preparation id={id} />
    } else {
      return <PreparationsList />

    }
  }
  
  export default  function Preparations() {
    return (
      <Suspense>
        <Content />
      </Suspense>
    )
  }