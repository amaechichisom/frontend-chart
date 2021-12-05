import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Fontawesomeicons/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Admin from './Views/dashboard/Admin';

import {useData} from './Hooks/data-hook';

import {DataProvider} from './context/dataContext';

import './App.css'

function App() {
    const {
        bar,
        pie,
        inputData
    } = useData()

    useEffect(() => {
        AOS.init({duration: 2000});
        AOS.refresh();
    }, []);

    let routes;

    routes = <Switch>
            <Route path="/admin" component={Admin}/>
            <Redirect to="/admin"/>
        </Switch>

    return (
        <div className="relative min-h-screen font-body text-grey-dark">
            <DataProvider
                    value={{
                    bar: bar,
                    pie: pie,
                    inputData: inputData
                }}>
                    <Router>

                        <div>
                            {routes}
                        </div>

                    </Router>
                </DataProvider>
        </div>
    );
}

export default App;
