async function getNewsAPI(parameters) {
  const { query, language = "en", sort = "popularity", from, to } = parameters;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?language=${language}&q=${query}&sortBy=${sort}&from=${from}&to=${to}&apiKey=132955b7216b4177b36eecbbf664306c`
    );
    const json = await response.json();
    return json.articles;
  } catch (error) {
    console.error(error);
  }
}

export default getNewsAPI;
