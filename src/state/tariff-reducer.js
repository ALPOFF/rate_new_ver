import * as types from "./types";

let initialState = {
    choosedTariff: "",
};

const tariffReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CHOOSED_TARIFF:
            return {
                ...state,
                choosedTariff: action.tarif
            };
        default:
            return state;
    }
};

export default tariffReducer;
