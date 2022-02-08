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
          icon:'fa-user-o',
          hash:true
        },
        {
          label:'Services',
          target:'/#services',
          icon:'fa-address-book',
          hash:true
        },
        {
          label:'SignUp',
          target:'/signup',
          icon:'fa-envelope-open'
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
        </div>
     );
}
 
export default Home;