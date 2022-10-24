import React from "react";
import {Link} from 'react-router-dom';
import voltar from '../../img/voltar.svg'


function Header(){
    return(
        <header>
            <div className="content">
                <Link to="/">
                <img src={voltar}  style={{width:'50px'}}/>
                
                </Link>

            </div>
        </header>



    )
    

}





export default Header