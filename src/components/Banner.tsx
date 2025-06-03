import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from 'swiper/react';  

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const Banner = () => {

    return(
        <>
            <section >
                {/* <img src="/banner2.jpg" alt="" /> */}

            <Swiper
                className="home__banner"
                modules={[Navigation, Pagination, Scrollbar]}
                navigation
                pagination={{ clickable: true}}
                scrollbar={{ draggable: true}}
            >
                <SwiperSlide>
                    <img className="mx-auto" src="/banner.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="mx-auto" src="/banner2.jpg" alt="" />
                </SwiperSlide>
                
                
            </Swiper>
            </section>
        </>
    )
}