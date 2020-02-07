import React,{useEffect} from "react";
import { BrowserRouter as Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";

function App() {
  useEffect(() => {
    console.log("App component mounted.");
    return () => {
      console.log("App component unmounting...");
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList}/>
      <WelcomePage/>
      <CharacterList />
      <CharacterCard />
    </div>
  );
}
export default App;

