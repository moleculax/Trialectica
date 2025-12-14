// PrincipiosConceptualesCatastro.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PrincipiosConceptualesCatastro() {
    const justifyStyle = { textAlign: "justify" };

    return (
        <>
            <Navbar />
            <div className="min-vh-100 bg-white">
                <div className="container py-4 py-md-5 px-4 shadow">
                    <div className="mx-auto" style={{ maxWidth: "900px" }}>
                        {/* Título principal */}
                        <header className="text-center mb-5">
                            <h1 className="display-5 fw-bold text-primary mb-3">
                                Principios Conceptuales del Catastro Integral
                            </h1>
                            <hr className="w-50 w-md-25 mx-auto border-primary border-2 opacity-100" />
                        </header>

                        {/* Contenido principal */}
                        <main>
                            {/* Texto introductorio */}
                            <section className="mb-5">
                                <p className="fs-5 lh-lg" style={justifyStyle}>
                                    Los principios conceptuales que resultan de mayor relevancia para el buen entendimiento y ejercicio del <strong className="text-primary">“CATASTRO INTEGRAL”</strong> se desarrollan en una Geotemática del sistema espacio, donde convergen los conceptos de amplia acepción sobre: realidad, órdenes sociales, igualdad teleológica de los órdenes sociales, información útil, completa y oportuna (<strong>UCO</strong>), relación gobierno-población organizada-territorio, y relación sinergia–sintergia. El proceso irreversible es llegar en cada jurisdicción al <strong>Municipalismo Inteligente</strong>.
                                </p>

                                <div className="bg-light p-4 rounded border-start border-primary border-5 mt-5">
                                    <p className="fs-5 lh-lg mb-3" style={justifyStyle}>
                                        Dentro de estos principios conceptuales se encuentra la premisa rectora y motivadora de un Alcalde optimista que se sienta y proyecte el éxito como gestión.
                                    </p>
                                    <p className="fs-5 lh-lg" style={justifyStyle}>
                                        Es desde la <strong>“MENTE COLECTIVA”</strong> de la Alcaldía donde se genera el impulso sinérgico del <strong>MUNICIPIO INTELIGENTE</strong>; la información, la organización, la tecnología y la activación son solo sus insumos básicos.
                                    </p>
                                </div>

                                <p className="fs-5 lh-lg mt-5 fw-bold text-primary" style={justifyStyle}>
                                    El paradigma es cuándo y cómo cada Alcalde impulsará la transformación.
                                </p>
                            </section>

                            {/* Imagen centrada */}
                            <div className="text-center my-5">
                                <img
                                    src="/image/flujo4.gif"
                                    alt="Flujo conceptual del Catastro Integral"
                                    className="img-fluid rounded shadow-sm"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        border: "1px solid #dee2e6"
                                    }}
                                />
                            </div>

                            {/* Espacio antes del footer – ajustado para móviles */}
                            <div className="mb-5 d-block d-md-none" style={{ height: "80px" }}></div>
                            <div className="mb-5 d-none d-md-block" style={{ height: "150px" }}></div>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}