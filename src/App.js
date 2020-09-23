import React, {useEffect, useState} from 'react';
import './App.css';
import makeServer from './components/server';
function App() {
makeServer();
//Making use of usestate to update the fethced data ....2
const [data, setData] = useState([]);  


// Making useffect to call our function with async characteristics.....1
useEffect(() => {
  fetch('/fakeapi/items').then((res) => res.json()).then ((item) => {
    // console.log(data);
    setData(item);
  })
  }, [])
  return (
    <div className="App">
     <div>
       <ul>
         {data.map((obj,ind) => {
          return <li key = {ind}>
             {obj.food} 
             
             {obj.type}
           </li>
         })}
       </ul>
     </div>
    </div>
  );
}

export default App;
