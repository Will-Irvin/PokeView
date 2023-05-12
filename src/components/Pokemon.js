import { useEffect } from "react";
import { useState } from "react";
import "../style/Pokemon.css";

/*
    Display a Pokemon using information retrieved from the given API url
*/
function Pokemon(props) {
    // useState variables to store a Pokemon's info
    const [id, setId] = useState(-1);
    const [height, setHeight] = useState(-1);
    const [weight, setWeight] = useState(-1);
    const [img_link, setImg] = useState(null);
    const [primary_type, setPrimaryType] = useState("");
    const [type_list, setTypes] = useState([]);
    
    let height_str = "Height: " + height * 10 + "cm";
    let weight_str = "Weight: " + weight / 10 + "kg";

    // Retrieves data from the API and updates appropriate variables
    const APICall = async () => {
        const response = await fetch(props.url);
        const responseJSON = await response.json();

        setId(responseJSON.id);
        setHeight(responseJSON.height);
        setWeight(responseJSON.weight);
        setImg(responseJSON.sprites.other.home.front_default);

        const types = responseJSON.types.map((item) => item.type.name);
        setPrimaryType(types[0]);
        const type_list = types.map((type) => <strong class={type}>{type} </strong>);
        setTypes(type_list);
    }

    useEffect(() => {
        APICall()
    });

    // Return formatted info about the pokemon
    return (<>
        <img src={img_link} alt="Pokemon Home Model" class={primary_type}/>
        <p class={primary_type}>
            No. {id}: {props.name}<br/>
            {height_str}<br/>
            {weight_str}
        </p>
        <p>Types: {type_list}</p>
    </>)
}

export default Pokemon;