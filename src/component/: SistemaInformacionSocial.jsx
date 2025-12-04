// SistemaInformacionSocial.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function SistemaInformacionSocial() {
    const handleBack = (e) => {
        e.preventDefault();
        window.history.back();
    };

    const justifyStyle = { textAlign: "justify" };

    const sectores = [
        "Social",
        "Educación",
        "Promoción",
        "Planificación e inteligencia",
        "Política",
        "Normativa",
        "Administración",
        "Producción y comercio",
        "Economía y Finanzas",
        "Infraestructura",
        "Ecología",
        "Salud"
    ];

    return (
        <>
            <Navbar/>
        <div className="min-vh-100 bg-white">
            <div className="container py-5 px-4">
                <div className="mx-auto" style={{ maxWidth: "1450px" }}>

                    {/* Título principal */}
                    <header className="text-center mb-5">
                        <h1 className="display-5 fw-bold text-primary mb-3">
                            Sistema de Información Social
                        </h1>
                        <hr className="w-25 mx-auto border-primary border-2 opacity-100" />
                    </header>

                    {/* Imagen del flujo (la que estaba a la derecha en el original) */}
                    <div className="text-center my-5">
                        <img
                            src="/image/image003.gif"
                            alt="Flujo del Sistema de Información Social"
                            className="img-fluid"
                            style={{ maxWidth: "520px", border: "1px solid #dee2e6", borderRadius: "8px" }}
                        />
                    </div>

                    {/* Contenido principal – 95% del ancho */}
                    <main style={{ maxWidth: "95%", margin: "0 auto" }}>

                        {/* Introducción */}
                        <section className="mb-5">
                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                Es la suma, combinación y transferencia de toda la data de cada persona y de cada familia residente en una vivienda, con todas sus características en los doce sectores y que se lee y acumulan en lectoras ópticas para permitir un nivel adecuado la compatibilidad y transferencia de la información generada por cada dirección, unidad o departamento de la institución. Ofrece la posibilidad de diseñar y ejecutar de manera rápida y eficiente el juego de estrategias necesarias para así orientar y direccionar las actividades administrativas y gerenciales de los recursos de tipo social, físico, jurídico y económico fiscal del <strong>municipio inteligente</strong>.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                El Sistema de Información del Catastro Integral presenta un módulo de administración y gerencia social que servirá de soporte estratégico a las acciones de investigación y extensión, tendientes al logro del desarrollo integral en los diferentes órdenes sociales, consolidando un equilibrio armónico entre los sistemas:
                            </p>
                        </section>

                        {/* Los 12 sectores – cuadro destacado como en el original */}
                        <div className="row  mb-5">
                            <div className="col-lg-5">
                                <div className="bg-light border border-2 border-primary rounded-3 p-4 shadow-sm">
                                    <ul className="list-unstyled fs-5 mb-0">
                                        {sectores.map((sector, index) => (
                                            <li key={index} className="mb-3 d-flex align-items-center">
                        <span className="text-primary fw-bold me-3" style={{ minWidth: "32px" }}>
                          {index + 1}.
                        </span>
                                                <strong className="text-primary">{sector}{index < 11 ? "." : ""}</strong>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>



                        {/* Conclusión destacada */}
                        <section className="mt-5">
                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                De lo anterior podemos concluir que la implementación de un{" "}
                                <strong className="text-primary">Sistema de Información Social Organizado e Inteligente</strong>,
                                enfocado a la gestión catastral integral y multiutilitaria, mediante el uso de la{" "}
                                <strong className="text-primary">Tecnología Conceptual e Informática</strong> apropiada,
                                permitirá el procesamiento de la data en forma continua y acelerada para generar información{" "}
                                <strong>Útil, Completa y Oportuna</strong>, en beneficio de las comunidades.
                            </p>
                        </section>



                    </main>
                </div>
            </div>
        </div>
<Footer/>
        </>

    );
}