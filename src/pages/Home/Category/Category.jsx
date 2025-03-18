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
                    slidesPerView={4}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={categorySlide1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categorySlide2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categorySlide3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categorySlide4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={categorySlide5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;