import React, {Component} from 'react';
import logo from '../img/logo.jpg';
import Salutacio from '../components/Salutacio';
import '../styles/Header.css'

class Header extends Component{
    render(){
        var nom = "Dina";
        return(
            <>
                <h1 className='salutacio'><img src={logo} height="60px" width="60px"/> El teu portal de montanya. <Salutacio nick={nom}/></h1> 
            </>
        )
    }
}
export default Header;