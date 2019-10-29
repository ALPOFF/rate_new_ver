import React from "react"
import tarif_pic from "./../../assets/images/tarif.png"
import './TariffChoose.scss'

const TariffChoose = ({sendChoosedTariff, choosedTariff}) => {

    let sendChoosedTariffClick = (e) => {
        let tariff = e.target.id;
        sendChoosedTariff(tariff);
    };

    return (
        <div className="tarif_page_container">
            <div>
                <div className="tariff">
                    <img src={tarif_pic} alt="tarif_pic"/>
                    <h3>Выбор тарифа</h3>
                </div>

                <div className="info_container">
                    <div className="info_container_item">

                        <h4>ДЕТИ<br/>(с 5 до 18 лет)</h4>
                        <div>
                            до 15:00 - 90 руб.<br/>
                            после 15:00 - 110 руб.
                        </div>
                        <button
                            disabled={choosedTariff === "Child"} id="Child"
                            onClick={sendChoosedTariffClick}>Выбрать
                        </button>
                        <div>
                            На 1 месяц
                        </div>
                    </div>

                    <div className="info_container_item">
                        <h4>СТУДЕНТЫ<br/>(очная форма)</h4>
                        <div>
                            до 15:00 - 90 руб.<br/>
                            после 15:00 - 110 руб.
                        </div>
                        <button
                            disabled={choosedTariff === "Student"} id="Student"
                            onClick={sendChoosedTariffClick}>Выбрать
                        </button>
                        <div>
                            На 1 месяц
                        </div>
                    </div>

                    <div className="info_container_item">
                        <h4>ВЗРОСЛЫЕ</h4><br/>
                        <div>
                            до 15:00 - 90 руб.<br/>
                            после 15:00 - 150 руб.
                        </div>
                        <button
                            disabled={choosedTariff === "Adult"} id="Adult"
                            onClick={sendChoosedTariffClick}>Выбрать
                        </button>
                        <div>
                            На 1 месяц
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default TariffChoose;
