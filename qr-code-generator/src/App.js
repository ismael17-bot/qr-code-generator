import React, { useState } from "react";

import QRCodeCanvas from "qrcode.react";

import './App.css';

function App() {
  const [url, setUrl] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [fgColor, setFgColor] = useState("");
  const [sizeQr, setSizeQr] = useState("");

  return (
    <div className="App">

      <div className="Qr__container">
        <QRCodeCanvas
          value={url}
          size={sizeQr}
          bgColor={bgColor}
          fgColor={fgColor}
          level="M"
        />
      </div>

      <form className="form__container">
          <div>
            <label>Digite sua Url: </label>
                <input
                  className="input__url"
                  type="url" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
          </div>
          <div>
            <label>Selecione a cor do fundo:</label>
                <input
                  className="input__color"
                  type="color" 
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
          </div>
          <div>
            <label>Selecione a cor do Qr: </label>
                <input
                  className="input__color"
                  type="color" 
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                />
            
          </div>
          <div>
            <label>Escolha o tamanho </label>
                <input
                  min="200" max="300"
                  type="range" 
                  value={sizeQr}
                  onChange={(e) => setSizeQr(e.target.value)}
                />
          </div>
        </form>
    </div>
  );
}

export default App;
