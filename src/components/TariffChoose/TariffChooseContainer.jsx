import React from "react";
import {connect} from "react-redux";
import TariffChoose from "./TariffChoose";
import {ChoosedTariffClick} from "../../redux/tariff-reducer";
import {getChoosedTarif} from "../../redux/tariff-selectors";

class TariffChooseContainer extends React.Component {
    render() {
        return <TariffChoose {...this.props} sendChoosedTariff={this.props.ChoosedTariffClick} choosedTariff={this.props.choosedTariff} />
    }
}

const mapStateToProps = (state) => {
    return {
        choosedTariff: getChoosedTarif(state)
    }
}

export default connect(mapStateToProps, {ChoosedTariffClick})(TariffChooseContainer)
