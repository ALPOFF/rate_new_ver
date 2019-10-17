import React from 'react';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import TariffChooseContainer from "./components/TariffChoose/TariffChooseContainer";

const App = (props) => {
    return (
        <div className="">
            <Header/>
            <Route path='/tariff' render={() => <TariffChooseContainer/>}/>
        </div>
    );
};

export default App;
