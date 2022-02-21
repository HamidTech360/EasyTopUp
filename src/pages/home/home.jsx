import React, {useState, useEffect} from 'react';
import Header from '../../components/header/header'
import Banner1 from './components/banner'
import Features from './components/features';
import Services from './components/services';
import WhyUs from './components/whyus';
import Footer from '../../components/footer/footer'
import SimpleBackdrop from '../../components/backdrop/backdrop';

import './css/home.css'

const Home = () => {

  const [open, setOpen] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setOpen(false)
    }, 1000)
  },[])

    const options = [
        {
          label:'Home',
          target:'/',
          icon:'fa-home'
        },
        {
          label:'Features',
          target:'/#features',
          icon:'fa-podcast',
          hash:true
        },
        {
          label:'Services',
          target:'/#services',
          icon:'fa-address-book',
          hash:true
        },
        {
          label:'Sign In',
          target:'/login',
          icon:'fa-user'
        },
        
      ]

    if(open){
      return(
        <SimpleBackdrop open={open} />
      )
    }

    return ( 
        <div className="home">
            <Header options={options} />
            <Banner1/>
            <Features/>
            <Services/>
            <WhyUs/>
            <Footer/>
            <a href="https://wa.me/+2347015713905">
            <button className="fixed-whatsap-btn">
                <i className="fa fa-whatsapp fa-2x"></i>
            </button>
            </a>
        </div>
     );
}
 
export default Home;