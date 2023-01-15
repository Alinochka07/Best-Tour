import React from 'react';
import { Link } from 'react-router-dom';
import RedButton from "../UI/RedButton/RedButton";
import "../styles/MainBanner.css";
import signs from "../../media/banners/signs.png"

const MainBanner = () => {
    return (
        <div className="myheader">
            <h1 id="h1">Самое время для</h1>
            <h1 id="h1_1">путешествий!</h1>
            <Link to="/offers"><RedButton type="button">Давай глянем что мы приготовили для тебя!</RedButton></Link>
            <img src={signs}></img>
        </div>
    );
};

export default MainBanner;