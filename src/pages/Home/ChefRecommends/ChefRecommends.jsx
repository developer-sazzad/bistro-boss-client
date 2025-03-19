import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle";
import RecommendsChefCards from "../../shared/RecommendsChefCards";
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ChefRecommends = () => {
    const [chefs, setChef] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const saladChef = data.filter(chef => chef.category === 'salad');
                setChef(saladChef);
            })
    }, [])
    return (
        <div className="pb-20">
            <SectionTitle
                heading='Chef Recommends'
                subHeading='Should Try'
            ></SectionTitle>
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },  // Mobile
                        640: { slidesPerView: 2 },  // Tablets
                        1024: { slidesPerView: 3 }, // Laptops
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {chefs.map(chef => (
                        <SwiperSlide key={chef._id}>
                            <RecommendsChefCards chef={chef} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ChefRecommends;