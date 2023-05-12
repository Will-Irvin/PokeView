import { useEffect, useState } from "react";
import PokemonDisplay from "./components/PokemonDisplay";
import { Team } from "./components/Team";
import "./style/Pokemon.css";

function App() {
  const [pokemonComponents, setComponents] = useState();
  const [limit, setLimit] = useState(10);

  const getPokemonList = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=0";
    const response = await fetch(url);
    const responseJSON = await response.json();

    const components = responseJSON.results.map((item) => <PokemonDisplay className="pokemon" name={item.name} url={item.url}/>);
    setComponents(components);
  }

  const incrementLimit = () => {
    setLimit(limit + 10);
  }

  useEffect( () => {
    getPokemonList();
  }, [limit]);

  return (
    <div class="App">
      <section class="intro">
      <h1>Welcome to PokeView</h1>
      <p>Enjoy viewing any of the below pokemon and add up to 6 of them to your team at the top.<br/>
         Click the button at the bottom to view the next 10 pokemon.</p>
      </section>
      <div><Team /></div>
      <p>Pokemon Library:</p>
      <div class="display-container">{pokemonComponents}</div>
      <button onClick={incrementLimit}>Show more pokemon</button>
    </div>
  );
}

export default App;
