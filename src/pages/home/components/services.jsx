import React from 'react';
import ServiceCard from './service-card';

import '../css/services.css'

const Services = () => {
    return ( 
        <div className="services text-center" id="services">
            <div className="service-header">Services we provide</div>
            <div className="row service-grid">
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <ServiceCard
                        fabColor="#E88CEA"
                        icon="fa-unlink"
                        headerText="Airtime Topup"
                        lightText="Making an online recharge has been very easy and safe on EASYTOPUP"
                    />
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <ServiceCard
                        fabColor="#835EF8"
                        icon="fa-wifi"
                        headerText="Data Subscription"
                        lightText="Start enjoying this very low rates Data plan for your intenet browsing"
                    />
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <ServiceCard
                        fabColor="#E88CEA"
                        icon="fa-credit-card"
                        headerText="Airtime to Cash"
                        lightText="We offer this service at a very affordable rate. please login to get your current conversio rate"
                    />
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <ServiceCard
                        fabColor="#835EF8"
                        icon="fa-podcast"
                        headerText="Utility Bill"
                        lightText="Start enjoying this very low rate utility bill payment for your electricity"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Services;