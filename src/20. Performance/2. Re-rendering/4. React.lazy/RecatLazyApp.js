import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import React, { Suspense } from "react";


const lazyAboutPage = React.lazy(() => import("./AboutPage.js"));
const lazyContactPage = React.lazy(() => import("./ContactPage.js"));

function RecatLazyApp(){
    return (
        <>
            <Suspense fallback={<h1>Please wait for the loading</h1>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={lazyAboutPage} />
                    <Route path="/contact" element={lazyContactPage} />
                </Routes>
            </Suspense>
        </>
    )
}

export default RecatLazyApp;