import { useState, useEffect } from "react";
import Card from "./Card";
import { getMovies } from "../api/api"

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const movies = await getMovies(search);
        setMovies(movies);
        setErrorMessage('');
      } catch (error) {
        setMovies([]);
        setErrorMessage('No se encontraron películas.');
      }
      setLoading(false);
    };
    
    fetchMovies();
  }, [search]);

  return (
    <>
      <form className="flex flex-col justify-center items-center py-4 mb-2">
        <div className="flex gap-2 w-max-[400px] justify-center items-center">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Find Movie"
          />
        </div>
      </form>

      <div className="flex flex-wrap gap-2 justify-center min-[1600px]:mx-80">
        {loading ? (
          <div className="py-12 text-xl font-bold">Cargando...</div>
        ) : errorMessage ? (
          <div className="py-12 text-xl font-bold">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <div key={index}>
              <Card movie={movie} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Main;

