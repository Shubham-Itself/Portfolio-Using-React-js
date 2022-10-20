import React from "react";
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import Profile1 from '../img/profile1.jpg'
import Profile2 from '../img/profile2.jpg'
import Profile3 from '../img/profile3.jpg'
import Profile4 from '../img/profile4.jpg'
import Profile5 from '../img/profile5.jpg'
import Profile6 from '../img/profile6.jpg'
import './review.css'




function Review(){
    const Create = [
       
        {
            img : Profile2,
            review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus."
        },
        {
            img : Profile3,
            review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus."
        },
        {
            img : Profile4,
            review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus."
        },
        {
            img : Profile5,
            review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus."
        },
        {
            img : Profile6,
            review:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae modi quod eligendi rerum aperiam vitae ut expedita. Voluptates, delectus."
        }
        
    ]
    return(
        <React.Fragment>
            <div className="Review-section" id="Review">
                <div className="review-head">
                <p>Client always get <span>Execptional work</span> from me...</p>
                </div>

                <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable:true}}
                className = 'Review-swiper'
                >
                    
                        {Create.map((get , index)=>{
                            return(<SwiperSlide key={index}>
                                <img src={get.img} width = '200' height='200' alt="" />
                                <span>{get.review}</span>
                            </SwiperSlide>

                       ) })}

                    
                </Swiper>

            </div>

        </React.Fragment>
    )
}


export default Review