import React from "react"

const TariffChoose = (props) => {

    let sendChoosedTariff = () => {

    }

    return (
        <div>

            <div>
                <h3>Выбор тарифа</h3>
            </div>

            <div>
                <div>
                    Тариф 1
                    <button id = "Child" onClick={sendChoosedTariff}>Выбрать</button>
                </div>
                <div>
                    Тариф 2
                    <button id = "Student" onClick={sendChoosedTariff}>Выбрать</button>
                </div>
                <div>
                    Тариф 3
                    <button id = "Adult" onClick={sendChoosedTariff}>Выбрать</button>
                </div>
            </div>

        </div>
    )
}

export default TariffChoose;