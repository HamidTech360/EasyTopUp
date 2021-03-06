import React from 'react'
import { Link } from 'react-router-dom'
import '../css/quickLink.css'
const QuickLinks = ()=>{
    return(
        <div className="container">
            <div className="QL_headings">
                Quick Links
            </div>
            <div className="QLs">

               <Link style={{textDecoration:'none'}} to="/user/data">
                <div className=" QL_items text-center">
                        <img src="../../../../../assets/data.jpg" alt="icon" className="quickLinkIcons" />
                        <div className="quickLinkTexts">Buy Data</div>
                </div>
               </Link>

                <Link style={{textDecoration:'none'}} to="/user/airtime">
                <div className=" QL_items text-center">
                 <img src="../../../../../assets/airtime.svg" alt="icon" className="quickLinkIcons" />
                    <div className="quickLinkTexts"> Airtime TopUp</div>
                </div>
                </Link>

                <Link style={{textDecoration:'none'}} to="/user">
                <div className=" QL_items text-center">
                <img src="../../../../../assets/utility.jpg" alt="icon" className="quickLinkIcons" />
                    <div className="quickLinkTexts">Utility Bills</div>
                </div>
                </Link>

                <div className=" QL_items text-center">
                <img src="../../../../../assets/airtime2cash.jpg" alt="icon" className="quickLinkIcons" />
                    <div className="quickLinkTexts">Airtime to data</div>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks;