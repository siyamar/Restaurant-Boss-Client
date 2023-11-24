import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ManuItem from "../../../shared/ManuItem/ManuItem";
import useMenu from "../../../hooks/useMenu/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=> item.category === 'popular');

    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         const popularItems = data.filter(item=> item.category === 'popular');
    //         setMenu(popularItems)
    //     })

    // },[])
    return (
        <section className="mb-12">
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item=><ManuItem
                    key={item._id}
                    item={item}
                    ></ManuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 mt-4'>View Full Menu</button>

        </section>
    );
};

export default PopularMenu;