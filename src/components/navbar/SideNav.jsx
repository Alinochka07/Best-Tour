import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faCircleQuestion, faGear, faGlobe, faPhone, faPlane, faQuestion, faUserCheck, faUserPlus, faUserXmark } from "@fortawesome/free-solid-svg-icons";
import kgs_flag from "../../media/flags/kgz.png"
import ru_flag from "../../media/flags/ru.png"
import us_flag from "../../media/flags/us.png"
import "../styles/SideNav.css";
import { Accordion } from 'react-bootstrap';

const SideNav = (props) => {
    const {closeSidenav, width} = props;
    // const {currentUser} = useAuthValue();


    return (
        <div id="mySidenav" className='sidenav' style={{width: width, paddingTop: '3.5%' }}>
                    <button className="closebtn" onClick={closeSidenav}>x</button>
                    {/* <img src={au_travel_logo} width="100px" style={{paddingLeft: '40px'}}></img> */}

                    {/* <img alt="profile_image" id="avatar_image" width="70px" src={
                        !SignInWithGoogle ? localStorage.getItem('avatar') : au_travel_logo}>
                    </img> */}
                    {/* {currentUser ?  */}
                        <div>
                            {/* <h5 id="hello_msg">{`Привет, ${currentUser.displayName}`}</h5> */}
                            {/* <button id="sign_out" onClick={() => signOut(auth)}>
                            <Link id="userX" to="/login"><FontAwesomeIcon icon={faUserXmark}/>  Выйти </Link> </button> */}
                          
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><FontAwesomeIcon icon={faGear}/> Настройки</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="card card-body">
                                            <Link to="/update-password"><span>  Обновить пароль</span></Link>
                                            <Link to="/reset_email"><span>  Изменить электронную почту</span></Link>
                                            <Link to="/delete-account"><span>  Удалить аккаунт</span></Link>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                           
                            
                        </div> 
                        {/* :  */}
                        
                    
                    <Link id="userCheck" to="/login"><FontAwesomeIcon icon={faUserCheck}/>  Войти </Link>
                    <Link id="userPlus" to="/register"><FontAwesomeIcon icon={faUserPlus}/>  Регистрация</Link>
                        
                    {/* } */}
                    
                    
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><FontAwesomeIcon icon={faGlobe}/> Выбрать язык</Accordion.Header>
                            <Accordion.Body>
                                <div className="card card-body">
                                    <Link to="kyrgyz"><img alt="kgs_flag" src={kgs_flag} width="20px" height="20px"/><span>  Кыргызча</span></Link>
                                    <Link to="/"><img alt="ru_flag" src={ru_flag} width="20px" height="20px"/><span>  Русский</span></Link>
                                    <Link to="english"><img alt="us_flag" src={us_flag} width="20px" height="20px"/><span>  English</span></Link>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Link id="aboutUs" to="/about-us"><FontAwesomeIcon icon={faPlane}/>  О нас</Link>
                    <Link id="contacts" to="/contacts"><FontAwesomeIcon icon={faPhone}/>Контакты</Link>
                    <Link id="faq" to="/faq"><FontAwesomeIcon icon={faCircleQuestion}/>Часто задаваемы вопросы</Link>
                    <Link id="help" to="/help"><FontAwesomeIcon icon={faCircleInfo}/>Помощь по сайту</Link>
                </div>
    );
};

export default SideNav;