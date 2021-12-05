import {createContext} from 'react';

const DataContext = createContext({
    bar:null,
    pie:null,
    inputData: () => {}
});

const DataProvider = DataContext.Provider
const DataConsumer = DataContext.Consumer

export {DataProvider, DataConsumer, DataContext}