import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DailyOffering from "./pages/DailyOffering/DailyOffering";
import Navbar from "./Components/Nav/Nav";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import "./App.css";



const App = () => (
  <Router>
    <div>
      <Navbar/>
      
      <Switch>
        <Route exact path="/" component={Home}/>
         <Route exact path="/daily-offering" component={DailyOffering}/>
         <Route exact path="/Blog" component={Blog}/>
        
      </Switch>
    </div>
  </Router>
)


export default App;