import React from 'react';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';
import NavBar from '../components/navbar/NavBar';
import "./styles/HomePage.css";

const HomePage = (props) => {
    return (
        <>
            <NavBar/>
            <div className='container'>
                <Main/>
                <Footer/>
            </div>
            
        </>
    );
};

export default HomePage;