import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import SignUp from './pages/signUp/signup';
import Login from './pages/login/login';
import User from './pages/user/user'

import store from './store/store'

import ScrollToTop from './components/scrollToUp/scroll';
function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <ScrollToTop/>
        <Switch>
          <Route path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
