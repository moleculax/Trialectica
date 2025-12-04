import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
import PuebloGobiernoTerritorio from "./PuebloGobiernoTerritorio.jsx"; // 👈 para navegación interna con React Router


export default function capituloUno() {



    return (
        <>

        <Navbar/>
        <PuebloGobiernoTerritorio/>

        <Footer/>



        </>

    );
}
