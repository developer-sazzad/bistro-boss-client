import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading='From Our Menu'
                subHeading='Check it out'
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-16">
                <button className="btn btn-outline btn-lg btn-warning border-1 border-b-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;