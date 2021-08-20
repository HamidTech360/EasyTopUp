import React from 'react'
import { Link } from 'react-router-dom';
import './btn.css'

const WhatsappBtn = () => {
    return ( 
        <Link to="https://api.whatsapp.com/send?phone=+2348101056795&text= Hello !!! GTA Real Estate and Property Management Agency"> 
            <button style={{
                    position: 'absolute',
                    left:'70%',
                    top: '85%',
                    padding: '10px',
                    backgroundColor: 'rgb(106, 202, 10)',
                    borderRadius: '50%',
                    height:' 70px',
                    width: '70px',
                    borderColor: 'rgb(106, 202, 10)'
            }} className="btn-whatsap fixed-bottom">
                <i class="fa fa-whatsapp fa-3x "></i>
            </button>  
        </Link>
     );
}
 
export default WhatsappBtn;