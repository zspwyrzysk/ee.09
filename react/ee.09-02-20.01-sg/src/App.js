import './App.css';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
import Banner from './components/Banner';
import ContentLeft from './components/ContentLeft';
import ContentRight from './components/ContentRight';

function App() {
  return (
    <div className="App">
      <Banner />
      <ContentLeft />
      <ContentRight />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
