import React from "react";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.scss";

const App = () => {
    return <div className="app">
        <Header />

        <div className="container">
            <AppRoutes />
        </div>

        <Footer />
    </div>
};

export default App;