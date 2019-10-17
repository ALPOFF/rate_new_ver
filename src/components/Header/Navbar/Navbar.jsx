import React from "react"
import {NavLink} from "react-router-dom";
import complete_pic from "./../../../assets/images/complete.png"
import swim_pic from "./../../../assets/images/swim.png"
import health_pic from "./../../../assets/images/htlth.png"
import box_pic from "./../../../assets/images/box.png"
import './Navbar.scss'

const Navbar = (props) => {
    return (
        <nav className="navbar_container">

            <NavLink className="navbar_item_container" to="/tariff">
                <img src={health_pic} alt="health_pic"/>
                <div className="menutext">Оздоровительное плавание<br/>(разовые посещения)</div>
            </NavLink>


            <NavLink className="navbar_item_container" to="/tickets">
                <img src={box_pic} alt="box_pic"/>
                <div className="menutext">Абонементы</div>
            </NavLink>

            <NavLink className="navbar_item_container" to="/learn">
                <img src={swim_pic} alt="swim_pic"/>
                <div className="menutext">Обучение плаванию (дети)</div>
            </NavLink>

            <NavLink className="navbar_item_container" to="/complete">
                <img src={complete_pic} alt="complete_pic"/>
                <div className="menutext">Оформить отказ</div>
            </NavLink>

        </nav>
    )
};

export default Navbar;
