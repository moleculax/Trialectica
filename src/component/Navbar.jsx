// Navbar.jsx (con ícono de React en el brand)
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { SiReact } from "react-icons/si"; // ← Ícono oficial de React

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100 shadow-sm">
            <div className="container-fluid d-flex justify-content-center">
                {/* Brand con ícono de React */}
                <NavLink className="navbar-brand fw-bold d-flex align-items-center gap-2 me-4" to="/">
                    <img src="/image/iii.gif" alt="Logo" className="me-2 rounded" style={{ width: "32px", height: "32px" }}/>
                    {/*<SiReact*/}
                    {/* size={32}*/}
                    {/* className="text-cyan"*/}
                    {/* style={{ filter: "drop-shadow(0 0 8px #00ffff)" }}*/}
                    {/*/>*/}
                    <span className="text-white">Trialéctica</span>
                </NavLink>

                {/* Botón hamburguesa */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menú centrado */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav text-center gap-1 gap-lg-3">
                        {/* Trialéctica */}
                        <li className="nav-item">
                            <NavLink to="/DefinicionTrialectica" className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}` } >
                                Trialéctica
                            </NavLink>
                        </li>

                        {/* DROPDOWN 1: Catastro Integral */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Catastro Integral
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark border-0 shadow">
                                <li>
                                    <NavLink to="/PuebloGobiernoTerritorio" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Pueblo · Gobierno · Territorio
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/SistemaInformacionSocial" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Sistema Inf. Social
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ObjetivoGeneralCatastro" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Objetivos del Catastro
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/PrincipiosConceptualesCatastro" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Principios Conceptuales Catastro
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* DROPDOWN 2: Aspectos */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Aspectos
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark border-0 shadow">
                                <li>
                                    <NavLink to="/AspectosConceptuales" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Aspectos Conceptuales
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/AspectosConceptualesSalaTecnica" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Aspectos Sala Técnica
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* NUEVO DROPDOWN: Acotación Filosófica (agrupados los 4 enlaces) */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Acotación
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark border-0 shadow">
                                <li>
                                    <NavLink to="/AcotacionFilosofica" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Acotación Filosófica
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/GranEsquemaComponent" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Gran Esquema
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/BiografiaLuisGomez" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Luis Gómez de la Vega
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/SemblanzaLuisGomez" className={({ isActive }) => `dropdown-item ${isActive ? "bg-primary text-white" : ""}` } >
                                        Semblanza
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/descargas" className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}` } >
                                Descargas
                            </NavLink>
                        </li>

                        {/* Contactos */}
                        <li className="nav-item">
                            <NavLink to="/ContactosRedisComponent" className={({ isActive }) => `nav-link ${isActive ? "active fw-semibold" : ""}` } >
                                Contactos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}