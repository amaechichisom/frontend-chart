import React from 'react';
import {Link} from 'react-router-dom';

export default function TrackCard(props) {


    return (
        <div className="">
            <Link to={props.link +"/"+props.alt}>
            <div className="course__content w-3/4 focus:outline-none">
                <img src={props.image} alt={props.alt} className="w-full h-full image"/>

                <div className="middle w-full h-full">
                    
                        <h1
                            className="font-semibold text-base text-white border-white border-4 p-4 w-3/4 text hover:bg-white hover:text-black">View
                        </h1>
                    
                </div>

            </div>
            </Link>

            <h1 className="font-semibold mt-4 text-sm md:text-base">{props.title}</h1>

        </div>

    )
}
