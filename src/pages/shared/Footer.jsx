const Footer = () => {
    return (
        <footer>
            <section className="grid grid-cols-1 md:grid-cols-2 text-white">
                <div className="bg-[#1F2937] md:flex flex-col items-end py-14">
                    <div className="w-full md:w-8/12 text-center">
                        <h3 className="text-2xl font-bold pb-3">CONTACT US</h3>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p> Mon - Fri: 08:00 - 22:00</p>
                        <p> Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="bg-[#111827] md:flex flex-col md:pl-10 py-14">
                    <div className="w-full md:w-6/12 text-center">
                        <h3 className="text-2xl font-bold pb-3">Follow US</h3>
                        <p>Join us on social media</p>
                    </div>
                </div>
            </section>
            <section className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p className="text-lg">Copyright © {new Date().getFullYear()} - All right reserved by Developer Sazzad.</p>
                </aside>
            </section>
        </footer>
    );
};

export default Footer;