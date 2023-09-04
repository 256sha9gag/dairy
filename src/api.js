const searchPhotos = async (query = 'животные') => {
  const YOUR_ACCESS_KEYS = ['6TYxnQnUnfUXAwBUU6egADwGHxrMqbTIlONTY1XQO0k', 
  'IIc8AorkcFuKHlwcmQaxFSZm6p5QwWChwkpb1351Rds',
  'T6O2SHB40-lg3lcxgCCaH6VNv3eZu6Fxfs_z4UIsomE',
  'RVD4JwkjaasBGKQJUMWTnn-o7_qGv5EpeKvNshj3M_4',
  'IRywC-5lPfHVzhEZ7vPe7ehMhSpcEO0UeetQYu-qDNM']
  const accessKey = YOUR_ACCESS_KEYS[Math.floor(Math.random() * YOUR_ACCESS_KEYS.length)];

  const url = `https://api.unsplash.com/search/photos?query=${query === '' ? 'животные' : query}&page=1`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      }
    });

    if (!response.ok) {
      alert(`Ошибка при получении фотографий: ${response.status} ${response.statusText}`);
      throw new Error(`Ошибка при получении фотографий: ${response.status} ${response.statusText}`)
    }

    const data = await response.json();
    return data.results;

  } catch (error) {
    console.error(error);
  }

};


export default searchPhotos;
