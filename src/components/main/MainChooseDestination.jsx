import React, {useState, useEffect} from 'react';
import RedButton from '../UI/RedButton/RedButton';
import "../styles/MainChooseDestionation.css";
import { useNavigate } from "react-router-dom";

const MainChooseDestination = ({children}) => {

    const [tours, setTours] = useState();
    const [selected, setSelected] = useState();
    
    const navigate = useNavigate()

    const Select = () => {
        return(
            <div>
                <select className="select_option" value={selected} 
                // onChange={handleValueChange}
                > 
                    <option>Выбрать направление</option>
                    {tours ? (
                        tours.map((tour) => <option key={tour.id} value={tour.id}>{tour.label}</option>)
                    ) : null}
                </select>
            </div>
        )
    }
    return (
        <div className="choose-destination">
                <table className="table">
                        <thead className="thead">
                            <tr>
                                <th scope="col">Направление</th>
                                <th scope="col">Предполагаемые даты</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <div className="static">
                                        <Select/>
                                    </div>
                                    
                                </th>
                                <th id="table-calendar">
                                    {/* <button className="btn btn-light dates" onClick={this.onClickButton}>Выбрать даты</button> */}
                                    <div id="calendar-window">
                                        <div 
                                        // hidden={ !this.state.hidden ? true : false }
                                        >
                                            {/* <DateChoose /> */}
                                            {/* <p id="close-calendar" onClick={this.onClickButton}>x</p> */}
                                        </div>
                                    </div>
                                </th>
                                <th>
                                    <div className="input-group mb-3">
                                        <RedButton style={{'width':'200px'}} 
                                        // onClick={onSelect}
                                        >Нажми для просмотра</RedButton>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                </table>
                {/* {children} */}
            </div>
    );
};

export default MainChooseDestination;