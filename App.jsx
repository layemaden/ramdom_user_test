import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css';

function App() {
//settig state for the API
  const [data, setData] = useState(null);

  useEffect(()=> 
  {
    //fetching API
    axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(res => setData(res.data));
  },[])
  //calling the api data
  const d = data && data[0] ? data.map(item => (<tr key={item.id}> <th>{item.id}</th> <td>{item.name}</td> <td>{item.phone}</td> <td>{item.email}</td> <td>{item.address.street}</td>
    </tr>
  )) : null;

  //create table
  return (
    <div className="App">
    <table border={2}>
    <thead>
      <th>S/N</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Street Address</th>
    </thead>
    {d}
    {/* table heading style */}
    <caption>Table Data</caption>
    </table>
    </div>
  );
}

export default App;
