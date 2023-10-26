import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Planet } from '@/types/planet'

export async function fetchPlanets() {
  const { data } = await axios.get('https://swapi.dev/api/planets/')
  return decodeResponse(data)
}

export function usePlanets() {
  return useQuery({
    queryKey: ['planets'],
    queryFn: () => fetchPlanets(),
  })
}

function decodeResponse(data: any): Planet[] {
  try {
    return data.results.map(Planet.decode)
  } catch (error) {
    console.error(error)
    return []
  }
}
