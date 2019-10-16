import React from 'react';
import Header from "./components/Header/Header";
import TariffChoose from "./components/TariffChoose/TariffChoose";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div>
            <Header/>
            <Route path='/tariff' render={() => <TariffChoose/>}/>
        </div>
    );
}

export default App;
