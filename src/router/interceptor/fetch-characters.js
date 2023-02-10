import { getSessionStorage } from '@/helpers/storage'
import { filterCharacters, retrieveCharacters, setCharacters } from '@/models/characters'

export default async () => {
  const storageFilter = getSessionStorage('filters')
  const characters = storageFilter ? filterCharacters(storageFilter) : await retrieveCharacters([1,2,4,7,9])
  setCharacters(characters)

  return true
}
