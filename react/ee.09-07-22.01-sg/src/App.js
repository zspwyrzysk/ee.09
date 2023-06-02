import './App.css';

function App() {
  return (
    <div className="App">
      <section id="banner">
        <h2>Galeria miejsc ciekawych</h2>
      </section>
      <section id="main">
        <img src="../assets/lanzarotte.jpg" alt="Galeria"></img>
      </section>
      <section id="banner_left">
        <h3>Przegląd zdjęć</h3>
        <img src="../assets/lanzarotte.jpg" alt="lanzarotte"></img>
        <img src="../assets/pekin.jpg" alt="pekin"></img>
        <img src="../assets/serengeti.jpg" alt="serengeti"></img>
        <img src="../assets/wenecja.jpg" alt="wenecja"></img>
        <img src="../assets/tajlandia.jpg" alt="tajlandia"></img>
      </section>
      <section id="banner_right">
        <h3>Obrazy w naszej galerii</h3>
        <table>
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
        </table>
        <p>
          Polub nas
          <img src="../assets/icon-off.png"></img>
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
