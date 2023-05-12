import { useEffect, useState } from "react";
import { database } from "../database.js";
import { set, update, onValue, remove, ref } from 'firebase/database';
import PokemonTeam from "./PokemonTeam.js";

// Add the given pokemon to the firebase team
export function addToTeam(pokemon_name, pokemon_url) {
    const dataRef = ref(database, '/Team/nums_available');
    let id = -1;
    // Check for an open slot in the team
    onValue(dataRef, (snap) => {
        for (let key in snap.val()) {
            if (snap.val()[key].val) {
                id = key;
                break;
            }
        }
    });

    if (id < 0) { // No slots open
        console.log("Team is full");
        return;
    }

    // Pokemon data to send to Firebase
    let pokemon = {
        name: pokemon_name,
        url: pokemon_url,
        id: id,
    }

    // Add pokemon to the team
    const pokemonRef = ref(database, '/Team/mon' + id);
    set(pokemonRef, pokemon)
    .then( () => {
        console.log("Added " + pokemon_name + " to team");
    })
    .catch((error) => {
        console.log("Set Failed!");
        console.log(error);
    });

    // Update id as unavailable
    const idRef = ref(database, 'Team/nums_available/' + id);
    update(idRef, {val:false})
    .then( () => {
        console.log("Set " + id + " to unavailable");
    })
    .catch( (error) => {
        console.log(error);
    });
}

// Remove a Pokemon from the Firebase database based on their id number
export function removeFromTeam(id) {
    const pokemonRef = ref(database, 'Team/mon' + id);
    remove(pokemonRef)
    .then( () => {
        console.log("Deleted mon" + id)
    })
    .catch( (error) => {
        console.log(error);
    });

    const idRef = ref(database, 'Team/nums_available/' + id);
    update(idRef, {val:true})
    .then( () => {
        console.log("Set mon" + id + " to available");
    })
    .catch( (error) => {
        console.log(error);
    })
}

// Display the array of Pokemon currently on the team retrived from Firebase
export function Team() {
    const [teamComponents, setTeamComponents] = useState([]);
    
    useEffect(() => {
        const dataRef = ref(database, '/Team');
        onValue(dataRef, (snap) => {
            let temp_teamComponents = [];
            for (let key in snap.val()) {
                console.log("On_value key: " + key);
                if (snap.val()[key].name && snap.val()[key].url && snap.val()[key].id) {
                    temp_teamComponents.push(
                        <PokemonTeam name={snap.val()[key].name} url={snap.val()[key].url} id={snap.val()[key].id}/>);
                }
            }
            setTeamComponents(temp_teamComponents);
        });
    }, []);
    

    return (<>
        <p>Your Team:</p>
        <div class="team-container">{teamComponents}</div>
    </>);
}

export default Team;