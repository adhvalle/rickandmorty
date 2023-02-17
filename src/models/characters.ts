import { reactive } from 'vue'
import { fetchCharacters, fetchEpisode } from '@/api/characters'
import { setSessionStorage } from '@/helpers/storage'
import { parseCharacter } from '@/use/character-parser'

const state = reactive({
  list: []
})

export const getCharacters = () => state.list
export const setCharacters = (characters = []) => { state.list = characters }

export const retrieveCharacters = async (list = '') => {
  const characters = await fetchCharacters(list)
  return await _parserCharacters(characters)
}

export const filterCharacters = async (query = {}) => {
  const characters = await fetchCharacters('', query)
  const parserCharacters = await _parserCharacters(characters.results)
  setCharacters(parserCharacters)
  setSessionStorage('filters', query)
}

const _parserCharacters = async characters => {
  return await Promise.all(characters.map(async character => {
    const parsedCharacter = parseCharacter(character)
    const { name, url } = await fetchEpisode(parsedCharacter.episodeNumber)

    return { ...parsedCharacter, episode: { name, url } }
  }))
}
