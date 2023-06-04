import { useState } from 'react';

function Kalkulacja() {
    
    let [message, setMessage] = useState("");
    let [liters, setLiters]  = useState({});;
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        liters = setLiters({liters: inputs.spalanie * inputs.dystans /100});
        message = setMessage(`Potrzebujesz: ${liters} litrów paliwa`);
    }
    return (
    <>
        <div id="main">
            <h2>Oblicz, ile litrów musisz zatankowa</h2>
            <form onSubmit={handleSubmit}>
                dystans do przejechania w km:<br />
                <input type="number" name="dystans" id="dystans" value={inputs.dystans || ""} onChange={handleChange} /><br />
                spalanie samochodu w l/100km:<br />
                <input type="number" id="spalanie" name="spalanie" value={inputs.spalanie || ""} onChange={handleChange} /><br />
                <input type="submit" value="oblicz" />
            </form>
            <p>{message}</p>
        </div>
    </>
    );
  }
  
  export default Kalkulacja;
