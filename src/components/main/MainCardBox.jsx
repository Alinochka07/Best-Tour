import React from 'react';
import "../styles/MainCardBox.css";
import map_icon from "../../media/banners/map-icon.png";
import binocular from "../../media/banners/binocular.png";
import suitcase from "../../media/banners/suitcase.png";
import relax_icon from "../../media/banners/relax.png";

const MainCardBox = () => {
    return (
        <div className="box-menu">
            <div className="boxcard">
                <img alt="map_icon" src={map_icon} width="80px" height="80px"></img>
                <h5>Выбери направление</h5>
                <p>Lorem ipsum dolor some short text here... </p>
            </div>
            <div className="boxcard">
                <img alt="binocular" src={binocular} width="80px" height="80px"></img>
                <h5>Открывай новые места</h5>
                <p>Lorem ipsum dolor some short text here... </p>
            </div>
            <div className="boxcard">
                <img alt="suitcase" src={suitcase} width="80px" height="80px"></img>
                <h5>Путешествуй с нами</h5>
                <p>Lorem ipsum dolor some short text here... </p>
            </div>
            <div className="boxcard">
                <img alt="relax_icon" src={relax_icon} width="80px" height="80px"></img>
                <h5>Получай удовольствие</h5>
                <p>Lorem ipsum dolor some short text here... </p>
            </div>
        </div>
    );
};

export default MainCardBox;