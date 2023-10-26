import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Starship } from '@/types/startchip'

export async function fetchStarships() {
  const { data } = await axios.get('https://swapi.dev/api/starships/')
  return decodeResponse(data)
}

export function useStarships() {
  return useQuery({
    queryKey: ['starship'],
    queryFn: () => fetchStarships(),
  })
}

function decodeResponse(data: any): Starship[] {
  return data.results.map(Starship.decode)
}
