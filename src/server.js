import { createServer } from "miragejs";

let movies =  [
          { id: 1, name: "Please", year: 2010 },
          { id: 2, name: "Help", year: 2014 },
          { id: 3, name: "ME!", year: 2017 },
        ]

createServer({
  routes() {
    this.namespace = "api";

    this.get("/movies", () => {
      return {
        movies
        // movies: [
        //   { id: 1, name: "Please", year: 2010 },
        //   { id: 2, name: "Help", year: 2014 },
        //   { id: 3, name: "ME!", year: 2017 },
        // ],
      };
    });

    // Responding to a POST request
    this.post("/movies", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.floor(Math.random() * 100);

      return { movie: attrs };
    });
  },
});
