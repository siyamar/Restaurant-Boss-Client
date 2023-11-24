import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredimg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading={"Check it Out"}
            heading={"Featured Item"}
            ></SectionTitle>
            <dir className="md:flex md:gap-10 gap-6 pt-12 pb-20 px-36 justify-center items-center bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2023</p>
                    <p className='uppercase'> Where can i get some </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ullam tenetur quis enim sint officia, deleniti eveniet officiis mollitia ad repellendus itaque libero iure in! Beatae, voluptate. Nostrum nam exercitationem iste pariatur. Magnam, facilis neque nostrum ipsa beatae rerum odit. Quos quibusdam consequuntur perferendis id necessitatibus placeat aspernatur adipisci animi?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </dir>
        </section>
    );
};

export default Featured;