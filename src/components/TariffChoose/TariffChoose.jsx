import React from "react"

const TariffChoose = (props) => {

    let sendChoosedTariffClick = (e) => {
        let tariff = e.target.id;
        props.sendChoosedTariff(tariff);
    }

    return (
        <div>

            <div>
                <h3>Выбор тарифа</h3>
            </div>

            <div>
                <div>
                    Тариф 1
                    <button id="Child"
                            onClick={sendChoosedTariffClick}>Выбрать</button>
                </div>
                <div>
                    Тариф 2
                    <button id="Student"
                            onClick={sendChoosedTariffClick}>Выбрать</button>
                </div>
                <div>
                    Тариф 3
                    <button id="Adult"
                            onClick={sendChoosedTariffClick}>Выбрать</button>
                </div>
            </div>

        </div>
    )
}

export default TariffChoose;
