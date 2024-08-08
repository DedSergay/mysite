import React, { useState } from "react";

import Modal from "../Modal/Modal";
import "./Home.scss";

const Home = () => {

    const [modalActive, setModalActive] = useState(false)
    const [modalActive1, setModalActive1] = useState(false)

    const items = [
        { title: "CHICKPEAS (6-7)", image: "image 7.png", price: "PRICE: ON REQUEST" },
        { title: "CHICKPEAS (8-9)", image: "image 7.png", price: "PRICE: ON REQUEST" },
        { title: "DAIS CHICKPEAS", image: "image 7.png", price: "PRICE: ON REQUEST" },
        { title: "NEW CHICKPEAS (10-11)", image: "image 7.png", price: "PRICE: AVAILABLE" },
        { title: "NEW CHICKPEAS (12-13)", image: "image 7.png", price: "PRICE: AVAILABLE" },
        { title: "NEW CHICKPEAS (14-15)", image: "image 7.png", price: "PRICE: AVAILABLE" }
    ];
    function groupItemsByThree(items) {
        const grouped = [];
        for (let i = 0; i < items.length; i += 3) {
            grouped.push(items.slice(i, i + 3));
        }
        return grouped;
    }

    const groupedItems = groupItemsByThree(items);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email }),
        });

        if (response.ok) {
            setModalActive(true);

            alert('Email sent successfully!');
            setName('');
            setSurname('');
            setEmail('');

            setTimeout(() => {
                setModalActive(false);
            }, 6000);
        } else {
            alert('Failed to send email.');
        }
    };



    return <div className="home">
    <link href="https://fonts.google.com/specimen/Play?query=Play" rel="stylesheet"></link>
        <div className="bloc1" id="assortment">
           {/* <img src="image.png" alt="" />*/}
            <div className="Text">WHOLESALE FROM<br />MANUFACTURER</div>
            <div className="text">Leave contacts</div>
            <button className="button" onClick={() => setModalActive1(true)}>MAKE A REQUEST</button>
        </div>
        <div className="bloc2" id="assortment">
            <div className="Title">ASSORTMENT</div>
            <div className="assortment">
                {groupedItems.map((group, groupIndex) => (
                    <div className="line" key={groupIndex}>
                        {group.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="text">{item.title}</div>
                                <div className="Imag">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="bottom">
                                    <div className="price">{item.price}</div>
                                    <button className="more" onClick={() => setModalActive1(true)}>MORE</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        <div className="bloc3" id="about">
            
            <div className="photo">
                <img src="image 14.png" alt="" />
            </div>
            <div className="text">
                <div className="titul">ABOUT THE COMPANY</div>
                <div className="infa">THE COMPANY "GREINEX" LLC HAS BEEN REGISTERED AS A LEGAL ENTITY SINCE SEPTEMBER 10, 2021, AND IT HAS ALREADY ESTABLISHED AS A RESPONSIBLE AND RELIABLE PARTNER.
                    BEING ENGAGED IN TRADE AND EXPORT OF RUSSIAN AGRICULTURAL PRODUCTS, OUR COMPANY STRIVES TO BUILD LONG-TERM AND MUTUALLY BENEFICIAL RELATIONS WITH PARTNERS.
                    FROM JANUARY 2022 TO THE CURRENT MOMENT, MORE THAN 10 230 TONS OF PRODUCTS HAVE BEEN EXPORTED.
                </div>
            </div>
        </div>
        <div className="bloc4" id="contacts">
           
            <div className="contacs">
                <div className="element">
                    <div className="titul">CONTACTS</div>
                    <div className="text">
                        <img src="Vector.svg" alt="" />
                        <div className="inf">info@concord-grains.com</div>
                    </div>
                    <div className="text">
                        <img src="Group.svg" alt="" />
                        <div className="inf">8 (999) 555-88-77</div>
                    </div>
                </div>
                <div className="element">
                    <div className="titul">ADRESS</div>
                    <div className="text">Legal address: 344049, Russia, Rostov-on-Don, Doblestniy, 8, 116
                        Stock: Rostov Region, Rodionovo-Nesvetaisky district, sl. Rodionovo-Nesvetaiskaya, Gvardeicev-Tankistov street</div>
                </div>
                <div className="element">
                    <div className="titul">WORKING HOURS</div>
                    <div className="text">
                        <img src="Vector1.svg" alt="" />
                        <div className="inf">08:00 - 17:00</div>
                    </div>
                    <div className="text">
                        <img src="Vector2.svg" alt="" />
                        <div className="inf">Seven days a week</div>
                    </div>
                </div>
            </div>
            <div className="connection">
                <div className="titul">HAVE SOME QUESTIONS?
                    <br />CALL US OR APPLY ONLINE
                </div>
                <form onSubmit={handleSubmit} className="input">
                    <div className="name">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Surname"
                            className="Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="email">
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="send">SEND</button>
                    </div>
                </form>

            </div>
        </div>
        <Modal active={modalActive} setActive={setModalActive} >
            <div className="Modal_Text">
                YOUR DATA HAS BEEN SUCCESSFULLY<br />SENT TO OUR E-MAIL.
            </div>
        </Modal>
        <Modal active={modalActive1} setActive={setModalActive1} >
            <div className="Modal1">
                <div className="text">
                    Leave a request and we'll respond to you in the mail.
                </div>
                <form onSubmit={handleSubmit} className="input">
                    <div className="name">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Surname"
                            className="Surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="email">
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="send" onClick={() => setModalActive1(false)}>SEND</button>
                    </div>
                </form>

            </div>
        </Modal>
    </div >;
}

export default Home;