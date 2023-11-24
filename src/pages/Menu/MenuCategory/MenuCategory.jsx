import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover/Cover";
import ManuItem from "../../../shared/ManuItem/ManuItem";

const MenuCategory = ({items, image, title}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={image} title={title}></Cover>}
             <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item=><ManuItem
                    key={item._id}
                    item={item}
                    ></ManuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            
            </Link>
        </div>
    );
};

export default MenuCategory;