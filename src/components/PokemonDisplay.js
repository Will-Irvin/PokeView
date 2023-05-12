import Pokemon from "./Pokemon";
import { addToTeam } from "./Team";
import "../style/Pokemon.css";

// Display each Pokemon retrieved from PokeAPI along with a button to add it to the team
function PokemonDisplay(props) {
    return (
    <div class="item">
        <Pokemon name={props.name} url={props.url} />
        <button type="button" onClick={() => addToTeam(props.name, props.url)}>Add to team</button>
    </div>);
}

export default PokemonDisplay;