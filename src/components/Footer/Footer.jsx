import React from "react";

import "./Footer.scss";

const Footer = () => {
    return <div className="footer">
        <div className="infa">
            <div className="text">2024 © ALL RIGHTS RESERVED</div>
            <img src="top.svg" alt="" />
            <div className="conntacts">
                <div className="info"><img src="Vector.svg" alt="" />info@concord-grains.com</div>
                <div className="info"><img src="Group.svg" alt="" />8 (999) 555-88-77</div>
            </div>
        </div>
    </div>;
}

export default Footer;