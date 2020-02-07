import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 15px;
  background-color: blueviolet;
  text-align: center;
  padding: 20px; 
  color: white;
  margin-bottom: 5px
`;

export default function CharacterCard(props) {
  return (
    <WrapperDiv>
      <h2 className="character">id: {props.id}</h2>
      <h2 className="character">Name: {props.name}</h2>
      <div className="character">Status: {props.status}</div>
      <div className="character">Species: {props.species}</div>
      <div className="character">Type: {props.type}</div>
      <div className="character">Gender: {props.gender}</div>
   </WrapperDiv>
  
  )
 
};
