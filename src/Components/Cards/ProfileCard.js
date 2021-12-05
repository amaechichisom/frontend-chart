
import React from 'react';
import {Link} from 'react-router-dom'

const ProfileCard = (props) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={props.UserImage} className="object-cover w-32 h-32" alt={props.UserImage}/>
            <p>{props.UserFullname}</p>
            <p>{props.UserEmail}</p>
            <Link 
            to="/dashboard/edit"
            className="border-primary-blue border-4 px-8 py-4 w-48 flex justify-center items-center mt-10 rounded text-primary-blue">
            <p className=" text-sm font-semibold text-center">Edit</p>
        </Link>
        </div>
    )
}



export default ProfileCard;