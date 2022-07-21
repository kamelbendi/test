import React from 'react'
import './App.css';

//const axios = require('axios').default;

function App() {
const [value, setValue] = React.useState('');
const [list, setList] = React.useState([]);

function handleChange(e){
    setValue(e.target.value);
}

function handleAdding(){
  setList([...list,value]);
  setValue('')
}

function handleDelete(li){
  setList(
    list.filter(ele => ele !== li)
  );
}


  return (
    <div className="App">
      
        <input type="text" value={value} onChange={handleChange}/>
        <button onClick={handleAdding} >Add</button> 
        
        <hr />
          <ul>
            {list.length>0 && list.map(li => {
              return (
              <li  onClick={() => handleDelete(li)}>{li}</li>
              );
            })}
          </ul>
        
    </div>
  );
}

export default App;
