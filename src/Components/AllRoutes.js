import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';
import Hobbies from './Hobbies';
import Contacts from './Contacts';
import WorkHistory from './WorkHistory';
import Books from './Books';
import Education from './Education';
import Home from './Home';

export default class AllRoutes extends Router {

  render () {
    return (
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/education' component={Education} />
        <Route path='/books' component={Books} />
        <Route path='/workhistory' component={WorkHistory} />
        <Route path='/hobbies' component={Hobbies} />
        <Route path='/contacts' component={Contacts} />
      </div>
    )
  }
}
