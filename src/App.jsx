import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Sign from './Component/Sign';
import Login from './Component/login';
import Filter from './Component/Filter';
import Employee from './Component/EmployeeReg';

const App = () =>{
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/sign" component={Sign} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/filter" component={Filter} />
      <Route exact path="/employee" component={Employee} />
      <Redirect to="/ details" />
    </Switch>

    </>
  );
};

export default App;