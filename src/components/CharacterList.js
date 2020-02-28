import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [filterData, updateData] = useState([]);
  const search = characterList => {
    updateData(characterList);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
        updateData(response.data.results);
        console.log(response.data)
      })
      .catch(err => {
        console.error("Err", err);
      });
  }, [updateData]);

  return (
    <section className="character-list">
      <section className="character-list">
        <div>
          <SearchForm 
          search={search} 
          character={characters} 
          updateData={updateData}
          />
        </div>
        {filterData.map(character => {
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
    </section>
  );
      }
