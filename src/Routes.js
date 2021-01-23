import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './MainComponents/About'
import Signin from './User/Signin'
import Home from './MainComponents/Home'
import Menu from './MainComponents/Menu'
import classes from './styles.module.css'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/menu" exact component={Menu}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
