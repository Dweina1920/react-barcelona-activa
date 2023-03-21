import React, {Component} from 'react';
import logo from '../img/logo.jpg';
import Salutacio from '../components/Salutacio';
import '../styles/Header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component{
    render(){
        var nom = "Dina";
        return(
           
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" height="50" className="d-inline-block align-top" />
          </Navbar.Brand>
         
          <Salutacio nick={nom}/>
          
        </Container>
      </Navbar>
        )
    }
}
export default Header;