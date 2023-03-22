import "./App.css";
import Header from "./components/Header.jsx";
import FunctionalComponent from "./components/FunctionalComponent";
import Classcomponent from "./components/ClassComponent";
import { useState } from "react";
import FunctionalComponent1 from "./components/FunctionalComponent1";

function App() {
  const propVariable = "Sòc una variable.";
  const propObjecte = {
    nom: "Mariam",
    cognom: "Oulad",
    edat: 4,
  };

  const [data, setData] = useState("");
  const fillAPare = (fraseDelFill) => {
    console.log("frase del fill :", fraseDelFill);
    setData(fraseDelFill);
  };
  return (
    <>
      <div className="bg-primary card">
        <Header />
      </div>
      <div>
        <FunctionalComponent
          propsFunc1={propVariable}
          propsFunc2String="Estudiante"
          propsFunc3Number={3}
          propsFunc4Object={propObjecte.nom}
          propsFunc4ObjectCognom={propObjecte.cognom}
        />

        <Classcomponent
          propsFunc1={propVariable}
          propsFunc2String="Estudiante"
          propsFunc3Number={3}
          propsFunc4Object={propObjecte.nom}
          propsFunc4ObjectCognom={propObjecte.cognom}
        />
      </div>
      <div>
        {data}
        <FunctionalComponent1 fillAPare={fillAPare} />
      </div>
    </>
  );
}

export default App;
