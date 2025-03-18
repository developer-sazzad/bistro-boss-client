import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import ContactDev from "../ContactDev/ContactDev";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <ContactDev></ContactDev>

        </div>
    );
};

export default Home;