import React from 'react';
import { Carousel } from 'react-carousel3';
import CarouselCards from './CarouselCards';
import Egypt from "../../../media/video/Egypt.mp4";
import Maldives from "../../../media/video/Maldives.mp4";
import Pattaya from "../../../media/video/Pattaya_Thailand.mp4";
import Phuket from "../../../media/video/Phuket.mp4";
import Turkey from "../../../media/video/Turkey.mp4";
import Turkey_hotel from "../../../media/video/Turkey_hotel.mp4";

const style = {
    width: 297,
    height: 296,
  };

  export const CarouselVideo = (props) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // background: 'linear-gradient(to bottom, rgb(1 138 160) 0%, rgb(255 80 1) 100%)',
      }}
    >
      <Carousel height={550} width={1000} yOrigin={42} yRadius={40} autoPlay={true}>
        <div key={1} style={style}>
            <CarouselCards>
                <video width="100%" height="100%" preload="auto">
                    <source src={Egypt} type="video/mp4" />
                    Sorry, your browser doesn't support videos.
                </video>
                <h6 style={{'textAlign': 'center', 'color': 'black', 'fontSize':'22px', 'fontWeight': '600', 'padding': '5px 0 0 15px'}}>Каир, Египет</h6>
            </CarouselCards>
        </div>
        <div key={2} style={style}>
            <CarouselCards>
                <video width="100%" height="100%" preload="auto">
                    <source src={Maldives} type="video/mp4" />
                </video>
                <h6 style={{'textAlign': 'center', 'color': 'black', 
                'fontSize':'22px', 'fontWeight': '600', 'padding': '5px 0 0 15px'}}>Мальдивы</h6>
            </CarouselCards>
        </div>
        <div key={3} style={style}>
            <CarouselCards>
                <video width="100%" height="100%" preload="auto">
                    <source src={Pattaya} type="video/mp4" />
                </video>
                <h6 style={{'textAlign': 'center', 'color': 'black', 
                'fontSize':'22px', 'fontWeight': '600', 'padding': '5px 0 0 15px'}}>Паттая, Таиланд</h6>
            </CarouselCards>
        </div>
        <div key={4} style={style}>
            <CarouselCards>
                <video width="100%" height="100%" preload="auto">
                    <source src={Phuket} type="video/mp4" />
                </video>
                <h6 style={{'textAlign': 'center', 'color': 'black', 
                'fontSize':'22px', 'fontWeight': '600', 'padding': '5px 0 0 15px'}}>Пхукет, Таиланд</h6>
            </CarouselCards>
        </div>
        <div key={5} style={style}>
            <CarouselCards>
                <video width="100%" height="100%" preload="auto">
                    <source src={Turkey} type="video/mp4" />
                </video>
                <h6 style={{'textAlign': 'center', 'color': 'black', 
                'fontSize':'22px', 'fontWeight': '600', 'padding': '5px 0 0 15px'}}>Турция</h6>
            </CarouselCards>
        </div>
        <div key={6} style={style}>
            <CarouselCards>
                <video width="100%" height="100%" preload="auto">
                    <source src={Turkey_hotel} type="video/mp4" />
                </video>
                <h6 style={{'textAlign': 'center', 'color': 'black', 
                'fontSize':'22px', 'fontWeight': '600', 'padding': '5px 0 0 15px'}}>Анталья, Турция</h6>
            </CarouselCards>
        </div>
      </Carousel>
    </div>
  );