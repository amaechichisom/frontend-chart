import {useState, useCallback} from 'react';
import {setStore, getStore} from '../store/store'

export const useData = () => {
    const [bar,
        setBar] = useState([]);
    const [pie,
        setPie] = useState([]);

    // let bar = [];

    // let pie = [];
   

    const inputData = useCallback((data) => {
        // setType(data.type);
        // setElements(data.elements);
        for(let i = 0; i< data.length; i++){
            

            if(data[i].type === "Bar" ){
                
                setBar(state => [...state, data[i].elements])
            }
            else{
                
                setPie(state => [...state, data[i].elements])
            }
        }
        
    }, [])
    
    console.log(bar);

    return {
        bar,
        pie,
        inputData
    };
}