const SET_CHOOSED_TARIFF = 'tariff/SET_CHOOSED_TARIFF';

let initialState = {
    choosedTariff: "",
};

const tariffReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOOSED_TARIFF:
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
        type: SET_CHOOSED_TARIFF,
        tarif
    }
};

export default tariffReducer;
