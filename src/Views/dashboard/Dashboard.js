import React, {useContext} from "react";

// components
import CarPieChart from "../../Components/Cards/CarPieChart"

//Hooks
import {DataContext} from '../../context/dataContext';

export default function Dashboard() {
  const data = useContext(DataContext);

  

  return (
    <>
      <div className="flex flex-wrap">
        
      {data.pie.map((element, index) => 
        <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4" key={index}> 
          <CarPieChart  element={element}/>
      </div>    
      )}
        
        
      </div>
      

    </>
  );
}
