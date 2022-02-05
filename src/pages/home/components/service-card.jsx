import React from 'react';
import { Fab } from '@material-ui/core';
import '../css/service-card.css'

const ServiceCard = ({fabColor, icon, headerText, lightText}) => {
    return ( 
        <div className="service-card">
            <div className="text-center">
                <Fab
                    style={{
                        backgroundColor:fabColor,
                        color:'whitesmoke'
                    }}
                >
                    <i className={`fa ${icon} fa-2x`}></i>
                </Fab>
            </div>
            <div className="text-center service-card-heading">{headerText}</div>
            <div className="service-light-text">
                {lightText}
            </div>
        </div>
     );
}
 
export default ServiceCard;