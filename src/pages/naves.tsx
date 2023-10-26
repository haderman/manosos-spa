import Head from 'next/head'

import { StarchipsList } from '@/components/starships-list'

export default function Naves() {
  return (
    <>
      <Head>
        <title>Manosos SPA - Naves</title>
      </Head>
      <div>
        <StarchipsList />
      </div>
    </>
  )
}
