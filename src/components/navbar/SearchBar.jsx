import React, {useState, useEffect} from 'react';
import "../styles/SearchBar.css";

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState()
    const [filteredTours, setFilteredTours] = useState()


    return (
            <form>
                <span>
                    <input type="search" 
                    onChange={e => setSearchValue(e.target.value)}
                    className="input_search" placeholder="Поиск..."/>
                    
                    {/* <Link to='/results?keyword=value'> */}
                    <button type="button" className="searchbtn"><span className="bi bi-search" ></span></button>
                    {/* </Link> */}
                    <div>
                        {filteredTours}
                        {/* {tours && tours.data.map(tour => {
                            <div key={tour.id}>{tour.title}</div>
                        })} */}
                        {/* {tours && tours.filter(tour => tour.includes(search).map(filteredTour => {
                            return <div key={filteredTour.id}>{filteredTour.title}</div>
                        }))} */}
                    </div>
                </span>
            </form>
    );
};

export default SearchBar;