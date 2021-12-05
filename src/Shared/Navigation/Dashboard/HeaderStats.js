import React, {useContext, useEffect, useState} from "react";

// components


// Context
import {DataContext} from '../../../context/dataContext';

//Store
import {getStore} from '../../../store/store'

export default function HeaderStats() {
  const data = useContext(DataContext)

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-24 pb-12 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 font-bold text-xl text-white text-center">
                HACKER EARTH  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
