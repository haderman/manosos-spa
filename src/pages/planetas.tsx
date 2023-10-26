import Head from 'next/head'

import { PlanetsList } from '@/components/planets-list'

export default function Planetas() {
  return (
    <>
      <Head>
        <title>Manosos SPA - Planetas</title>
      </Head>
      <div>
        <PlanetsList />
      </div>
    </>
  )
}
