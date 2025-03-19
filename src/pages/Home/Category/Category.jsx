import SectionTitle from "../../../components/sectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import categorySlide1 from '../../../assets/home/slide1.jpg'
import categorySlide2 from '../../../assets/home/slide2.jpg'
import categorySlide3 from '../../../assets/home/slide3.jpg'
import categorySlide4 from '../../../assets/home/slide4.jpg'
import categorySlide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div className="pb-20">
            <SectionTitle
                subHeading='From 11:00am to 10:00pm'
                heading='Order Online'
            ></SectionTitle>
            <div className="py-10">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },  // Mobile
                        640: { slidesPerView: 2 },  // Tablets
                        1024: { slidesPerView: 3 }, // Laptops
                        1264: { slidesPerView: 4 }, // Laptops
                    }}
                    
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className="h-96 w-full" src={categorySlide1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-96 w-full" src={categorySlide2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-96 w-full" src={categorySlide3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-96 w-full" src={categorySlide4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="h-96 w-full" src={categorySlide5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;