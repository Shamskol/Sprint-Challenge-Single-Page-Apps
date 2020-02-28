import React, { useState } from "react";
import styled from "styled-components";




const StyledForm = styled.form`
   display: flex;
   flex-direction: row-reverse;
   justify-content: center;
   padding: 10px;
   margin: 0 auto;
 `;
 const Button = styled.button`
 display: flex;
 margin-bottom: 10px;
 margin-top: 15px;
 margin: 0 auto;
 background: blue;
 width: 150px;
 height: 35px;
 text-align: center;
 color: black;
 box-shadow: 0px 0px 5px 1px black;
 cursor: pointer;
 `;

 export default function SearchForm(props) {
const [results, setResults] = useState();


  const changeHandler = event => {
    setResults(event.target.value)
  };

  const submitHandler = e => {
    e.preventDefault();
  
  }
  return (
    <section className="search-form">
      <StyledForm>
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Search"
          id="character"
          name="character"
          
        />
         </form>
         </StyledForm>
        <Button> <button type="submit">Submit</button></Button>
        
   </section>
  )
};










