import TopCover from "../shared/TopCover/TopCover";
import foodTopCoverImg from '../../assets/shop/banner2.jpg'
import FoodTabs from "./FoodTabs/FoodTabs";

const OurFood = () => {
    return (
        <div>
            <TopCover topCoverImg={foodTopCoverImg} topCoverTitle='our Food'></TopCover>
            <FoodTabs></FoodTabs>
        </div>
    );
};

export default OurFood;