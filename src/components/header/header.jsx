import React from 'react'
import { NavLink} from 'react-router-dom';



import TabList from './list';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import 'font-awesome/css/font-awesome.css';
import './header.css'
const Header = (props)=>{

    return(
        <div className="headerWrapper row">
           <div className="col-7 col-xs-8 graphIcon">
                <span className="icon">
                    <GraphicEqIcon
                        style = {{
                            color:'fuchsia',
                            fontSize:'45px'
                        }}
                    />
                    EasyTopUp
                </span>
           </div>


            <div className="col-lg-5 col-xs-3">
                
                 {/* Navbar */}
                 <div className="hideOnMobile">
                        <ul className="nav ">
                            <li  className="nav-item " >
                                <NavLink className="nav-link active" id="nav-1" aria-current="page" to="/">Home</NavLink>
                            </li>
                            
                            <li id="" className="nav-item">
                                <NavLink className="nav-link" id="nav-2" to="/login">login</NavLink>
                            </li>
                        
                            <li id="" className="nav-item">
                                <NavLink className="nav-link " id="nav-3" to="/" >contact US</NavLink>
                            </li>

                            <li id="" className="nav-item">
                                <NavLink className="nav-link " id="nav-3" to="/signup" ><button className="btn" id="btn">signUp</button></NavLink>
                            </li>
                        </ul>
                 </div>
                 {/* Menu Icon */}
                 <div className="hideOnDesktop float-right pull-right">
                    <TabList options={props.options} position="right"/>
                 </div>
               
                   
            </div>
           
         </div>
        
    )
}

export default Header;