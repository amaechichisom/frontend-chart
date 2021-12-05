import React, {useState, useContext} from "react";



//Http Requests 
import { useHttpClient } from "../../Hooks/HttpRequests";

//Context
import { UserContext } from '../../context/userContext';
import {DataContext} from '../../context/dataContext';



import Swal from 'sweetalert2';

export default function Navbar() {
  const auth = useContext(UserContext);
  const data = useContext(DataContext)

  const [keywords, setkeywords] = useState("")
  const { isLoading, sendRequest } = useHttpClient();

  const changeHandler = event => {
    setkeywords(event.target.value)
  }

  const postData = async(event) => {
    event.preventDefault()
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_API_URL}feed/twitter`,
        'POST',
        JSON.stringify({
          token:keywords
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token
        }
      );
    
      if (responseData){
        let swalAlert = await Swal.fire('Successfully processed','In record time', 'success');
        if (swalAlert.isConfirmed) {
          data.inputData(responseData)
        }
        
      }
      else {
        let swalAlert = await Swal.fire('Error', responseData.message, 'error');
        if (swalAlert.isConfirmed) {
            
        }
    }
        

    } catch (e) {
      console.log(e);
      let swalAlert = await Swal.fire('Error', "An error occured, please check your network and try again", 'error');
      if (swalAlert.isConfirmed) {
        auth.logout();
      }
  }
  }

  return (
    <>
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 sm:bg-primary-blue md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Chart Challenge
          </a>
          {/* Form */}
         
        </div>
        {isLoading && <div className="dim-screen"></div>}
      </nav>
      {/* End Navbar */}
    </>
  );
}
