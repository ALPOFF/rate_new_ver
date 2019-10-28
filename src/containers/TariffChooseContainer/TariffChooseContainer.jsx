import React from "react";
import {connect} from "react-redux";
import TariffChoose from "../../components/TariffChoose/TariffChoose";
import {getChoosedTarif} from "../../state/selectors";
import {ChoosedTariffClick} from "../../state/tariff-action";

class TariffChooseContainer extends React.Component {
    render() {
        return <TariffChoose {...this.props} sendChoosedTariff={this.props.ChoosedTariffClick} choosedTariff={this.props.choosedTariff} />
    }
}

const mapStateToProps = (state) => {
    return {
        choosedTariff: getChoosedTarif(state)
    }
};

export default connect(mapStateToProps, {ChoosedTariffClick})(TariffChooseContainer)
