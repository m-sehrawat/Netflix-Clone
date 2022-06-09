// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import React, { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './list3.scss';

// import required modules
import ListItem from '../listItem/ListItem';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ListItem />
        </SwiperSlide>
        <SwiperSlide>
          <ListItem />
        </SwiperSlide>
        <SwiperSlide>
          <ListItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
