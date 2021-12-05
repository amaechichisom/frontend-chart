import React from 'react'
import Navigation from '../Navigation/Navigation';

import {Link} from 'react-router-dom';
import HeaderHome from './Pages/HeaderHome'


export default function HeaderNav(props) {

    let path = props.currentPage.pathname;
    

    const signup = <header className=" focus:bg-white p-2 pt-4 px-8 flex justify-between items-center text-grey-body font-body md:pt-4 md:px-8 xl:px-32 lg:text-sm xl:text-base ">
    
    <div className="header__logo flex justify-start items-center">
        {/* <img src={logo} alt="Lernen Logo"/> */}
        <p className="text-primary-blue  ml-2 font-semibold lg:text-lg">Pisocial</p>
    </div>

    <div className="header__buttons hidden lg:block">
    <Link to="/login">
        <button
            className="btn-primary text-white bg-primary-blue border-4 p-2 px-6 border-primary-blue font-semibold rounded ml-4  hover:shadow-md">
            Sign In
        </button>
        </Link>
    </div>

    <Navigation/>
</header>;

const signin = <header className=" focus:bg-white p-2 pt-4 px-8 flex justify-between items-center text-grey-body font-body md:pt-4 md:px-8 xl:px-32 lg:text-sm xl:text-base ">
    
    <div className="header__logo flex justify-start items-center">
        {/* <img src={logo} alt="Lernen Logo"/> */}
        <p className="text-primary-blue  ml-2 font-semibold lg:text-lg">Pisocial</p>
    </div>
    <div className="header__buttons hidden lg:block">
    <Link to="/signup">
        <button
            className="btn-primary text-white bg-primary-blue border-4 p-2 px-6 border-primary-blue font-semibold rounded ml-4  hover:shadow-md">
            Sign Up
        </button>
    </Link>
    </div>

    <Navigation/>
</header>;


        if(path ==='/signup'){
            return(

                signup
                
            )
        }
        else if(path ==='/login'){
            return(
                signin
            )
        }
        else{
            return(
                <HeaderHome/>
            )
        }
    
}
