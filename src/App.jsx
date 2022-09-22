import './App.scss'; 
import Create from './Components/Create';
import DataContext  from './Components/DataContext';
import List from './Components/List';
import { useState } from 'react';




function App () {
  const [gyvuliai,setGyvuliai] = useState ([]);
  return (

    <DataContext.Provider value = {{
      gyvuliai,
      setGyvuliai
    }}>
    
    <div className="container">
    <div className="row">
      <div className="col-5">
        <Create/>
      </div>
      <div className="col-7">

        <List />

      </div>
    </div>
  </div>
  </DataContext.Provider>
  )
}

export default App; 