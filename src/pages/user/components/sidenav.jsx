import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import List from '@material-ui/core/List';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';

import 'bootstrap/dist/css/bootstrap.css'
import './css/sidenav.css'


const useStyles = makeStyles({
  paper:{
    background:'#2b044d',
    paddingTop:'30px',
    width:'200px',
    border:'1px solid rgba(255, 255, 255, 0.21)'
   
  }
})

const SideNav = ({NavOptions})=>{
    const styles = useStyles()

    return(

        
      
        <Drawer
            sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
            classes={{paper:styles.paper}}
        >
                <div className="dash-page-name">
                    <GraphicEqIcon
                            style = {{
                                color:'fuchsia',
                                fontSize:'45px'
                            }}
                        />
                    <span className="icon-name">EasyTopUp</span>
                </div>
                <Toolbar />
               
                <List>
                {NavOptions.map((item, index) => (
                   <Link to ={item.target} style={{textDecoration:'none'}} key={index}>
                         <div className="list-item dash-list-item" key={index} style={{ paddingLeft:'50px'}}>
                            <span className="list-item-icon"> <i className={`fa ${item.icon} fa-1x`}></i> </span>
                            <span className="list-item-text">{item.label}</span>
                        </div>
                   </Link>
                ))}
                </List>
                <div className="fixed-logout">Logout</div>
            </Drawer>
        
    )
}

export default SideNav














































// import React from 'react'

// import List from '@material-ui/core/List';
// import {ExitToApp, Home, Phone, Wifi} from '@material-ui/icons'
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import { ListItemIcon } from '@material-ui/core';
// import {Link} from 'react-router-dom'

// const SideNav = ()=>{
//     return(
//         <List>


//             <div className="row welcome_card">
//               <div className="col-2">
//                 <img src="assets/avatar.png" className="avatar_profile_img" alt="" />
//               </div>
//               <div className="col-8 welcomeText">
//                 Welcome User
//                 <div className="faint_welcome">
//                   Get Easy topUp @ EasyTopUp
//                 </div>
//               </div>

//             </div>
//         <ListItem button >
//              <ListItemIcon> <Home style={{color:'rgb(9, 9, 26)'}}/></ListItemIcon> 
//             <Link to={'/profile'} style={{textDecoration:'none', color:'black', fontWeight:'bolder'}}> 
//                 <ListItemText primary={'home'} />
//             </Link>
//         </ListItem>
//         <Divider/>

//         <ListItem button >
//             <ListItemIcon> <Wifi style={{color:'rgb(9, 9, 26)'}}/></ListItemIcon>
//             <Link to={'/fund_wallet'} style={{textDecoration:'none', color:'black'}}> 
//                 <ListItemText primary={'Fund wallet'} />
//             </Link>
//         </ListItem>
//         <Divider/>

//         <ListItem button >
//             <ListItemIcon> <Wifi style={{color:'rgb(9, 9, 26)'}}/></ListItemIcon>
//             <Link to={'/profile/data_sub'} style={{textDecoration:'none', color:'black'}}> 
//                 <ListItemText primary={'Data topUp'} />
//             </Link>
//         </ListItem>
//         <Divider/>

//         <ListItem button >
//             <ListItemIcon> <Phone style={{color:'rgb(9, 9, 26)'}}/></ListItemIcon>
//             <Link to={'/profile/airtime'} style={{textDecoration:'none', color:'black'}}> 
//                 <ListItemText primary={'Airtime topUp'} />
//             </Link>
//         </ListItem>
//         <Divider/>

//         <ListItem button >
//             <ListItemIcon> <ExitToApp style={{color:'rgb(9, 9, 26)'}}/></ListItemIcon>
//             <Link to={'/'} style={{textDecoration:'none', color:'black'}}> 
//                 <ListItemText primary={'SignOut'} />
//             </Link>
//         </ListItem>
//         <Divider/>


//         </List>    
//     )
// }

// export default SideNav;