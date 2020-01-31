import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   const getCharacter= () => {

   } 
axios.get(`https://rickandmortyapi.com/api/character.results/`)
.then(res => {
  console.log("/character endpoint:", res.data.results);
  setCharacter(res.data.results);
})
.catch(err => {
  console.log("err", err);
});


  }, []);

  return (
    <section className="character-list">
      <h2> </h2>
      {character.map(character => { 
        return(
   <CharacterCard



        />
        )

      
        }
        
      )
       }
       
      </section>

  );
      
      }         
