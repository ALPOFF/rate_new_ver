const SEND_CHOOSED_TARIFF = 'SEND_CHOOSED_TARIFF';

let initialState = {
    choosedTariff: ""
};

const tariffReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_CHOOSED_TARIFF:
            return {
                ...state,
                choosedTariff: action.tarif
            };
        default:
            return state;
    }
};

export const ChoosedTariffClick = (tarif) => {
    return {
        type: SEND_CHOOSED_TARIFF,
        tarif
    }
}

export default tariffReducer;
