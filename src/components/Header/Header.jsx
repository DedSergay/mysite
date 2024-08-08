import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false); // Состояние для управления видимостью меню

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive); // Переключаем состояние видимости меню
    };

    return (
        <div className="Start">
            <a href="#logo" className="Logo">
                <img src="left.svg" alt="" className="left" />
                <img src="title 1.svg" alt="" />
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>☰</button>
            <div className={`infa ${menuActive ? 'active' : ''}`}>
                <a href="#assortment" className="text" onClick={(e) => handleScroll(e, 'assortment')}>ASSORTMENT</a>
                <a href="#about" className="text" onClick={(e) => handleScroll(e, 'about')}>ABOUT THE COMPANY</a>
                <a href="#contacts" className="text" onClick={(e) => handleScroll(e, 'contacts')}>CONTACTS</a>
                <div className="Text">8 (999) 555-88-77</div>
            </div>
        </div>
    );
};

export default Header;
