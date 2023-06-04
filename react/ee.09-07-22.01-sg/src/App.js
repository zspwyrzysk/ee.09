import './App.css';
import React from "react";
import { useState } from "react";

function App() {
  const ref = React.useRef(null);
  const changeImage = (image, ref) => {
    //console.log(ref);
    ref.current.setAttribute('src', `../assets/${image}`);
  }
  const [name, setName] = useState("../assets/icon-off.png");
  const changeIcon = () => {
    let value = name;
    if (value === "../assets/icon-off.png") {
      setName("../assets/icon-on.png");
    } else {
      setName("../assets/icon-off.png");
    }
  }
  return (
    <div className="App">
      <section id="banner">
        <h2>Galeria miejsc ciekawych</h2>
      </section>
      <section id="main">
        <img ref={ref} src="../assets/lanzarotte.jpg" alt="Galeria"></img>
      </section>
      <section id="banner_left">
        <h3>Przegląd zdjęć</h3>
        <img onClick={(event) => changeImage("lanzarotte.jpg", ref)} src="../assets/lanzarotte.jpg" alt="lanzarotte"></img>
        <img onClick={(event) => changeImage("pekin.jpg", ref)} src="../assets/pekin.jpg" alt="pekin"></img>
        <img onClick={(event) => changeImage("serengeti.jpg", ref)} src="../assets/serengeti.jpg" alt="serengeti"></img>
        <img onClick={(event) => changeImage("wenecja.jpg", ref)} src="../assets/wenecja.jpg" alt="wenecja"></img>
        <img onClick={(event) => changeImage("tajlandia.jpg", ref)} src="../assets/tajlandia.jpg" alt="tajlandia"></img>
      </section>
      <section id="banner_right">
        <h3>Obrazy w naszej galerii</h3>
        <table>
          <tbody>
            <tr>
              <td>Europa</td>
              <td>Azja</td>
              <td>Afryka</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
        <p>
          Polub nas
          <img src={name} alt="icon" onClick={(event) =>changeIcon()}></img>
        </p>
        <a href="https://pixabay.com">Odkryj więcej zdjęć</a>
      </section>
      <section id="footer">
        Autor: 823749238749274
      </section>
    </div>
  );
}

export default App;
