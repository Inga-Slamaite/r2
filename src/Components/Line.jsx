import DataContext from "./DataContext";
import tipai from "../Data/tipas";


function Line({gyv}) {

    // const { setModalDelData, setModalData } = useContext(DataContext);

    return (
        <li className="list-group-item">
            <div className="movie">
                <div className="movie__content">
                    <div className="movie__content__title">
                        {gyv.color}
                    </div>
                    <div className="movie__content__genre">
                        {tipai.find(t => t.id === gyv.tipas)?.type}
                    </div>
                   
                    <div className="movie__content__year">
                        {gyv.kg}
                    </div>

                </div>


            </div>
        </li>
    )
}

export default Line;