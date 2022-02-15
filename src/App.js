import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.movies);
        console.log("json.movies:", json.movies);
      console.log("json:", json)})
      // .then(console.log(movies))
      // .then(console.log("muvisy:", json))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container">
      <div className="row justify-contetn-center">
        <div className="col">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <p key={movie.id}>
                {movie.name} in {movie.year}
              </p>
            ))
          ) : (
            <p>nie ma filmow</p>
          )}
        </div>
      </div>
      Hello World
    </div>
  );
}

export default App;
