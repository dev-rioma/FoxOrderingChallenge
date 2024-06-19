/* eslint-disable react/prop-types */
const Card = ({movie}) => {
  return (
    <div className="w-full max-w-xs max-h-[650px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-3 rounded-t-lg w-[350px] h-[400px]"
          src={movie.Poster}
          alt={movie.Title}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-sm font-semibold tracking-tight text-yellow-500 dark:text-white">
            {movie.Title}
          </h5>
        </a>
        <a href="#">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            {movie.Director}
          </h5>
        </a>
        <div className="flex items-center mt-2 mb-2">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
           
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {movie.Type}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {movie.Year}
          </span> 
        </div>
      </div>
    </div>
  );
};

export default Card;
