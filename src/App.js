import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(null);
  const [name, setName] = useState("")
  const [year, setYear] = useState("")


  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.movies);
        console.log("json.movies:", json.movies);
        console.log("json:", json);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      //wysylam do serwera
      const res = await fetch("/api/movies", { method: "POST", body: JSON.stringify({ name, year }) });
      const json = await res.json();
      console.log("json back", json)
      setMovies([...movies, json.movie]);
      setName("");
      setYear("");

    } catch(err) {
      console.log(err)
    }
  }

  // const  = (e) => {
  //   console.log("hej")
  //   setMovies(...movies, name, year);
  // }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <h1 className="text-center my-3">Movies</h1>
          <div className="my-4">
            <form onSubmit={submitForm}>
              <div className="row">
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-5">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-success">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
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
