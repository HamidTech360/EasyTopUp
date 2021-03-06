import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

 import './css/drawer.css'


const useStyles = makeStyles({
    paper:{
      background:'rgb(9, 9, 26)',
      paddingTop:'30px',
      width:'240px',
      border:'1px solid rgba(255, 255, 255, 0.21)'
     
    }
  })


const SwipeableSideNav = (props)=>{

    const navigate = useNavigate()
    const styles = useStyles()
   


    const [state, setState] = React.useState({
        right: false,
        left:false
      });

    const LogOut = ()=>{
      localStorage.clear()
      navigate('/')
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const classes = useStyles();

      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
              [classes.fullList]: anchor === 'top' || anchor === 'bottom' ,
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>

            <div className="row welcome_card">
              <div className="col-2">
                <img src="../../../assets/avatar.png" className="avatar_profile_img" alt="" />
              </div>
              <div className="col-8 welcomeText">
                Welcome User
                <div className="faint_welcome">
                  Get Easy topUp @ EasyTopUp
                </div>
              </div>

            </div>

            {props.options.map((text, index) => (
              
                <Link 
                  key={index} 
                  to={text.target} 
                  style={{textDecoration:'none', color:'whitesmoke'}}
                  
                >
                  <div className="drawer-list">
                        <span className="drawer-icon"><i className={`fa ${text.icon}`}></i> </span>
                        <span className="drawer-label">{text.label}</span>
                  </div>               
                </Link>
             
            ))}

                  <div className="drawer-list"  style={{textDecoration:'none', color:'whitesmoke'}} onClick={()=>LogOut()}>
                        <span className="drawer-icon"><i className={`fa fa-user-times`}></i> </span>
                        <span className="drawer-label">LogOut</span>
                  </div>    
          </List>
     
        </div> 
      );

    return(
        <div>
        
          <React.Fragment>
            <Button onClick={toggleDrawer(props.position, true)}><i className="fa fa-align-left fa-2x"></i></Button>
            <SwipeableDrawer
              anchor={props.position}
              open={state[props.position]}
              onClose={toggleDrawer(props.position, false)}
              onOpen={toggleDrawer(props.position, true)}
              classes={{paper:styles.paper}}
            >
              {list(props.position)}
            </SwipeableDrawer>
          </React.Fragment>
       
      </div>
    )
}

export default SwipeableSideNav;