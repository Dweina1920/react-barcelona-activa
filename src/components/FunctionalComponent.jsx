import React from "react";

const FunctionalComponent = (props) => {
  return (
    <div>
      <h1>Sòc un component funcional</h1>
      <h5>Props variable: {props.propsFunc1}</h5>
      <h5>Props String: {props.propsFunc2String}</h5>
      <h5>Props número: {props.propsFunc3Number}</h5>
      <h5>Props número: {props.propsFunc4ObjectCognom}</h5>
    </div>
  );
};

export default FunctionalComponent;
