import { usePlanets } from '@/hooks/use-planets'

export function PlanetsList() {
  const { data, status, isFetching } = usePlanets()

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
