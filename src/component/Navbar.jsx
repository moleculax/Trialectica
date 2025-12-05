// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

// Import completos de Bootstrap (CSS + JS)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
            <div className="container-fluid">
                {/* Brand */}
                <NavLink className="navbar-brand fw-bold" to="/">
                    Proyecto Catastro
                </NavLink>

                {/* Botón responsive (hamburger) */}
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

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/PuebloGobiernoTerritorio"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-semibold" : ""}`
                                }
                            >
                                Pueblo Gobierno Territorio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/SistemaInformacionSocial"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-semibold" : ""}`
                                }
                            >
                                Sistema Inf. Social
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/ObjetivoGeneralCatastro"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-semibold" : ""}`
                                }
                            >
                                Objetivos del catastro
                            </NavLink>
                        </li>


                        {/*<li className="nav-item">*/}
                        {/*    <NavLink*/}
                        {/*        to="/capitulotres"*/}
                        {/*        className={({ isActive }) =>*/}
                        {/*            `nav-link ${isActive ? "active fw-semibold" : ""}`*/}
                        {/*        }*/}
                        {/*    >*/}
                        {/*        Capítulo Tres*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
