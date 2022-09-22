import { useState, useEffect, useContext } from "react";
import tipai from "../Data/tipas";
import DataContext from "./DataContext";

function Create() {


  const [tipas,setTipas] = useState('');
  const [spalva, setSpalva] = useState('');
  const [svoris, setSvoris] = useState('0');
  // const [gyvunas, setGyvunas] = useState ('');
  const {gyvuliai, setGyvuliai} = useContext(DataContext);


  useEffect(() => {
    const lokalusSandelys=localStorage.getItem('tvartas')

    if (lokalusSandelys) {
      setGyvuliai(JSON.parse(lokalusSandelys));
    }
  }, []);


  const Add = (e) => {
    e.preventDefault();
    const kopija = [...gyvuliai];
    kopija.push({ tipas: tipas, color: spalva, kg: svoris });
    setGyvuliai(kopija);

    localStorage.setItem("tvartas", JSON.stringify(kopija));
  }


  return (
    <div className="card m-4">
      <h5 className="card-header">Gyvuliai</h5>

      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Gyvunas</label>
          <select className="form-select" value={tipas} onChange={e => setTipas(Number(e.target.value))} >
            <option value={0} disabled>Open this select menu</option>
            {
            tipai.map(t => <option key={t.id} value={t.id}>{t.type}</option>
            )}
          </select>
        </div>

        <div className="mb-3">
        <label className="form-label">Spalva</label>
        <input type="text" className="form-control"value={spalva} onChange={e => setSpalva(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Svoris</label>
          <input type="number" className="form-control" value={svoris} onChange={e => setSvoris(e.target.value)} />
        </div>

        <button onClick={Add} className="btn btn-outline-secondary">Add</button>

      </div>

    </div>
  );
}

export default Create;
