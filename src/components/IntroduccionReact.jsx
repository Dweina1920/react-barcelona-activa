import "../App.css"
function saludar() {
  return "Hola Bona Tarda";
}
const curs = "Introducció a React.js a Barcelona Activa";
const edat = 19;
const inlineStyle = {
  color: "lightblue",
  fontSize: "25px",
};

const functionClick = () => {
  console.log("S'ha fet Click.");
};
const mouseOver = () => {
  console.log("Heeey, s'ha passat el ratolí per sobre.");
};

const funcioAmbParametres = (tipus) => {
  console.log(`S'ha activat la funció: ${tipus}`);
};

function IntroduccionReact() {
  return (
    <>
      <button onClick={() => funcioAmbParametres("functionClick")}>
        Apreta'm con evento
      </button>
      <h2 onMouseOver={() => funcioAmbParametres("mouseOver")}>
        Passa per sobre con evento
      </h2>

      <button onClick={functionClick}>Apreta'm con evento</button>
      <h2 onMouseOver={mouseOver}>Passa per sobre con evento</h2>
      <h1>Control de eventos:</h1>
      <p style={inlineStyle}> InlineStyle: En un lugar de la mancha...</p>
      <h1 className="color">Hola qué tal?</h1>
      <h1> Jo molt bé, i tu?</h1>
      <h2>Operació de mates: {5 + 5}</h2>
      <h2>Crido a la funció: {saludar()}</h2>
      <h2>Template literals: {`Estic estudiant ${curs}.`}</h2>
      <h2>
        Operador ternanri:{" "}
        {edat >= 18 ? "Ets major d'edat" : "No ets major d'edat"}
      </h2>
    </>
  );
}

export default IntroduccionReact;
