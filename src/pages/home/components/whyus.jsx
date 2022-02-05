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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quibusdam ratione expedita enim officia, laborum aliquid tempore ipsum magnam, quo velit facilis 
                        reiciendis! Aspernatur officia libero fuga deserunt excepturi, sint aliquid? <br/>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque neque veritatis obcaecati fuga quis saepe accusantium hic vel aut perferendis.
                         Consequatur non debitis consequuntur harum.
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

