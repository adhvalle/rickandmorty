import { get } from './client'

export const fetchCharacters = (list = '', query = {}) => get(`/character/${list}`, query)

export const fetchEpisode = num => get(`/episode/${num}`)
