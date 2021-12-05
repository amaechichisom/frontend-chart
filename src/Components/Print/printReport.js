import React, { useRef } from 'react';

//Packages
import { useReactToPrint } from 'react-to-print';

import Report from './report'

const PrintReport = () => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
      });

    return (
        <div>
            <div className="my-40 flex flex-col justify-center items-center ">
                <h3>Kindly generate sentiment report here</h3>
            <button className="ml-4 mt-2 text-white hover:shadow-lg text-sm bg-primary-blue p-3 rounded" onClick={handlePrint}>
                Print this report
            </button>
            </div>
            <div >
                <Report ref={componentRef}/>
            </div>
            
        </div>
    )
}

export default PrintReport
