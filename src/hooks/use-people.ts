import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { People } from '@/types/people'

export async function fetchPeople() {
  const { data } = await axios.get('https://swapi.dev/api/people/')
  return decodeResponse(data)
}

export function usePeople() {
  return useQuery({
    queryKey: ['people'],
    queryFn: () => fetchPeople(),
  })
}

function decodeResponse(data: any): People[] {
  return data.results.map(People.decode)
}
