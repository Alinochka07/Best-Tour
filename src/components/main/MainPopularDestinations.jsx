import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import "../styles/MainPopularDestinations.css";
import RedButton from '../UI/RedButton/RedButton';
import Egypt from "../../media/banners/Egypt.jpeg";


const MainPopularDestinations = (props) => {

    // if(props)
    return(
        // <Carousel>
        <div className="popular-destinations">
            <h3 className='h3-text'>Популярные направления</h3>
                    <div className="popular-blocks">
                                {/* {tours && tours.filter(tour => tour.popular === true).map(filteredTour => { */}
                                    <div 
                                    // key={filteredTour.id} 
                                    className="pop-block">
                                                {/* <div id="triangle-left"></div> */}
                                                {/* <div id="triangle-right"></div> */}
                                                <img alt="au-travel-agency" 
                                                src={Egypt} 
                                                width="290px" height="350px"></img>
                                                <div className="info-block">
                                                    <div className="info"><h6>Egypt</h6></div>
                                                    <span className="reviews">
                                                        <span>$800</span>
                                                        <button type="button" className="btn btn-link">
                                                            <span className="bi bi-star-fill"></span>
                                                            <span className="bi bi-star-fill"></span>
                                                            <span className="bi bi-star-fill"></span>
                                                            <span className="bi bi-star-fill"></span>
                                                            <span className="bi bi-star-fill"></span>
                                                        </button>
                                                        50 отзывов
                                                        <RedButton id="reviews-check-out">+</RedButton>
                                                    </span>
                                                    
                                                </div>
                                            </div>
                                    {/* }) */}
                                {/* } */}
                            
                    </div>
                    <div className='all-popular-destinations'>
                        <RedButton 
                        // onClick={onClick} 
                        className="btn-popular">Все популярные направления!</RedButton>
                    </div>
            </div>
        // </Carousel>
    )
}


export default MainPopularDestinations;