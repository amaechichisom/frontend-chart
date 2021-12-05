import React from 'react';
import Navigation from '../../Navigation/Navigation';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const HeaderHome = (props) => {
    return (
        <header
            className=" focus:bg-white pt-4 flex justify-between items-center text-grey-body font-body">

            <div className="header__logo flex justify-start items-center">
                <h1 className="text-primary-white-light font-logo lg:text-lg">Pisocial</h1>

                <div className="header__nav hidden lg:block pl-32">
                    <ul className="list-none p-2 text-primary-white-light">
                        <li className=" inline-block ml-6 p-1 font-semibold">
                            <a href="#why" className="nav-primary">Why us</a>
                        </li>
                        <li className=" inline-block ml-6 p-1 font-semibold">
                            <a href="#how" className="nav-primary">How it works</a>
                        </li>
                        <li className=" inline-block ml-6 p-1 font-semibold">
                            <a href="#features" className="nav-primary">Features</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="header__buttons hidden lg:block">
                <NavLink to="/login">
                    <button
                        className="btn-primary-blue hover:shadow-md md:px-12">
                        Login <FontAwesomeIcon icon={faLongArrowAltRight} className="btn-arrow text-primary-white-light ml-2"/>
                    </button>
                </NavLink>
            </div>

            <Navigation/>
        </header>
    )
}

export default HeaderHome;