
import { useContext } from 'react';
import Line from './Line';
import DataContext from "./DataContext";

function List() {
    const {gyvuliai} = useContext(DataContext);
  

    return (
        <div className="card m-4">
            <h5 className="card-header">List</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                      gyvuliai.map((gyvunas, i) => <Line key={i} gyv={gyvunas}/>)  
                    }
                </ul>
            </div>
        </div>

    );
}

export default List;