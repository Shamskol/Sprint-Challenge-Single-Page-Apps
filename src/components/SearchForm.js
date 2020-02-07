import React, { useState } from "react";
import styled from "styled-components";



 const StyledForm = styled.form`
   display: flex;
   flex-direction: row-reverse;
   justify-content: center;
   padding: 10px;
   margin: 0 auto;
 `;

function SearchForm(props) {
  const [results, setResults] = useState();

  const changeHandler = event => {
    setResults(event.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const filteredResults = props.characters.filter(characters => {
      return characters.name.toLowerCase().includes(results.toLowerCase());
    });
    props.search(filteredResults);
      console.log(filteredResults);
  };

  return (
    
    <section className="search-form">
     
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          type="text"
          placeholder="Search"
          id="character"
          name="character"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default SearchForm;
