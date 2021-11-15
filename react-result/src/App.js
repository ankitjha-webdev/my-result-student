import React from "react";
import './App.css';
import Result from './components/Result';
import All from './components/All'
import {Route, Switch} from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Admin from "./components/admin/Admin";
import ListEmployeeComponent from "./components/admin/ListEmployeeComponent";
import ViewEmployeeComponent from "./components/admin/ViewEmployeeComponent";
import CreateEmployeeComponent from './components/admin/CreateEmployeeComponent'


function App() {
  return (
  <div className="App">
  <Switch>
  <Route exact path="/" component={Result} />
  <Route exact path="/result" component={Result} />
  <Route path="/all" component={All} />
  <Route path="/admin" component={Admin} />
  <Route component={ErrorPage}></Route>

  {/* Crud */}
  <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
</Switch>
    </div>
  );
}

export default App;