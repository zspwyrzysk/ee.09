import './App.css';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
import ContainerLeft from './components/ContainerLeft';

function App() {
  return (
    <>
    <ContainerLeft />
    <section id="container-right">
      <section id="right-one">
        <h1>Salon kosmetyczny</h1>
      </section>
      <Outlet />
    </section>
    <Footer />
    </>
  );
}

export default App;
