import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsDetails from "../TabsDetails/TabsDetails";
import useMenu from "../../../hooks/useMenu";

const FoodTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div className="my-20">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                        {
                            salad.map(item => <TabsDetails
                                key={item._id}
                                item={item}></TabsDetails>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                        {
                            pizza.map(item => <TabsDetails
                                key={item._id}
                                item={item}></TabsDetails>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                        {
                            soup.map(item => <TabsDetails
                                key={item._id}
                                item={item}></TabsDetails>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                        {
                            dessert.map(item => <TabsDetails
                                key={item._id}
                                item={item}></TabsDetails>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                        {
                            drinks.map(item => <TabsDetails
                                key={item._id}
                                item={item}></TabsDetails>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default FoodTabs;