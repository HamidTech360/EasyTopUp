import React from 'react'
import './css/grid.css'
import BackupIcon from '@material-ui/icons/Backup';

const Grid = ()=>{
    return(
        <div className=" text-center gridWrapper ">
            <div className="additional_services container" >
                <div className="bold-text">
                    Additional Packages {'&'} Benefits
                </div>
                <div className="light-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Accusamus nobis libero voluptates quas enim facere? Qui ea sint autem a!
                    Lorem ipsum dolor sit amet.
                </div>
            </div>

            <div className="grid row container">
                <div className="col-3 col-md-5 col-xs-9 grid-item">
                     <i className="fa fa-anchor fa-2x"></i>
                     <div className="grid-tetx text-center">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Inventore optio voluptatem amet adipisci iste! Adipisci quae dolore saepe nulla quo!
                     </div>
                </div>
                <div className="col-3 col-md-5 col-xs-9 grid-item">
                    <i className="fa fa-firefox fa-2x"></i>
                     <div className="grid-tetx text-center">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Inventore optio voluptatem amet adipisci iste! Adipisci quae dolore saepe nulla quo!
                     </div> 
                </div>
                <div className="col-3 col-md-5 col-xs-9 grid-item">
                    <i className="fa fa-first-order fa-2x"></i>
                     <div className="grid-tetx text-center">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Inventore optio voluptatem amet adipisci iste! Adipisci quae dolore saepe nulla quo!
                     </div>
                </div>
            </div>

        </div>
    )
}

export default Grid;