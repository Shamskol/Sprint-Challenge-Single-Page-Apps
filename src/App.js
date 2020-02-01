import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import SearchForm from "./components/SearchForm";

export default function App() {
  useEffect(() => {
    console.log("App component mounted.");
    return () => {
      console.log("App component unmounting...");
    };
  }, []);

  return <div className="App">
<SearchForm/>
<Header/>
<CharacterList/>
<CharacterCard/>
<WelcomePage/>
  </div>;
}
