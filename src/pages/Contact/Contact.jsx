import TopCover from "../shared/TopCover/TopCover";
import contactCoverImg from '../../assets/contact/banner.jpg'
import SectionTitle from "../../components/sectionTitle";
import { MdOutlinePhoneInTalk } from "react-icons/md";
const Contact = () => {

    const handleContact = e => {
        e.preventDefault()
    }
    return (
        <div>
            <TopCover
                topCoverImg={contactCoverImg}
                topCoverTitle='Contact us'
                topCoverDescription="Would you like to try a dish?"
            ></TopCover>
            <SectionTitle
                subHeading="visit us"
                heading='Our location'
            ></SectionTitle>
            <section className="grid md:grid-cols-3 gap-10 my-5 md:mb-16">
                <div className="border-2 text-center border-orange-400">
                    <h3 className="bg-orange-400 text-white text-2xl lg:text-4xl py-3 flex justify-center"><MdOutlinePhoneInTalk /></h3>
                    <div className="bg-gray-100 p-5 lg:p-10 mx-4 lg:mx-8 mb-4 lg:mb-8">
                        <h4 className="text-2xl font-medium uppercase">phone</h4>
                        <p>+8801568188426</p>
                    </div>
                </div>
                <div className="border-2 text-center border-orange-400">
                    <h3 className="bg-orange-400 text-white text-2xl lg:text-4xl py-3 flex justify-center"><MdOutlinePhoneInTalk /></h3>
                    <div className="bg-gray-100 p-5 lg:p-10 mx-4 lg:mx-8 mb-4 lg:mb-8">
                        <h4 className="text-2xl font-medium uppercase">phone</h4>
                        <p>+8801568188426</p>
                    </div>
                </div>
                <div className="border-2 text-center border-orange-400">
                    <h3 className="bg-orange-400 text-white text-2xl lg:text-4xl py-3 flex justify-center"><MdOutlinePhoneInTalk /></h3>
                    <div className="bg-gray-100 p-5 lg:p-10 mx-4 lg:mx-8 mb-4 lg:mb-8">
                        <h4 className="text-2xl font-medium uppercase">phone</h4>
                        <p>+8801568188426</p>
                    </div>
                </div>
            </section>
            <SectionTitle
                subHeading="send us a message"
                heading='contact form'
            ></SectionTitle>
            <div className="bg-gray-100">
                <form onSubmit={handleContact}>
                    <div className="flex gap-10">
                        <fieldset className="fieldset flex-1">
                            <legend className="fieldset-legend">What is your name?</legend>
                            <input type="text" className="input w-full validator" placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset flex-1">
                            <legend className="fieldset-legend">What is your name?</legend>
                            <input type="text" className="input w-full" placeholder="Type here" />
                        </fieldset>
                    </div>
                    <input type="button" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;