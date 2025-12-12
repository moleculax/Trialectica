// DefinicionTrialectica.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function DefinicionTrialectica() {
    return (
        <>
            <Navbar />

            <div className="min-vh-100 bg-white py-4 py-md-5">
                <div className="container px-3 px-md-5 shadow">
                    <div className="mx-auto " style={{ maxWidth: "900px" }}>

                        {/* Título principal */}
                        <header className="text-center mb-5 pt-4">
                            <h1 className="fw-bold text-primary mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                                ¿Qué es la Trialéctica?
                            </h1>

                            <p
                                className="lead text-muted"
                                style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}
                            >
                                Definición elaborada por antiguos miembros del<br />
                                <strong>Instituto de Investigaciones Integradas</strong>
                            </p>

                            <hr className="mx-auto border-primary border-3 opacity-100"
                                style={{ width: "clamp(120px, 40%, 260px)" }}
                            />
                        </header>

                        {/* Definición principal */}
                        <article
                            className="fs-5 lh-lg text-justify"
                            style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}
                        >

                            <p className="mb-5">
                                Es una <strong>concepción filosófica, científica y técnica</strong> para impulsar el desarrollo integral y maximizar la calidad de vida, que surgió como resultado de un largo proceso de investigación social realizado por el filósofo, agrimensor y abogado <strong>Luís Gómez de la Vega (1927-2007)</strong>, a través del <em>Instituto de Investigaciones Integradas</em>, y que dio a conocer por primera vez en Venezuela en 1967 con una propuesta impresa titulada <strong><em>El Gran Esquema</em></strong>.
                            </p>

                            <div className="bg-light rounded-4 p-4 p-md-5 shadow-sm border-start border-primary border-5 mb-5">
                                <p className="mb-4 fst-italic">
                                    La <strong>Trialéctica</strong>, conocida también como <strong>Metodología Compleja</strong>, se fundamenta:
                                </p>
                                <p className="mb-0">
                                    “En un modelo lógico/matemático, que partiendo de la concepción más abstracta interrelaciona sistémicamente todos y cada uno de los aspectos en los cuales subdividimos el quehacer existencial (nuestra vida en el mundo), estableciendo holística y funcionalmente la conjunción entre <strong>espacio/tiempo</strong>; <strong>energía/información</strong> y <strong>causa/efecto</strong>: <strong>Sistemas de Recursos Dimensionables y Relacionados (Los RDR)</strong>, que responden a las preguntas que nos hacemos en el devenir, convertidas en <strong>Elementos Factores</strong>. Todo para dar explicación a lo abstracto conceptual: <em>espacio/tiempo</em> (dónde y cuándo); <em>energía/información</em> (los con quiénes y los con qué) y <em>causa/efecto</em> (por qué y para qué), que al ser diferenciados (cualitativamente), desagregados (cuantitativamente) e integrados (holísticamente) nuevamente en el <strong>Cómo Metodológico</strong>, indefectiblemente dan respuestas a la problemática existencial, en la búsqueda de la verdad, la realidad y la justicia. Soportados siempre en el marco referente de la <strong>Filosofía Integralista</strong>.”
                                </p>
                            </div>

                            <p className="mb-4">
                                La <strong>Teoría del Conocimiento Trialéctico</strong> es la envolvente del método trialéctico que exige que, para que haya síntesis, es existencial la <strong>triple relación</strong> de los macro sistemas antes señalados.
                            </p>

                            <p className="mb-4">
                                Para la Trialéctica la naturaleza se constituye en una <strong>trilogía existencial</strong> que abarca el <strong>Ser</strong>, el <strong>Poseer</strong> y el <strong>Poder</strong>, que están consustanciados en la igualdad teleológica de los órdenes sociales representados, a nivel nacional, por el individuo, la familia, el vecindario (la aldea en las áreas rurales), la parroquia, el municipio, el estado, las regiones y el país.
                            </p>

                            <p className="mb-5">
                                Para el análisis de la problemática social, económica, política y cultural de los órdenes sociales, se hace uso de la <strong>sectorización</strong> que se compagina con cada una de estas áreas y se enfatiza en la <strong>concepción holística</strong> que imprime un método que da relevancia a la <strong>interdisciplinariedad</strong>. En el campo jurídico se propicia la subordinación a los principios constitucionales y el apego a la legalidad.
                            </p>

                            <div className="bg-primary text-white rounded-4 p-4 p-md-5 shadow-lg mb-5">
                                <h2 className="h4 fw-bold mb-4 text-center">
                                    Herramientas y Aplicación Práctica
                                </h2>
                                <p className="mb-0 text-center">
                                    Las <strong>técnicas y pasos metodológicos</strong>, herramientas propias desarrolladas por el Instituto de Investigaciones Integradas para la Metodología Compleja, a fin de atender, examinar y ejecutar las acciones pertinentes a cada caso en particular, facilitan el seguimiento a través de la <strong>Sala de Control de Gestión</strong>, que incluye la planificación, evaluación y ajuste para asegurar el cumplimiento de las tareas pertinentes.
                                </p>
                            </div>

                            {/* Imagen final centrada y responsive */}
                            <div className="text-center mt-5">
                                <p className="fs-4 fw-bold text-primary" style={{ fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}>
                                    Trialéctica: un modelo venezolano para el desarrollo integral con justicia social
                                </p>
                                <p className="text-muted fst-italic d-flex justify-content-center">
                                    <img
                                        src="/image/vmundo.gif"
                                        alt="Venezuela para el mundo"
                                        className="img-fluid me-2"

                                    />
                                </p>
                            </div>
                            <div style={{height: "150px"}}></div>

                        </article>
                    </div>
                </div>
            </div>

            {/* Justificado perfecto */}
            <style jsx global>{`
                .text-justify {
                    text-align: justify !important;
                    text-justify: inter-word;
                }
            `}</style>

            <Footer />
        </>
    );
}
