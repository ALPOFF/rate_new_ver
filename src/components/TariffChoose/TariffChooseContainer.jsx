import React from "react";
import {connect} from "react-redux";
import TariffChoose from "./TariffChoose";

const mapStateToProps = (state) => {
    return {

    }
}

const TarrifChooseContainer = connect(mapStateToProps, )(TariffChoose)