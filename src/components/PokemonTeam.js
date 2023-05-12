import Pokemon from "./Pokemon";
import { removeFromTeam } from "./Team";
import "../style/Pokemon.css";

// Display the array of Pokemon on a team along with a button for each that will remove them from the team
function PokemonTeam(props) {
    return <div class="item">
        <Pokemon name={props.name} url={props.url}/>
        <button type="button" onClick={() => removeFromTeam(props.id)}>Remove from team</button>
    </div>;
}

export default PokemonTeam;