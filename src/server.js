import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/movies", () => {
      return {
        movies: [
          { id: 1, name: "Please", year: 2010 },
          { id: 2, name: "Help", year: 2014 },
          { id: 3, name: "ME!", year: 2017 },
        ],
      };
    });
  },
});
