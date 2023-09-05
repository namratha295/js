class Graph {
    constructor() {
      this.graph = new Map();
    }
    addEdge(source, destination) {
      if (!this.graph.has(source)) {
        this.graph.set(source, []);
      }
      this.graph.get(source).push(destination);
    }
    findRoute(start) {
      const visited = new Set();
      const route = [];
  
      const dfs = (city) => {
        visited.add(city);
        route.push(city);
  
        if (this.graph.has(city)) {
          for (const neighbor of this.graph.get(city)) {
            if (!visited.has(neighbor)) {
              dfs(neighbor);
            }
          }
        }
      };
  
      dfs(start);
      return route;
    }
  }
  const tickets = [
    "Paris-Skopje", "Zurich-Amsterdam", "Prague-Zurich",
    "Barcelona-Berlin", "Kiev-Prague", "Skopje-Paris",
    "Amsterdam-Barcelona", "Berlin-Kiev", "Berlin-Amsterdam"
  ];
  const graph = new Graph();
  for (const ticket of tickets) {
    const [source, destination] = ticket.split("-");
    graph.addEdge(source, destination);
  }
  const startCity = "Kiev";
  const route = graph.findRoute(startCity);
  console.log("Your son's route through Europe:");
  console.log(route.join(" -> "));
  