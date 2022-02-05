import React from 'react';
import {Fab} from '@material-ui/core'

import '../css/feature-card.css'


const FeatureCard = ({icon, heading, lightText}) => {
    return ( 
        <div className="feature-card">
            <div className="fab">
                <Fab style={{backgroundColor:'#8667DE', color:'whitesmoke'}}>
                    <i className={`fa ${icon} fa-2x`}></i>
                </Fab>
            </div>
            <div className="feature-text">
                <div className="feature-text-bold">
                   {heading}
                </div>
                <div className="feature-text-light">
                    {lightText}
                </div>
            </div>
        </div>
     );
}
 
export default FeatureCard;
