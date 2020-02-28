
import React,{useEffect} from "react";
import { BrowserRouter as Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import Header from "./components/Header";


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
      
    </div>
  );
}
export default App;

