
import React,{useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList}/>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}
export default App;

