// ObjetivoGeneralCatastro.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function ObjetivoGeneralCatastro() {


    const justifyStyle = { textAlign: "justify" };

    const aspectos = [
        "Social",
        "Educación",
        "Promoción",
        "Planificación y Control",
        "Políticas de Desarrollo",
        "Normativa",
        "Administración",
        "Economía y Finanzas",
        "Producción y Comercio",
        "Infraestructura y Servicios",
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
                            Objetivos Generales y Específicos del Catastro Integral
                        </h1>
                        <p className="lead text-muted">
                            Hacia el Municipio Inteligente
                        </p>
                        <hr className="w-25 mx-auto border-primary border-2 opacity-100" />
                    </header>

                    {/* Contenido principal – 95% del ancho */}
                    <main style={{ maxWidth: "95%", margin: "0 auto" }}>

                        {/* Objetivo General */}
                        <section className="mb-5">
                            <h2 className="h4 fw-bold text-primary mb-4">
                                Objetivo General del Catastro Integral
                            </h2>
                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                El Catastro Integral fija las bases necesarias para diseñar, implementar, mantener y conservar un sistema de información Catastral, considerando la cobertura y enfoque de carácter integral, direccionado hacia las aplicaciones multiutilitarias, para así establecer la mayor cobertura y decisiones oportunas sobre las necesidades y las capacidades y condiciones específicas del entorno municipal, para incrementar la calidad de vida de la población.
                            </p>
                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                Esto corresponde a los <strong>doce aspectos</strong>, uno a uno, sectorialmente identificados en el individuo y en cualquier sociedad.
                            </p>
                        </section>

                        {/* Tabla de los 12 aspectos */}
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-6">
                                <table className="table table-bordered text-center">
                                    <tbody>
                                    {aspectos.map((aspecto, index) => (
                                        <tr key={index}>
                                            <td className="bg-primary text-white fw-bold" style={{ width: "50px" }}>
                                                {index + 1}
                                            </td>
                                            <td className="text-dark fw-medium fs-5">
                                                {aspecto}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Imagen flujo5.gif */}
                        <div className="text-center my-5">
                            <img
                                src="/image/flujo5.gif"
                                alt="Flujo del Catastro Integral"
                                className="img-fluid"
                                style={{ maxWidth: "520px", border: "1px solid #dee2e6", borderRadius: "8px" }}
                            />
                        </div>

                        <hr className="my-5 border-secondary" />

                        {/* NUEVA SECCIÓN: Objetivos Específicos */}
                        <section className="mb-5">
                            <h2 className="h3 fw-bold text-primary mb-4">
                                Objetivos Específicos del Catastro Integral – Municipio Inteligente
                            </h2>

                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                La implementación del Catastro Integral expone la unificación y la transferencia de criterios, técnicas y esquemas metodológicos en el aspecto social, físico, jurídico y económico fiscal.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                El Catastro Integral define su calidad y rendimiento destacando los conceptos y tecnología de avanzada en software y hardware para la modernización de las oficinas de Catastro Urbano Municipal, diseñando la estructura de bases de datos Espaciales, en Formato Digital, la cual con el apoyo de tecnología G.I.S permite analizar, visualizar y mantener la consistencia de la configuración social, física, jurídica y económico fiscal.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                El Catastro Integral por medio de una data digital actualizada evalúa las progresivas necesidades y capacidades de la población, una vez que esta tiene una mínima organización y atiende innovaciones inmobiliarias, manifestadas por el crecimiento del porcentaje de cambio de tipo geométrico reflejado en las unidades territoriales.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                La Base de Datos Digital Espacial del Catastro Integral permite el monitoreo de los procesos de desarrollo, expansión social, perfecciones de los niveles de comunicación y coordinación entre la Alcaldía y las Comunidades Organizadas, al momento de analizar y planificar acciones referentes a los servicios públicos, asistenciales, educativos, de vialidad y transporte, y recreacionales. Todo de acuerdo a la Ley de los Consejos Locales de Planificación Pública y su Sala Técnica.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                El Catastro Integral se debe promover a gran escala, dando cabida a una variedad de trabajos que pueden ser acometidos por distintas instituciones administrativas que consideren de modo especial el espacio Geográfico y sus Recursos. Este permite controlar y evaluar los beneficios y resultados con los ajustes respectivos en el presupuesto de inversión municipal, por parte de la comunidad organizada.
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