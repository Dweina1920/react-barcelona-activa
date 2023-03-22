import React from "react";

const FunctionalComponent1 = ({ fillAPare }) => {
  const data = "Aquesta és la data que pasa del component del fill al pare";
  return (
    <div>
      <button onClick={() => fillAPare(data)}>
        Passar la data del fill al pare
      </button>
    </div>
  );
};

export default FunctionalComponent1;
