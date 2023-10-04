const searchPhotos = async (query = 'животные') => {
  const YOUR_ACCESS_KEYS = [
    process.env.REACT_APP_APIKEY1, 
    process.env.REACT_APP_APIKEY2,
    process.env.REACT_APP_APIKEY3,
    process.env.REACT_APP_APIKEY4,
  ]
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
