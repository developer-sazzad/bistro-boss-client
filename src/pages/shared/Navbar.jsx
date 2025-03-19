import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/our-menu'>Menu</NavLink></li>
        <li><NavLink to='/our-food'>Food</NavLink></li>

    </>


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className={`navbar fixed top-0 max-w-7xl mx-auto z-10 transition-all duration-300 ${scrolling ? 'bg-orange-400 text-white' : 'text-white md:py-8'}`}>
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content bg-orange-400 rounded-box z-1 mt-3 w-60 p-4 shadow">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/'>
                    <h1 className="text-2xl font-bold">BistroBoss</h1>
                    <p className="text-lg">Restaurents</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </section>
    );
};

export default Navbar;