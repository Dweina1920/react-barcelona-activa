import React, { Component } from "react";


class Classcomponent extends Component {
    //Constructor
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h1 >Sóc un component de classe</h1>
                <h1 className="fs-6">Props variable: { this.props.propsFunc1 }</h1>
                <h1 className="fs-6">Props String: { this.props.propsFunc2String }</h1>
                <h1 className="fs-6">Props Number: { this.props.propsFunc3Number }</h1>
                <h1 className="fs-6">Props Object: { this.props.propsFunc4Object.nom }</h1>

            </div>

        )
    }
}

export default Classcomponent;