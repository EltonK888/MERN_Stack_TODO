import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import EditTODO from "./components/EditTODO";
import CreateTODO from "./components/CreateTODO";
import TODOList from "./components/TODOList";

function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" exact component={TODOList}/>
      <Route path="/create" component={CreateTODO}/>
      <Route path="/edit/:id" component={EditTODO}/>
    </Router>
  );
}

export default App;
