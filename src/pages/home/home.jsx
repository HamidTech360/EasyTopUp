import React from 'react';
import Header from '../../components/header/header'
import Banner1 from './components/banner'
import Features from './components/features';
import Services from './components/services';
import WhyUs from './components/whyus';
import Footer from '../../components/footer/footer'

import './css/home.css'

const Home = () => {

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

    return ( 
        <div className="home">
            <Header options={options} />
            <Banner1/>
            <Features/>
            <Services/>
            <WhyUs/>
            <Footer/>
        </div>
     );
}
 
export default Home;