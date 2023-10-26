import React, {useEffect} from 'react';
import TextLine from './TextLine';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getBanner } from './../../redux/Slice/bannerSlice';
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar';

const Banner = () => {
    const dispatch = useDispatch()
    const {banner,loading,error} = useSelector((state) => state.banner);
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            dispatch(getBanner(token))
        } 
    },[dispatch])
    
    return (
        <div className="lg:mx-16">
           <div className='mb-5'>
                <TextLine title="Transaksi Promo Menarik"/>
            </div>
            <Swiper
                // install Swiper modules
                modules={[ Scrollbar, A11y]}
                loop={true}
                spaceBetween={50}
                slidesPerView={4}
                navigation
       
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    375:{
                        slidesPerView:1,
                        spaceBetween:10,
                    },
                    1236:{
                        slidesPerView:4,
                        spaceBetween:50
                    }
                }}
            >   
                {banner.data?.map((item,index) => {
                    return (
                        <SwiperSlide key={index}  className='flex justify-center items-center'>
                            <img src={item.banner_image} alt={item.banner_name} />
                        </SwiperSlide>
                    )
                })}
                
            
            </Swiper>
        </div>
    );
}

export default Banner;


