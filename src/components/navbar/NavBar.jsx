import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import logo from "../../media/logo/besttour.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css"
import SearchBar from './SearchBar';
import SideNav from './SideNav';

const NavBar = (props) => {

    const [width, setWidth] = useState('0%');

    const openSidenav = () => {
        setWidth('20%');
    }

    const closeSidenav = () => {
        setWidth('0%');
    }



    return (
        <nav className="topnav">
            <Link id="home" to = '/'> 
                <div className="left-side-logo">
                    <img src = {logo} style={{'height': '90px', 'width': 'auto'}} alt='best-tour-logo' id="main-logo" />
                    <div className='logo-text'>
                        <p id='best-tour'>BEST TOUR</p>
                        <p id='travel-agency'>TRAVEL AGENCY</p></div>
                </div>
            </Link>
                           
                <div className="header_menu_tabs">
                        <Link to="/all-destinations" style={{'textDecoration': 'none'}}><span className="menu">Направления</span></Link>
                        <Link to="/offers" style={{'textDecoration': 'none'}}><span className="menu">Предложения</span></Link>
                        <Link to="/tours" style={{'textDecoration': 'none'}}><span className="menu">Туры</span></Link>
                        <Link to="/advices" style={{'textDecoration': 'none'}}><span className="menu">Полезные советы</span></Link>
                </div>
                <div className="right-side-menu">
                    <span>
                        <SearchBar/>
                    </span>
                    <span>
                        <button onClick={openSidenav} type="button" data-toggle="sidenav"
                            className="accountbtn" id="sidenavbar" aria-haspopup="true">
                                <FontAwesomeIcon icon={faBars} style={{'fontSize': '20px'}} />
                        </button>
                        <SideNav
                        closeSidenav={closeSidenav}
                        width={width}
                        setWidth={setWidth}/>
                    </span>
                </div>
            </nav>
    );
};

export default NavBar;