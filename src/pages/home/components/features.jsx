import React from 'react';


import FeatureCard from './feature-card';

import '../css/features.css'

const Features = () => {
    return ( 
        <div className="features">
            <div className="feature-bold">Some of the amazing features of the app</div>
            <div className="row feature-grid">
               <div className="col-lg-6 col-md-6 col-sm-12 col-x-12 feature-card-grid">
                    <FeatureCard
                        icon="fa-credit-card"
                        heading="E-wallet System"
                        lightText="Your e-wallet is the safest, earliest and fastest means of carrying out transaction with us. Your 
                        funds are secure with your e-wallet and can be kept for you as long as you."
                    />
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12 col-x-12 feature-card-grid">
                    <FeatureCard
                        icon="fa-lock"
                        heading="Reliable and Secure"
                        lightText="We have a fully reliable and dependent platform You get 100% 
                        value for any transaction you carry with us ."
                    />
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12 col-x-12 feature-card-grid">
                    <FeatureCard
                        icon="fa-plane"
                        heading="Automated Service"
                        lightText="Our service delivery and wallet funding is automated. Your purchase are automated and get delivered to you at 
                        the blink of an eye."
                    />
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12 col-x-12 feature-card-grid">
                    <FeatureCard
                        icon="fa-phone"
                        heading="Customer Support"
                        lightText="Our customers are premium to us, hence satisfying them is our top most priority. 
                        our customers service is availabe 24/7t."
                    />
               </div>
            </div>
        </div>
     );
}
 
export default Features;