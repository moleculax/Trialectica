import React, {Fragment} from 'react';
import './App.css';
import CapituloUno from "./component/CapituloUno";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PuebloGobiernoTerritorio from "./component/PuebloGobiernoTerritorio.jsx";
import ObjetivoGeneralCatastro from "./component/ObjetivoGeneralCatastro.jsx";
import PrincipiosConceptualesCatastro from "./component/PrincipiosConceptualesCatastro.jsx";
import SistemaInformacionSocial from "./component/SistemaInformacionSocial.jsx";
import HomeTrialectica from "./component/HomeTrialectica.jsx";
import AcotacionFilosofica from "./component/AcotacionFilosofica.jsx";
import AspectosConceptuales from "./component/AspectosConceptuales.jsx";
import AspectosConceptualesSalaTecnica from "./component/AspectosConceptualesSalaTecnica.jsx";
import ContactosRedisComponent from "./component/ContactosRedisComponent.jsx";
import BiografiaLuisGomez from "./component/BiografiaLuisGomez.jsx";
import SemblanzaLuisGomez from "./component/SemblanzaLuisGomez.jsx"; // 👈 falta Route

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ejemplo de ruta principal */}
                 <Route path="/" element={<HomeTrialectica />} />

                {/*<Route path="/capitulouno" element={<CapituloUno />} />*/}
                <Route path="/SistemaInformacionSocial" element={<SistemaInformacionSocial />} />
                <Route path="/ObjetivoGeneralCatastro" element={<ObjetivoGeneralCatastro />} />
                <Route path="/PrincipiosConceptualesCatastro" element={<PrincipiosConceptualesCatastro />} />

                <Route path="/PuebloGobiernoTerritorio" element={<PuebloGobiernoTerritorio/>} />
                <Route path="/AcotacionFilosofica" element={<AcotacionFilosofica/>} />

                <Route path="/AspectosConceptuales" element={<AspectosConceptuales/>} />
                <Route path="/AspectosConceptualesSalaTecnica" element={<AspectosConceptualesSalaTecnica/>} />

                <Route path="/ContactosRedisComponent" element={<ContactosRedisComponent/>} />
                <Route path="/BiografiaLuisGomez" element={<BiografiaLuisGomez/>} />

                <Route path="/SemblanzaLuisGomez" element={<SemblanzaLuisGomez />} />
                <Fragment></Fragment>





            </Routes>
        </BrowserRouter>
    );
}

export default App;
