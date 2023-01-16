import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../media/logo/besttour.png";
import "../styles/Footer.css"
import MyInput from "../UI/input/MyInput"
import RedButton from '../UI/RedButton/RedButton';

const FooterBottom = () => {
    return (
        <div className="best-footer">
            <div className="contact-footer">
                <img alt="au-travel-logo" src={logo} height="150px" style={{'padding': '15px'}}></img>
                <p className="full-text">Путешествуй с нами и реализуй свою мечту! Покоряй красивые места, узнавай новые культуры и жизни!</p>
                <p className="full-text"><span className='bi bi-telephone-outbound-fill'></span><Link id="phone_number" to="#">+996 (0)505 888 765</Link></p>
                <p className="full-text"><span className='bi bi-envelope-fill'></span><Link id="email" to="mailto:k.otonbaev@gmail.com">k.otonbaev@gmail.com</Link></p>
                <p className="full-text"><span className='bi bi-pin-map-fill'></span><Link id="location" to="#">Кыргызская Республика, г. Бишкек, ул. Ахунбаева 119а, 5 этаж</Link></p>
            </div>
            <div className="quick-links">
                <h6>Ссылки</h6>
                <ul>
                    <li><Link to="#">О нас</Link></li>
                    <li><Link to="#">Зарубежные туры</Link></li>
                    <li><Link to="#">Туры по Кыргызстану</Link></li>
                    <li><Link to="#">Наши услуги</Link></li>
                    <li><Link to="#">Связаться с нами</Link></li>
                </ul>
            </div>
            <div className="support">
            <h6>Поддержка</h6>
                <ul>
                    <li><Link to="#">Поддержка клиентов</Link></li>
                    <li><Link to="#">Политика и конфиденциальность</Link></li>
                    <li><Link to="#">Условия & сроки</Link></li>
                    <li><Link to="#">Форум</Link></li>
                    <li><Link to="#">Гид по сайту</Link></li>
                </ul>
            </div>
            <div className="newsletter">
                <h6>Подписка на еженедельную рассылку</h6>
                <form>
                    <MyInput className="newsletter_input" placeholder="Email"></MyInput>
                    <RedButton id="newsletter_btn">Подпишись</RedButton>
                </form>
            </div>
            <hr/>
            <div>
                <p id="copyright">Copyright @2023 Best Tour Travel Agency. Designed and Created by Alina Akylbekova</p>
            </div>
        </div>
    );
};

export default FooterBottom;