import React from 'react'
import './css/whyus.css'
const WhyUs = ()=>{
    return(
        <React.Fragment>
            <div className="row whyUs_wrapper">
                <div className="col-lg-4 col-xs-12 img-box">
                    <img src="assets/man.jpg" className="manImg" alt="" />
                </div>
                <div className="col-lg-8 col-xs-12">
                    <div className="bold-text whyUsHeading">
                        Why Easy TopUp?
                    </div>
                    <div className="medium-text" id="whyusText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Quibusdam ratione expedita enim officia, laborum aliquid tempore ipsum magnam, quo velit facilis 
                        reiciendis! Aspernatur officia libero fuga deserunt excepturi, sint aliquid? <br/>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque neque veritatis obcaecati fuga quis saepe accusantium hic vel aut perferendis.
                         Consequatur non debitis consequuntur harum.
                    </div>
                </div>
            </div>        
        </React.Fragment>
    )
}

export default WhyUs

