import React from "react";
import {Link} from 'react-router-dom';
import './HeaderMain.css' ;
import logo from '../../img/logo.png';

function HeaderMain(){
    return(
        <header>
         
                <div className="logo">
                   <img src={logo} style={{width:'100px',alignContent:"flex-start"}}  />
              
                </div>
                


                <div className="btn-newPost">

                    <Link to = "/post">
                        <button> ADD</button>
                    </Link>

                </div>

            
        </header>



    )
    

}





export default HeaderMain