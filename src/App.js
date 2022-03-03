import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import SignUp from './pages/signUp/signup';
import Login from './pages/login/login';
import User from './pages/user/user'
import AdminLogin from './pages/login_admin/login'
import Admin from './pages/admin/admin';
import VerifyAccount from './pages/verify_account/verify';

import store from './store/store'

import ScrollToTop from './components/scrollToUp/scroll';
function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/user/*" element={<User/>}/>
          <Route path="/admin/*" element={<Admin/>}/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/verify_account/:code" element={ <VerifyAccount/> }/>
          <Route path="/admin_login" element={ <AdminLogin/> }/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
