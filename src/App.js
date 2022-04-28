import Home from "./home/home";
import Commision from "./components/commision/commision";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  
  return (
    <Router>
    
      <Switch>
        <Route exact path={"/"}>
         <Home/>
        </Route>
        
        <Route exact path={"/commision"}>
         <Commision/>
        </Route>
        
      </Switch>
   </Router >
    );
}

export default App;
