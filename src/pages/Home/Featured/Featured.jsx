import CustomButton from "../../../components/CustomButton";
import SectionTitle from "../../../components/sectionTitle";
import featuredImage from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-background py-8 md:py-12 px-10 md:px-24 text-white">
            <SectionTitle
                subHeading='Check it out'
                heading='From our Menu'
            ></SectionTitle>
            <div className="lg:flex gap-10">
                <div className="flex-1">
                    <img className="h-full w-full rounded-2xl" src={featuredImage} alt="" />
                </div>
                <div className="flex-1">
                    <p className="text-lg">March 20, 2025</p>
                    <h3 className="uppercase text-2xl font-medium py-2">Where Can i get some?</h3>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatibus cupiditate incidunt beatae impedit consequatur placeat. Molestias recusandae sapiente praesentium tenetur quasi, obcaecati nisi quia velit tempore, architecto consequatur totam! Aut minima qui culpa nisi voluptas nesciunt quod suscipit ipsa debitis placeat adipisci, autem, eaque quos repellat! Earum assumenda dolores, eligendi illum ipsam rem amet, repellat qui aliquam a laboriosam.</p>

                    <button className="btn mt-5 btn-outline btn-warning hover:btn-neutral border-1 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;