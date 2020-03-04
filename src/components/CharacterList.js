import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const search = characterList => {
    // setUpdateData(characterList);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
        setUpdateData(response.data.results);
        console.log(response.data)
      })
      .catch(err => {
        console.error("Err", err);
      });
  }, [searchCharacter]);
if(!characters) {
  return <h1>loading</h1>
}
  return (
    
      <section className="character-list">
        <div>
           
           <SearchForm 
           search={search} 
           characters={characters} 
          updateData={updateData}
           setUpdateData={setUpdateData}
           searchCharacter = {searchCharacter}
           setSearchCharacter = {setSearchCharacter}
          /> 
        </div>
        {updateData.map(character => {
          return (
            <CharacterCard
              character={character}
              key={character.id}
              name={character.name}
              species={character.species}
              status={character.status}
              gender={character.gender}
            />
          );
        })}
      </section>
  
    
  );
}
