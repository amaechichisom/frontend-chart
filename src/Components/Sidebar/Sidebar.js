/*eslint-disable*/
import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";



//context
import { UserContext } from '../../context/userContext';
import {DataContext} from '../../context/dataContext';

//Http Requests 
import { useHttpClient } from "../../Hooks/HttpRequests";

//packages
import Swal from 'sweetalert2';

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const auth = useContext(UserContext);
  const data = useContext(DataContext);

  const logout = () => {
    auth.logout();
  }

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
          data.inputData(responseData);
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
      }
  }
  }
  
  
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-lg font-logo p-4 px-0"
            to="/"
          >
            Pisocial
          </Link>
          {/* User */}
          {/* <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul> */}
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm font-logo p-4 px-0"
                    to="/"
                  >
                    Pisocial
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden" onSubmit={postData}>
              <div className="mb-3 pt-0">
                <input
                  id="token"
                  type="text"
                  placeholder="Keyword here..."
                  onChange={changeHandler}
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
              <input
                type="submit"
                id="submit"
                value="Send"
                className="border-0 px-3 py-3 cursor-pointer text-center text-primary-blue font-semi relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-2/5 ml-4"
              />
            </form>
            {isLoading && <div className="dim-screen"></div>}
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-chart-pie mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  PieChart
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/mention") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/mention"
                >
                  <i
                    className={
                      "fas fa-chart-bar mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/mention") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  BarChart
                </Link>
              </li>

             </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
