import TopCover from "../shared/TopCover/TopCover";
import foodTopCoverImg from '../../assets/shop/banner2.jpg'
import useMenu from "../../hooks/useMenu";
import { useState } from "react";
import OrderTabs from "./OrderTabs/OrderTabs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    console.log(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <TopCover
                topCoverImg={foodTopCoverImg}
                topCoverTitle='our Food'
                topCoverDescription="Would you like to try a dish?"
            ></TopCover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="text-center my-10">
                    <TabList>
                        <Tab><h4 className="md:text-xl px-2">Salads</h4></Tab>
                        <Tab><h4 className="md:text-xl px-2">Pizzas</h4></Tab>
                        <Tab><h4 className="md:text-xl px-2">Soups</h4></Tab>
                        <Tab><h4 className="md:text-xl px-2">Desserts</h4></Tab>
                        <Tab><h4 className="md:text-xl px-2">Drinks</h4></Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <OrderTabs items={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessert}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinks}></OrderTabs>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;