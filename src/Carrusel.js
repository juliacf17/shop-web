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
      'https://cdn.pixabay.com/photo/2023/05/15/14/35/cat-7995231_640.jpg?text=Imagen+1',
      'https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359_960_720.jpg?text=Imagen+2',
      'https://c.pxhere.com/photos/2e/93/cat_pet_cat_face_black_and_white_eyes_animal_feline_black_and_white_cat-910723.jpg!d?text=Imagen+3',
      'https://images.unsplash.com/photo-1708033956915-219592082ad8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2F0byUyMGRlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D?text=Imagen+4',
      'https://images.pexels.com/photos/2527491/pexels-photo-2527491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?text=Imagen+5',
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


/*import React, { useState, useEffect } from "react";

const Carrusel = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2023/05/15/14/35/cat-7995231_640.jpg",
    "https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359_960_720.jpg",
    "https://c.pxhere.com/photos/2e/93/cat_pet_cat_face_black_and_white_eyes_animal_feline_black_and_white_cat-910723.jpg!d",
    "https://lh3.googleusercontent.com/proxy/hKvTF6K8b6o5nkw80QEQDA9aq4WHK_wAzuxJVzIx7V4DTryvtqK1oRLiBmAyXPaZHZiFM-gJPakepTUSZpBQfFJdOWJV_g",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar automáticamente las imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carrusel">
      <div
        className="carrusel-images"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          display: "flex",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              minWidth: "100%",
              height: "100vh",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;*/
