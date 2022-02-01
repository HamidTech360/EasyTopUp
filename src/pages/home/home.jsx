import React from 'react'
import Landing from './components/landing';
import Header from '../../components/header/header';
import Grid from './components/grd';
import FunFact from './components/funfact';
import WhyUs from './components/whyus';
import Services from './components/services';
import Footer from '../../components/footer/footer'

import './components/css/home.css'

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
          <Services/>
          <WhyUs/>
          <Footer/>
      </React.Fragment>
    )
}

export default HomePage;