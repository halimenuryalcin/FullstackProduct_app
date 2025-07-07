import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function ImageCarousel({ images }) {
  return (
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={1}>
      {Object.values(images).map((url, idx) => (
        <SwiperSlide key={idx}>
          <img src={url} alt={`Slide ${idx}`} style={{ width: '100%' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
