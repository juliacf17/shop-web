import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carrusel.css';
import { Autoplay } from 'swiper/modules'; // Modulo para autoplay

const Carrusel = () => {
    const imagenes = [
      'https://cdn.palbincdn.com/users/8901/images/IMG_2086-1719899874.jpeg?text=Imagen+1',
      'https://i0.wp.com/www.lacasitademartina.com/wp-content/uploads/2015/02/Zippy-moda-infantil-Ropa-Ni%C3%B1os-Blog-Moda-Infantil-La-casita-de-Martina-Personal-Shopper-1.jpg?text=Imagen+2',
      'https://m.media-amazon.com/images/S/aplus-media/sota/154ea1b4-5d12-44ea-b8cd-b73570debda0.__CR0,0,970,600_PT0_SX970_V1___.jpg?text=Imagen+3',
    ];
  
    return (
      <Swiper
        modules={[Autoplay]} // Agregamos el módulo de autoplay
        autoplay={{
          delay: 2000, // Cambia cada 3 segundos
          disableOnInteraction: false, // No se detiene al interactuar
        }}
        loop={true} // Habilita el bucle infinito
        spaceBetween={0} // Sin espacio entre diapositivas
        slidesPerView={1} // Una imagen visible a la vez
        className="swiper-container"
      >
        {imagenes.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Imagen ${index + 1}`} className="swiper-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default Carrusel;
