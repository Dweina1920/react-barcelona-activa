import React, { Component } from "react";
import Salutacio from "./Salutacio";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
    //connect db
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    var boto;
    //renderitzat condicional
    if (isLoggedIn) {
      boto = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      boto = <LogintButton onClick={this.handleLoginClick} />;
    }
    return (
      <span>
        <Saluda isLoggedIn={isLoggedIn} />
        {boto}
      </span>
    );
  }
}

function Saluda(props) {
    const isLoggedIn = props.isLoggedIn;
    //conocer el estadp (si está logueado o no)
    if (isLoggedIn){
        const  nom= "Mariam";
        return(
            <Salutacio nick = {nom} />
        )
    }
    return <SalutacioAnonima />

}

function SalutacioAnonima(){
    return (
        <span>Identifica't siusplau</span>
    )
}
function LogintButton(props){
    return (
        <button className="btn btn-sucess" onClick={props.onClick}>
          Login
        </button>
      );
}

function LogoutButton(props){
    return(
    <button className="btn btn-danger" onClick={props.onClick}>Logout
    </button>
    )
}

export default LoginControl;
