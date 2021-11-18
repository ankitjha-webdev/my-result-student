import React from "react";
import './App.css';
import Result from './components/Result';
import All from './components/All'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Admin from "./admin/Admin";
import ListResultComponent from "./components/ListResultComponent";
import CreateResultComponent from "./components/CreateResultComponent";
import ViewResultComponent from "./components/ViewResultComponent";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Result} /> */}
        <Route exact path="/result" component={Result} />
        <Route path="/all" component={All} />
        <Route path="/admin" component={Admin} />
        <Route component={ErrorPage}></Route>

        {/* Crud */}
        <Route path = "/" exact component = {ListResultComponent}></Route>
                          <Route path = "/results" component = {ListResultComponent}></Route>
                          <Route path = "/add-result/:id" component = {CreateResultComponent}></Route>
                          <Route path = "/view-result/:id" component = {ViewResultComponent}></Route>
       
      </Switch>
    </div>
  );
}

export default App;