import React from 'react';
import {useLocation} from 'react-router-dom';

import HeaderHome from './HeaderNav';

function Header() {
    const location = useLocation();


    return (
        <HeaderHome currentPage={location}/>
       
    )
}

export default Header