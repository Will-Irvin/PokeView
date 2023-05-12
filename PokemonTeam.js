import Pokemon from "./Pokemon";
import { removeFromTeam } from "./Team";
import "../style/Pokemon.css";

function PokemonTeam(props) {
    return <div class="item">
        <Pokemon name={props.name} url={props.url}/>
        <button type="button" onClick={() => removeFromTeam(props.id)}>Remove from team</button>
    </div>;
}

export default PokemonTeam;