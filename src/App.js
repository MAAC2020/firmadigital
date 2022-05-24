import React, { useRef, useState } from "react";
import "./App.css";
import SignatureCanvas from "react-signature-canvas";

function App() {

  /* 
  COLOCARLE ESTOS ESTILOS
  .signatureCanvas{
  border:1px solid black;
  width: 100%;
  min-height: 500px;
}
  */
  //use ref
  const sigCanvas = useRef();
  const [imagen, setImagen] = useState();

  const limpiar = () => {
    //limpiar el canvas
    sigCanvas.current.clear();
    //cambiar el estado a falso para que no se muestre
    setImagen(false);
  };

  const guardar = () => {
    //obtener la imagen en base 64
    let urlImagen = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setImagen(urlImagen);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{
                className: "signatureCanvas",
              }}
            />
            <button className="btn btn-primary" onClick={limpiar}>
              Limpiar
            </button>
            <button className="btn btn-primary" onClick={guardar}>
              Guardar
            </button>
          </div>
          {imagen && (
            <div className="col-6">
              <img src={imagen} alt="firma"></img>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
