import React from 'react'
import './css/funfact.css'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AndroidIcon from '@material-ui/icons/Android';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const FunFact = ()=>{
    return(
        <React.Fragment>
            <div className="funfact_wrapper">
                <div className="funfact-heading text-center">
                    Fun fact about Us 
                    
                </div>
                <div className="row container fun-grid">
                    <div className="col-4 text-center">
                        <QueryBuilderIcon
                            style={{color:'white', fontSize:'50px'}}
                        />
                        <div className="funfactText">
                            24/7 Available
                        </div>

                    </div>
                    <div className="col-4 text-center">
                        <AndroidIcon
                            style={{color:'white', fontSize:'50px'}}
                        />
                        <div className="funfactText">
                            Limitless Bonuses
                        </div>

                    </div>
                    <div className="col-4 text-center">
                        <AttachMoneyIcon
                            style={{color:'white', fontSize:'50px'}}
                        />
                        <div className="funfactText">
                            Cheap TOpUp
                        </div>

                    </div>
                </div> 
            </div>        
        </React.Fragment>
    )
}

export default FunFact