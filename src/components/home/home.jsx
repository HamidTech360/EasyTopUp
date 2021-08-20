import React from 'react'
import Landing from './widgets/landing';
import Header from '../header/header';
import './widgets/css/home.css'
import Grid from './widgets/grd';
import FunFact from './widgets/funfact';
import WhyUs from './widgets/whyus';

const HomePage = ()=>{
  const options = [
    {
      label:'Home',
      target:'/',
      icon:'fa-home'
    },
    {
      label:'login',
      target:'/login',
      icon:'fa-user-o'
    },
    {
      label:'About',
      target:'/about',
      icon:'fa-address-book'
    },
    {
      label:'SignUp',
      target:'/signup',
      icon:'fa-envelope-open'
    },
    
  ]

    return(
      <React.Fragment>
          
          <Header options={options}/>
          <Landing/>
          <Grid/>
          <FunFact/>
          <WhyUs/>
      </React.Fragment>
    )
}

export default HomePage;