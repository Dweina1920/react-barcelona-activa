import "./App.css";
import Header from "./components/Header.jsx";
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  const propVariable = "Sòc una variable.";
  const propObjecte = {
    nom: "Mariam",
    cognom: "Oulad",
    edat: 4,
  };
  return (
    <>
      <div className="bg-primary card">
        <Header />
      </div>
      <div>
        <FunctionalComponent
          propsFunc1 = {propVariable}
          propsFunc2String = "Estudiante"
          propsFunc3Number = {3}
          propsFunc4Object = {propObjecte.nom}
          propsFunc4ObjectCognom = {propObjecte.cognom}
          
        />
      </div>
    </>
  );
}

export default App;
