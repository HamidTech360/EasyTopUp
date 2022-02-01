import React from 'react'
import Card from './grid_card';
import './css/grid.css'
import BackupIcon from '@material-ui/icons/Backup';

const Grid = ()=>{
    return(
        <div className="gridWrapper ">
            <div className="additional_services text-center" >
                <div className="bold-text">
                    Additional Packages {'&'} Benefits
                </div>
                <div className="light-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Accusamus nobis libero voluptates quas enim facere? Qui ea sint autem a!
                    Lorem ipsum dolor sit amet.
                </div>
            </div>

            <div className="grid row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 grid-item">
                   <Card
                        icon="fa-credit-card"
                        headerText="E-wallet System"
                        text="Your e-wallet is the safest, earliest and fastest
                        means of carrying out transaction with us. Your funds are secure with your e-wallet
                        and can be kept for you as long as you
                        "
                   />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 grid-item">
                   <Card
                        icon="fa-lock"
                        headerText="Reliable & secure"
                        text="We have a fully reliable and dependent platform
                        You get 100% value for any transaction you carry with us .
                        "
                   />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 grid-item">
                   <Card
                        icon="fa-plane"
                        headerText="Automated Service"
                        text="Our service delivery and wallet funding is automated. Your purchase are automated 
                        and get delivered to you at the blink of an eye
                        "
                   />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 grid-item">
                   <Card
                        icon="fa-phone"
                        headerText="Customer Support"
                        text="Our customers are premium to us, hence satisfying them is our top most priority.
                            our customers service is availabe 24/7
                        "
                   />
                </div>
            </div>

        </div>
    )
}

export default Grid;