import React from 'react'
import '../css/quickLink.css'
const QuickLinks = ()=>{
    return(
        <div className="container">
            <div className="QL_headings">
                Quick Links
            </div>
            <div className="row QLs">
                <div className="col-5 col-md-4 col-xs-2 QL_items text-center">
                    <i className="fa fa-rss fa-2x quickLinkIcons"></i>
                    <div className="quickLinkTexts">Purchase/Top Up <br /> Data</div>
                </div>
                 <div className="col-5 col-md-4 col-xs-2 QL_items text-center">
                    <i className="fa fa-phone fa-2x quickLinkIcons"></i>
                    <div className="quickLinkTexts">Purchase/Top Up <br /> Airtime</div>
                </div>
                <div className="col-5 col-md-4 col-xs-3 QL_items text-center">
                    <i className="fa fa-podcast fa-2x quickLinkIcons"></i>
                    <div className="quickLinkTexts">Pay Utitlity <br /> Bills</div>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks;