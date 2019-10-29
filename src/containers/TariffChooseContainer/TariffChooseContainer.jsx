import React from "react";
import {connect} from "react-redux";
import TariffChoose from "../../components/TariffChoose/TariffChoose";
import {getChoosedTarif} from "../../state/selectors";
import {ChoosedTariffClick} from "../../state/tariff-reducer";

class TariffChooseContainer extends React.Component {
    render() {
        let {ChoosedTariffClick, choosedTariff} = this.props;
        return <TariffChoose sendChoosedTariff={ChoosedTariffClick} choosedTariff={choosedTariff} />
    }
}

const mapStateToProps = (state) => {
    return {
        choosedTariff: getChoosedTarif(state)
    }
};

export default connect(mapStateToProps, {ChoosedTariffClick})(TariffChooseContainer)
