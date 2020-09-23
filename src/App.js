import React, {useEffect, useState} from 'react';
import './App.css';
import makeServer from './components/server';
function App() {
makeServer();
//Making use of usestate to update the fethced data ....2
const [data, setData] = useState([]);  


// Making useffect to call our function with async characteristics.....1
// const apicall =() => {
  useEffect(() => {
    setInterval(() => {
      fetch('/fakeapi/items').then((res) => res.json()).then ((item) => {
        // console.log(data);
        setData(item);
      })
    }, 1000 )
    }, [])
// }

const adddatatoserver =() => {
  const food = "Soophley"
  const type =  "Appetizer"

   fetch('/fakeapi/add', {
    method: "Post",
    body: JSON.stringify({food, type})
  })

}

if (!data.length)
return <h2>Loading..!</h2>
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
       {/* <button onClick = {apicall}>Refresh the list of content</button> */}
     </div>
     <button onClick = {adddatatoserver} >Add Data</button>
    </div>
  );
}

export default App;
