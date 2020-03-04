import React from "react";
import styled from "styled-components";

const StyledSearches = styled.form`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  button {
    display: flex;
    margin-bottom: 10px;
    margin-top: 15px;
    margin: 0 auto;
    background: lightskyblue;
    width: 150px;
    height: 35px;
    text-align: center;
    color: black;
    box-shadow: 0px 0px 5px 1px black;
    cursor: pointer;
  }
`;

export default function SearchForm(props) {
  const updateData = props.updateData;
  const setUpdateData = props.setUpdateData;
  const searchCharacter = props.searchCharacter;
  const setSearchCharacter = props.setSearchCharacter;

  const changeHandler = event => {
    setSearchCharacter(event.target.value);
  };

  const submitHandler = e => {
    console.log(submitHandler);
    e.preventDefault();

    const filteredResults = updateData.filter(character => {
      return character.name
        .toLowerCase()
        .includes(searchCharacter.toLowerCase());
    });

    setUpdateData(filteredResults);
  };

  return (
    <StyledSearches>
      <section className="form-search">
        <form onSubmit={submitHandler}>
          <input
            onChange={changeHandler}
            type="text"
            placeholder="Search"
            id="character"
            name="searchCharacter"
            value={searchCharacter}
          />
           <button type="submit">Submit</button>
        </form>
       
      </section>
    </StyledSearches>
  );
}
