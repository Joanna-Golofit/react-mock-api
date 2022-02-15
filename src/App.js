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
        console.log("json:", json);
      })
      // .then(console.log(movies))
      // .then(console.log("muvisy:", json))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <h1 className="text-center my-3">Movies</h1>
          {movies?.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {movies.map(({ id, name, year }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            // <p key={movie.id}>
            //   {movie.name} in {movie.year}
            // </p>

            <p>nie ma filmow</p>
          )}
        </div>
      </div>
      <p>Cheers World!</p>
    </div>
  );
}

export default App;
