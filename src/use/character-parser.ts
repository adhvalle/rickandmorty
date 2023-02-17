export const parseCharacter = ({ episode, image, location, name = '', species = '', status = '', url = '' }) => {
  const episodeNumber = episode[0] ? episode[0].split('/').at(-1) : ''
  
  return { episodeNumber, image, location, name, species, status, url }
}