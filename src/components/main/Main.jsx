import React from 'react';
import "../styles/Main.css";
import MainBanner from './MainBanner';
import MainCardBox from './MainCardBox';
import MainChooseDestination from './MainChooseDestination';
import MainPopularDestinations from './MainPopularDestinations';
import MainServiceBlock from './MainServiceBlock';
import MainTopDestination from './MainTopDestination';

const Main = () => {
    return (
        <>
            <MainBanner/>
            <MainChooseDestination/>
            <MainCardBox/>
            <MainTopDestination/>
            <MainServiceBlock/>
            <MainPopularDestinations/>
        </>
    );
};

export default Main;