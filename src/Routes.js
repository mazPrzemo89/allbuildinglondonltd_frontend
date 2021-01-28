import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AdminRoute from './Admin/auth/AdminRoute'
import About from './page.About/About'
import Signin from './User/Signin'
import Home from './page.Home/Home'
import Construction from './page.ConstructionWork/ConstructionWork'
import SteelWork from './page.SteelWork/SteelWork'
import Scaffolding from './page.Scaffolding/Scaffolding'
import Dashboard from './Admin/Admin'
import Gallery from './page.Gallery/Gallery'
import Comments from './page.Comments/Comments'
import Email from './page.Email/Email'
import EmailConf from './pages.Confirmation/Email'
import CommentConf from './pages.Confirmation/Comment'
import classes from './styles.module.css'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Signin}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/construction" exact component={Construction}></Route>
        <Route path="/steelwork" exact component={SteelWork}></Route>
        <Route path="/scaffolding" exact component={Scaffolding}></Route>
        <Route path="/gallery" exact component={Gallery}></Route>
        <Route path="/comments" exact component={Comments}></Route>
        <Route path="/getquote" exact component={Email}></Route>
        <Route path="/confirmationemail" exact component={EmailConf}></Route>
        <Route path="/confirmation" exact component={CommentConf}></Route>
        <AdminRoute path="/admin" exact component={Dashboard}></AdminRoute>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
