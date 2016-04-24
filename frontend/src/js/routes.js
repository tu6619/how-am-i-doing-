import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './views/Home/home_index.js'
import About from './views/About/about_index.js'
import Contact from './views/Contact/contact_index.js'
import User from './views/User/user_index.js'
import Questionnaire from './views/Questionnaire/questionnaire_index.js'
import Viz from './views/Visualisation/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='contact' component={Contact} />
    <Route path='user' component={User} />
    <Route path='questionnaire' component={Questionnaire} />
    <Route path='viz' component={Viz} />
  </Route>
)
