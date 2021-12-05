import React from 'react'
import {Link} from "react-router-dom";

function NavigationMenu(props) {

    const HomeMenu = <div className="relative h-screen w-4/5">
        <div className="absolute flex justify-start flex-col nav-position">
            <div className="header__logo flex justify-start items-start py-4">
                {/* <img src={logo} alt="Lernen Logo"/> */}
                <p className="text-primary-blue  my-0 mx-auto font-logo text-center font-semibold text-lg">Pisocial</p>
            </div>
            <ul>
                <li className="font-semibold px-6 py-2 w-48 flex justify-center items-center mt-4">
                    <a href="#why" className="nav-primary">Why us</a>
                </li>
                <li className=" font-semibold px-6 py-2 w-48 flex justify-center items-center mt-4">
                    <a href="#how" className="nav-primary">How it works</a>
                </li>
                <li className=" font-semibold px-6 py-2 w-48 flex justify-center items-center mt-4">
                    <a href="#features" className="nav-primary">Features</a>
                </li>
                <li>
                    <Link
                        to="/login"
                        className="bg-primary-blue px-6 py-2 w-48 flex justify-center items-center mt-4 rounded text-white"
                        onClick={props.closeMenu}>
                        Sign In
                    </Link>
                </li>
                <li>
                    <Link
                        to="/signup"
                        className="border-primary-blue border-4 px-6 py-2 w-48 flex justify-center items-center mt-8 rounded text-primary-blue"
                        onClick={props.closeMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
        </div>
    </div>;

    return (HomeMenu)

}

export default NavigationMenu