import { useState } from "react";
import Cover from "../../../shared/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu/useMenu";
import OrdderTab from "../OrderTab/OrdderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const{category} = useParams();
  const initialIndex = categories.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category)
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrdderTab items={salad}></OrdderTab>
        </TabPanel>
        <TabPanel>
        <OrdderTab items={desserts}></OrdderTab>
        </TabPanel>
        <TabPanel>
        <OrdderTab items={soup}></OrdderTab>
        </TabPanel>
        <TabPanel>
        <OrdderTab items={pizza}></OrdderTab>
        </TabPanel>
        <TabPanel>
        <OrdderTab items={drinks}></OrdderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
