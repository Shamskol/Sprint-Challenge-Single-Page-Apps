import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacter(res.data.results);
        console.log( res.data.results);
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []);

  return(
    <section className="character-list">
      <h2>Hello </h2>

      {character.map(character=> {
        return(
        <CharacterCard
        key={character.index}
        name={character.name}
       status={character.status}
       species={character.speies}
       type={character.type}
       gender={character.gender}
       />
        )
      })}
    </section>
  );
}
