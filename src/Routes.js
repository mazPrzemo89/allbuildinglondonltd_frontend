import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './MainComponents/About'
import Signin from './User/Signin'
import Home from './MainComponents/Home'
import Menu from './MainComponents/Menu'
import Construction from './ConstructionWorkPage/ConstructionWork'
import SteelWork from './SteelWorkPage/SteelWork'
import Scaffolding from './ScaffoldingPage/Scaffolding'
import classes from './styles.module.css'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/menu" exact component={Menu}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/construction" exact component={Construction}></Route>
        <Route path="/steelwork" exact component={SteelWork}></Route>
        <Route path="/scaffolding" exact component={Scaffolding}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
