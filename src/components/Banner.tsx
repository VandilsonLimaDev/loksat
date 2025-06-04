import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from 'swiper/react';  

register();

export const Banner = () => {

    return(
        <>
            <section >
                {/* <img src="/banner2.jpg" alt="" /> */}

            <Swiper
                className="home__banner"
                modules={[Autoplay, Navigation, Pagination, Scrollbar]}
                navigation
                pagination={{ clickable: true}}
                scrollbar={{ draggable: true}}
                autoplay={{
                    delay:4000,
                    disableOnInteraction: false,
                }}
                loop={true}
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