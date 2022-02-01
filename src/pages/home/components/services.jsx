import React from 'react';
import Card from './grid_card';
import './css/service.css'

const Services = () => {
    return ( 
    <div className="servicesContainer">
        <div className="service-light text-center">Services</div>
        <div className="bold-text text-center" id="service-header">Our Services</div>
        <div className="text-center"><button className="header-divider"></button></div>
        <div className="grid row" id="services">
             <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 grid-item">
                   <Card
                        icon="fa-wifi"
                        headerText="BUY DATA"
                        text="Start enjoying this very low rates Data plan for your intenet browsing
                        "
                   />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 grid-item">
                   <Card
                        icon="fa-unlink"
                        headerText="AIRTIME TOPUP"
                        text="Making an online recharge has been very easy and safe on EASYTOPUP
                        "
                   />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 grid-item">
                   <Card
                        icon="fa-podcast"
                        headerText="UTILITY BILL"
                        text="Start enjoying this very low rate utility bill payment for your electricity
                        "
                   />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 grid-item">
                   <Card
                        icon="fa-credit-card"
                        headerText="AIRTIME TO CASH "
                        text="We offer this service at a very affordable rate. please login to get your current conversio rate
                        "
                   />
            </div>
        </div>
    </div>
     );
}
 
export default Services;