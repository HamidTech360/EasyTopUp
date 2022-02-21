import React from 'react'
import '../css/whyus.css'
const WhyUs = ()=>{
    return(
        <React.Fragment>
            <div className="row whyUs_wrapper">
                
                <div className="col-lg-5 col-xs-12">
                   
                    <div className="whyUsText" id="whyusText">
                        <div className="whyUsHeading">
                            Why Easy TopUp?
                            <div><button className="btn-card-divider"></button></div>
                        </div>
                        We provide our services base values that continues to grow reppidly, offering dipensal of services that span various categories including Data subscription, cable sub, electric bill, Airtime top up and much more. Our range of services are designed to ensure optimum levels of convenience and customer satisfaction with the reseller options, other optimum services include our Affordable price guarantee, Automated, Reliability, dedicated customer service support and many other premium services. As we continue to expand the Platform, our scope of offerings will increase in variety,
                         simplicity and conveniency, join us today and enjoy the increasing benefits..
                    </div>
                </div>

                <div className="col-lg-7 col-xs-12 img-box hideOnMobile">
                    <img src="../../../assets/img2.png" className="manImg" alt="" />
                </div>

            </div>        
        </React.Fragment>
    )
}

export default WhyUs

