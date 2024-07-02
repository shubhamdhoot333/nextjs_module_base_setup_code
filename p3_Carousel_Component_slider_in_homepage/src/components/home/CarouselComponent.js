import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  return (
      <Carousel
        autoPlay
        navButtonsAlwaysVisible
        infiniteLoop
        showStatus={false}
        emulateTouch
        showThumbs={false}
      >
        <div
             style={{ maxHeight: "36rem" }}
              className="object-center brightness-50"
            >
              <img
                src={`https://images.pexels.com/photos/326276/pexels-photo-326276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt="pizza"
              />
            </div>
            <div
             style={{ maxHeight: "36rem" }}
              className="object-center brightness-50"
            >
              <img
                src={`https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt="pizza"
              />
            </div>
            <div
             style={{ maxHeight: "36rem" }}
              className="object-center brightness-50"
            >
              <img
                src={`https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=3`}
                alt="pizza"
              />
            </div>
       
      </Carousel>
    );
}

export default CarouselComponent