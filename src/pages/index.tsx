import Head from 'next/head'

import { PeopleList } from '@/components/people-list'

export default function Home() {
  return (
    <>
      <Head>
        <title>Personas</title>
      </Head>
      <div>
        <PeopleList />
      </div>
    </>
  )
}
