import React, {useContext} from "react";

// components
import CardBarChart from "../../Components/Cards/CardBarChart.js";

//Hooks
import {DataContext} from '../../context/dataContext';


export default function Mention() {
  const data = useContext(DataContext)

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
        <div className="w-full xl:w-6/12 px-4">
          <CardBarChart positive={data.positive? data.positive.length : 0} negative={data.negative? data.negative.length : 0} neutral={data.neutral? data.neutral.length : 0}/>
        </div>
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}
