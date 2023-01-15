import React from 'react';
import "../styles/MainTopDestinations.css";
import { CarouselVideo } from '../UI/Carousel/CarouselVideo';
import { Carousel, Highlight } from '@trendyol-js/react-carousel';
import Egypt from "../../media/video/Egypt.mp4"
import RedButton from '../UI/RedButton/RedButton';



const MainTopDestination = (props) => {

        if (props) {
   
            return(
                <div className="top-destinations">
                    <div>
                        <h3 id='top-dest-header'>Топовые Направления</h3>
                    </div>
                    <div>
                        <CarouselVideo/>
                    </div>
                    <div>
                        <RedButton id="learnMore">Изучи больше!</RedButton>
                    </div>
                </div>
            )
        }
    
        else {
            return (
                <div className="container center text-warning">
                    <p>Подождите пожалуйста, загружается...</p>
                </div>
            )
        }
};

export default MainTopDestination;