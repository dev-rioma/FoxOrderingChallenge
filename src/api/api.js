const YOUR_API_KEY = import.meta.env.VITE_API_KEY;
const YOUR_API = import.meta.env.VITE_API_URL;

const getMovieDetails = async (imdbID) => {
  const url = `${YOUR_API}i=${imdbID}&${YOUR_API_KEY}`;
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson;
};

export const getMovies = async (search) => {
  const url = `${YOUR_API}s=${search === "" ? "star" : search}&${YOUR_API_KEY}`;
  const response = await fetch(url);
  const responseJson = await response.json();

  if (responseJson.Search) {
    const moviesWithDetails = await Promise.all(
      responseJson.Search.map(async (movie) => {
        return await getMovieDetails(movie.imdbID);
      })
    );
    return moviesWithDetails;
  } else {
    throw new Error("No se encontraron películas.");
  }
};
