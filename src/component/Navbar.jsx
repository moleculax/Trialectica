// Navbar.jsx (links centrados)
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AcotacionFilosofica from "./AcotacionFilosofica.jsx";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
            <div className="container-fluid d-flex justify-content-center">
                {/* Brand */}
                <NavLink className="navbar-brand fw-bold me-4" to="/">
                    Trialectica
                </NavLink>

                {/* Botón responsive */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links centrados */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item mx-2">
                            <NavLink to="/PuebloGobiernoTerritorio" className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}`}>Pueblo Gobierno Territorio</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/SistemaInformacionSocial" className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}`}>Sistema Inf. Social</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/ObjetivoGeneralCatastro" className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}`}>Objetivos del Catastro</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to="/PrincipiosConceptualesCatastro" className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}`}>Principios Conceptuales Catastro</NavLink>
                        </li>



                        <li className="nav-item mx-2">
                            <NavLink to="/AspectosConceptuales" className={({ isActive }) =>
                                `nav-link ${isActive ? "active fw-semibold" : ""}`}>Aspectos Conceptuales</NavLink>
                        </li>

                        <li className="nav-item mx-2">
                            <NavLink to="/AspectosConceptualesSalaTecnica" className={({ isActive }) =>
                                `nav-link ${isActive ? "active fw-semibold" : ""}`}>Aspectos Sala Tecnica</NavLink>
                        </li>



                        <li className="nav-item mx-2">
                            <NavLink to="/AcotacionFilosofica"
                                     className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}`}>
                                Acotacion Filosofica de la Realidad
                            </NavLink>
                        </li>

                        <li className="nav-item mx-2">
                            <NavLink to="/ContactosRedisComponent"
                                     className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}`}>
                                Contactos
                            </NavLink>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>
    );
}