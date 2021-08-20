import React from 'react'
import './css/landing.css'

const Landing = ()=>{
    return(
        <div className="wrapper" style={{background:`url('./assets/networkdark.jpg')`,}}>
            <div className="overlay">
            <div className="container">
                <div className="row container">
                    <div className="col-lg-6 col-xs-12 text">
                        <div>
                        <span className="white-text"> Get Instant {'&'} Auomated</span> 
                        <br/> <span className="colored">Airtime and Data TopUp</span>
                        </div>
                        <div className="medium-text">
                            We provide easy and automated topup 
                        </div>
                        <div className="faint-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, quidem. <br/>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, maiores.
                        </div>
                        <div>
                            <button className="btn btnJoin" id="btn">Join us</button>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-xs-12 network-img-box hideOnMobile">
                        <img src="assets/network.jpg" className="network-img" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Landing;