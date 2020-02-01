import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  background-color: purple;
  text-align: center;
  
`;

export default function CharacterCard(props) {
  const characterData = props.characterData;

  return(
    <div>
        return (
          <WrapperDiv className="characterWrapper">
          <div className="character">Name: {props.name}</div>
      <div className="character">Status: {props.status}</div>
      <div className="character">Species: {props.species}</div>
      <div className="character">Type: {props.type}</div>
      <div className="character">Gender: {props.gende}</div>   
       </WrapperDiv>
        );
      })}
    </div>
  );
}
