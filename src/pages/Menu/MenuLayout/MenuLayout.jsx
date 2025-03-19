import TopCover from "../../shared/TopCover/TopCover";
import topCoverImg from "../../../assets/menu/banner3.jpg"
import SectionTitle from "../../../components/sectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../shared/MenuCategory/MenuCategory";
import dessertCoverImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaCoverImg from "../../../assets/menu/pizza-bg.jpg"
import saladCoverImg from "../../../assets/menu/salad-bg.jpg"
import soupCoverImg from "../../../assets/menu/soup-bg.jpg"

const MenuLayout = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <TopCover topCoverImg={topCoverImg} topCoverTitle='Our Menu'></TopCover>
            <SectionTitle subHeading="Don't Miss" heading="today's offer"></SectionTitle>
            <MenuCategory
                items={offered}
                buttonText='ORDER YOUR FAVOURITE FOOD'
            ></MenuCategory>
            <MenuCategory
                items={dessert}
                coverImg={dessertCoverImg}
                coverTitle='desserts'
                buttonText='ORDER YOUR FAVOURITE FOOD'
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                coverImg={pizzaCoverImg}
                coverTitle='pizzas'
                buttonText='ORDER YOUR FAVOURITE FOOD'
            ></MenuCategory>
            <MenuCategory
                items={salad}
                coverImg={saladCoverImg}
                coverTitle='salads'
                buttonText='ORDER YOUR FAVOURITE FOOD'
            ></MenuCategory>
            <MenuCategory
                items={soup}
                coverImg={soupCoverImg}
                coverTitle='soups'
                buttonText='ORDER YOUR FAVOURITE FOOD'
            ></MenuCategory>
        </div>
    );
};

export default MenuLayout;