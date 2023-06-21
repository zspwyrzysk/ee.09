import { Link } from "react-router-dom";

function ContentLeft() {
    return (
    <>
        <div id="content-left">
          <Link to="/"><img src="../assets/home.png" alt=""></img></Link>
          <Link to="/kalkulacja"><img src="../assets/znak.png " alt=""></img></Link>
      </div>
    </>
    );
  }
  
  export default ContentLeft;
