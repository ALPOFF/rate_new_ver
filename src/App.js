import React from 'react';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import TariffChooseContainer from "./containers/TariffChooseContainer/TariffChooseContainer";

const App = (props) => {
    return (
        <div>
            <Header/>
            <Route path='/tariff' render={() => <TariffChooseContainer/>}/>
        </div>
    );
};

export default App;
