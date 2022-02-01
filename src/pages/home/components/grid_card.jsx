import React from 'react';
import { Fab } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const Card = ({headerText, text, icon}) => {
    return ( 
        <div>
            <div className="card-headers"> {headerText} </div>
            <Fab
                style={{
                    backgroundColor:'rgb(83, 22, 83)',
                    borderRadius:'5px',
                    color:'white'
                }}
               
            >
                <i className={`fa ${icon} fa-2x`}></i>
            </Fab>
            <div>
                <button className="btn-card-divider"></button>
            </div>
            <div className="grid-text">
                {text}
            </div>
        </div>
     );
}
 
export default Card;