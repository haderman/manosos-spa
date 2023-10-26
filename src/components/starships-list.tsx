import { useStarships } from '@/hooks/use-starships'

export function StarchipsList() {
  const { data, status, isFetching } = useStarships()

  if (status === 'pending') {
    return <div>Loading</div>
  }

  if (status === 'error') {
    return <div>Error fetching planets</div>
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
