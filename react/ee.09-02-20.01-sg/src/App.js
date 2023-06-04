import './App.css';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Banner from './Banner';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
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
