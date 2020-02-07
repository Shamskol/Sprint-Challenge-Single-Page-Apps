import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
display: flex;
margin-bottom: 10px;
margin-top: 15px;
margin: 0 auto;
color: white;
width: 150px;
height: 35px;
text-align: center;
color: black;
box-shadow: 0px 0px 5px 1px black;
cursor: pointer;
`;

export default function Header() {
  return (
    <div>
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
    </div>
  );
}
