import React from "react";
import './App.css';
import Result from './components/Result';
import All from './components/All'
import {Route, Switch} from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Admin from "./components/admin/Admin";

function App() {
  return (
  <div className="App">
  <Switch>
  <Route exact path="/" component={Result} />
  <Route exact path="/result" component={Result} />
  <Route path="/all" component={All} />
  <Route path="/admin-panel" component={Admin} />
  <Route component={ErrorPage}></Route>
</Switch>
    </div>
  );
}

export default App;