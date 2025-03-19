import SectionTitle from "../../../components/sectionTitle";
import MenuItem from "../../shared/MenuItem";
import CustomButton from "../../../components/CustomButton";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <SectionTitle
                heading='From Our Menu'
                subHeading='Check it out'
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <CustomButton
                buttonText='View Full Menu'
            ></CustomButton>
        </div>
    );
};

export default PopularMenu;