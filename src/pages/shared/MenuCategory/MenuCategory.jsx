import { Link } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import MenuItem from "../MenuItem";
import Cover from './../Cover/Cover';

const MenuCategory = ({ items, coverTitle, coverImg, buttonText }) => {
    return (
        <div className="py-10 mb-10">
            {coverTitle && <Cover coverImg={coverImg} coverTitle={coverTitle}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${coverTitle}`}>
                <CustomButton buttonText={buttonText}></CustomButton>
            </Link>
        </div>
    );
};

export default MenuCategory;