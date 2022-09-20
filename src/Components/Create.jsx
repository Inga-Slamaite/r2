import { useState } from "react";
import gyvunas from "../Data/gyvunas";
import DataContext from "./DataContext";

function Create() {

//const [gyvuliai,setGyvuliai] = useState ([]);
  //const [gyvunas,setGyvunas] = useState('');
  //const [spalva, setSpalva] = useState('');
  //const [svoris, setSvoris] = useState('0');
  //const {setCreateData} = useContext(DataContext);



  return (
    <div className="card m-4">
      <h5 className="card-header">Gyvuliai</h5>

      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Gyvunas</label>
          <select className="form-select" >
            <option value={0} disabled>Open this select menu</option>
            {
            gyvunas.map(g => <option key={g.id} value={g.id}>{g.type}</option>
            )}
          </select>
        </div>

        <div className="mb-3">
        <label className="form-label">Spalva</label>
        <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Svoris</label>
          <input type="number" className="form-control"/>
        </div>

        <button type="button" className="btn btn-outline-secondary">Add</button>
      </div>

    </div>
  );
}

export default Create;
