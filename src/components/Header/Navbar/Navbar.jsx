import React from "react"
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <div>
                    <NavLink to="/tariff">Тарифы</NavLink>
                </div>

                <div>
                    <NavLink to="/tickets">Абонементы</NavLink>
                </div>

                <div>
                    <NavLink to="/learn">Обучение</NavLink>
                </div>

                <div>
                    <NavLink to="/complete">Оформить заказ</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;