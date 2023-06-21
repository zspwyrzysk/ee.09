import { Link } from "react-router-dom";

function ContainerLeft() {
    return (
      <>
      <section id="container-left">
        <section id="left-one">
          <h2>W ofercie</h2>
          <ul>
            <li><Link to="/twarz">Zabiegi na twarz</Link>
              <ol>
                <li>Piling</li>
                <li>Maska</li>
                <li>Regulacja brwi</li>
              </ol>
            </li>
            <li>Masaż</li>
            <li>Diety oczyszczające</li>
          </ul>
          <Link to="/">Odnośnik do strony głównej</Link>
        </section>
        <section id="left-two">
          <img src="obraz1.jpg" alt="Kosmetycznka" />
        </section>
      </section>
      </>
    );
  }
  export default ContainerLeft;