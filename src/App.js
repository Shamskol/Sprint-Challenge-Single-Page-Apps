
import React,{useEffect} from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
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
<Header/>

    <BrowserRouter>
    <Link to= "/"><p>WelcomePage</p> </Link>
    <Link to="/characters"> <p>CharacterList</p></Link>

      <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList}/>
      </Switch>
    
    </BrowserRouter>
    {/* <CharacterList/> */}
    
    </div>
  );
}
export default App;

