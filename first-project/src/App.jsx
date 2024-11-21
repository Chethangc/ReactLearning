import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
// import Navbar from "./components/Navbar";

const App = () => {

  
  let x = "Great Stack"
  let a = ['a', 'b', 'c'];
  // let data = 'girl'; //normal varaiable without state
  let [data, setData] = useState('boy');
  const btnClick = () => {
          console.log(data); 
          // data='boy'; // Normal Javascript will not display the change.
          setData('Girl')
          console.log(data);
  }
  return (
    // <div><Navbar/></div>
    /*
    1. Using variables.
    2. Conditional display.
    3. Array display.
    4. Event handling.
    */
    <div>
      <div>{x}</div>
      <div>{data==='boy' ? <h1>Boy</h1> : <h1>Girl</h1>}</div>
      <div>{a.map( (alpha)=>{return <h1>{alpha}</h1>} )}</div>
      <button onClick={()=>{btnClick()}}>Clickme</button>
      <FirstComponent data={data} fn={setData}/>
    </div>
  )
}

export default App;