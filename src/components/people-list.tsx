import { usePeople } from '@/hooks/use-people'

export function PeopleList() {
  const { data, status, isFetching } = usePeople()

  if (status === 'pending') {
    return <div>Loading</div>
  }

  if (status === 'error') {
    return <div>Error fetching people</div>
  }

  return (
    <ul>
      {data?.map((p) => (
        <li key={p.name}>
          {p.name} {isFetching ? '...' : ''}
        </li>
      ))}
    </ul>
  )
}
