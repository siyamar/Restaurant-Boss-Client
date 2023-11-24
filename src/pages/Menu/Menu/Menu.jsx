import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item=> item.category === 'dessert');
    const soup = menu.filter(item=> item.category === 'soup');
    const salad = menu.filter(item=> item.category === 'salad');
    const pizza = menu.filter(item=> item.category === 'pizza');
    const offered = menu.filter(item=> item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'our menu'}></Cover>
      <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert items */}
      <MenuCategory items={desserts} title={'dessert'} image={dessertImg}></MenuCategory>
      {/* pizza items */}
      <MenuCategory items={pizza} title={'pizza'} image={pizzaImg}></MenuCategory>
      {/* salad items */}
      <MenuCategory items={salad} title={'salad'} image={saladImg}></MenuCategory>
      {/* soup items */}
      <MenuCategory items={soup} title={'soup'} image={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
