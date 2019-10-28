import * as types from "./types";

export const ChoosedTariffClick = (tarif) => {
    return {
        type: types.SET_CHOOSED_TARIFF,
        tarif
    }
};
