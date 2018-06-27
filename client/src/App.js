import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Nav/Nav";
import Home from "./pages/Home/Home";
import DailyOffering from "./pages/DailyOffering/DailyOffering";
import "./App.css";



const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/saved" component={Saved}/> */}
        <Route render={() => (<h1 className="text-center">Page Not Found!</h1>)}/>
      </Switch>
    </div>
  </Router>
)


export default App;