import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import SignUp from './pages/signUp/signup';
import Login from './pages/login/login';
import User from './pages/user/user'

import ScrollToTop from './components/scrollToUp/scroll';
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Switch>
        {/* <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/fund_wallet" component={Fund_wallet}/>
        <Route path="/profile/airtime" component={Airtime}/>
        <Route path="/profile/data_sub" component={Data}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/logout" component={Logout}/> */}
        <Route path="/user" component={User}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/" component={Home}/>
      </Switch>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
