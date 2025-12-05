// SistemaInformacionSocial.jsx → 100% RESPONSIVE + TEXTO JUSTIFICADO + FONDO BLANCO
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function SistemaInformacionSocial() {
    const sectores = [
        "Social", "Educación", "Promoción", "Planificación e inteligencia",
        "Política", "Normativa", "Administración", "Producción y comercio",
        "Economía y Finanzas", "Infraestructura", "Ecología", "Salud"
    ];

    return (
        <>
            <Navbar />

            {/* Fondo blanco puro en toda la página */}
            <div className="min-vh-100 bg-white py-5">

                <div className="container px-4 px-md-5">
                    <div className="mx-auto" style={{ maxWidth: "100%" }}>

                        {/* Título */}
                        <header className="text-center mb-5">
                            <h1 className="display-5 fw-bold text-primary mb-4">
                                Sistema de Información Social
                            </h1>
                            <hr className="w-50 w-md-25 mx-auto border-primary border-3 opacity-100" />
                        </header>

                        {/* Imagen responsive */}
                        <div className="text-center my-5">
                            <img
                                src="/image/image003.gif"
                                alt="Flujo del Sistema de Información Social"
                                className="img-fluid rounded shadow-sm border"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    width: "clamp(280px, 85vw, 560px)",
                                    borderColor: "#dee2e6",
                                }}
                            />
                        </div>

                        {/* Todo el contenido con texto JUSTIFICADO */}
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-10 col-xl-9">

                                {/* Introducción - justificado */}
                                <section className="mb-5" style={{ textAlign: "justify" }}>
                                    <p className="fs-5 lh-lg mb-4">
                                        Es la suma, combinación y transferencia de toda la data de cada persona y de cada familia residente en una vivienda, con todas sus características en los doce sectores y que se lee y acumulan en lectoras ópticas para permitir un nivel adecuado la compatibilidad y transferencia de la información generada por cada dirección, unidad o departamento de la institución. Ofrece la posibilidad de diseñar y ejecutar de manera rápida y eficiente el juego de estrategias necesarias para así orientar y direccionar las actividades administrativas y gerenciales de los recursos de tipo social, físico, jurídico y económico fiscal del <strong>municipio inteligente</strong>.
                                    </p>

                                    <p className="fs-5 lh-lg">
                                        El Sistema de Información del Catastro Integral presenta un módulo de administración y gerencia social que servirá de soporte estratégico a las acciones de investigación y extensión, tendientes al logro del desarrollo integral en los diferentes órdenes sociales, consolidando un equilibrio armónico entre los sistemas:
                                    </p>
                                </section>

                                {/* Lista de 12 sectores - centrada y responsive */}
                                <div className="d-flex justify-content-center mb-5">
                                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                                        <div className="bg-light border border-2 border-primary rounded-3 p-4 p-md-5 shadow-sm">
                                            <ul className="list-unstyled mb-0">
                                                {sectores.map((sector, index) => (
                                                    <li key={index} className="d-flex mb-3 fs-5">
                            <span className="text-primary fw-bold me-3" style={{ minWidth: "38px" }}>
                              {index + 1}.
                            </span>
                                                        <strong className="text-primary">{sector}.</strong>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Conclusión - justificado */}
                                <section style={{ textAlign: "justify" }}>
                                    <div className="bg-light rounded-3 p-4 p-md-5 shadow-sm">
                                        <p className="fs-5 lh-lg mb-0">
                                            De lo anterior podemos concluir que la implementación de un <strong className="text-primary">Sistema de Información Social Organizado e Inteligente</strong>, enfocado a la gestión catastral integral y multiutilitaria, mediante el uso de la <strong className="text-primary">Tecnología Conceptual e Informática</strong> apropiada, permitirá el procesamiento de la data en forma continua y acelerada para generar información <strong className="text-primary">Útil, Completa y Oportuna</strong>, en beneficio de las comunidades.
                                        </p>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}