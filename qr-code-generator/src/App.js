import React, { useEffect, useState } from "react";

import QRCodeCanvas from "qrcode.react";

import './App.css';

function App() {
  const [url, setUrl] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [fgColor, setFgColor] = useState("");
  const [sizeQr, setSizeQr] = useState("");
  const [minSize, setMinSize] = useState(200);
  const [maxSize, setMaxSize] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMinSize(50);
        setMaxSize(120);
      } else if (window.innerWidth < 480) {
        setMinSize(50);
        setMaxSize(100);
      } else {
        setMinSize(100);
        setMaxSize(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                  min={minSize}
                  max={maxSize}
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
