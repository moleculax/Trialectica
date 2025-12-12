// AspectosConceptuales.jsx → TEXTO 100% JUSTIFICADO + 100% RESPONSIVE
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function AspectosConceptuales() {
    return (
        <>
            <Navbar />

            {/* Fondo blanco */}
            <div className="min-vh-100 bg-white py-5">

                <div className="container px-4 px-md-5 shadow">
                    <div className="mx-auto" style={{ maxWidth: "900px" }}>

                        {/* Título */}
                        <header className="text-center mb-5 pt-3">
                            <h1 className="display-5 fw-bold text-primary mb-4">
                                Aspectos Conceptuales de la Sala Técnica: Introducción
                            </h1>
                            <hr className="w-50 w-md-25 mx-auto border-primary border-3 opacity-100" />
                        </header>

                        {/* TODOS los párrafos están 100% justificados */}
                        <article className="fs-5 lh-lg">

                            {/* Imagen derecha (escritorio) / arriba (móvil) */}

                            <div className="col-lg-5 order-lg-2 order-1 text-center mb-4 mb-lg-0">
                                <img
                                    src="/image/sistemas integrados.gif"
                                    alt="Sistemas Integrados"
                                    className="img-fluid rounded shadow-sm border"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>
                            <div className=" mb-5 align-items-start">




                                    <p className="text-justify mb-4">
                                        La <strong>Metodología Compleja</strong>, también llamada <strong>Trialéctica</strong>, constituye una herramienta de trabajo utilizable en cualquier tipo de actividad que realice el hombre, tal como sucede con algún otro método operativo (Planificación, Administración, Control, Investigación, Evaluación, Producción etc.). La metodología compleja es integralista, porque deriva de una teoría universal que tiende a explicar la <strong>realidad</strong> como un todo. Es decir, que incluye al hombre, pero considerando, además, todo lo infinitamente grande (el cosmos) como lo infinitamente pequeño (el microcosmo).
                                    </p>
                                    <p className="text-justify mb-4">
                                        La metodología compleja se rige por leyes universales, aplicables tanto a los seres vivos como a la materia inorgánica. Esas leyes están agrupadas en la sistemática (ciencia de la clasificación). Por su alcance se puede considerar a la metodología compleja como un <strong>“Sistema de Sistemas”</strong>, o sea un sistema integrado que comparte algunas coincidencias con la teoría de sistemas, la teoría de la información, la teoría administrativa y la teoría del conocimiento.
                                    </p>


                            </div>

                            <p className="text-justify mb-4">
                                En efecto, al incursionar en la <strong>“tecnología conceptual”</strong>, permite analizar metodológicamente los “conceptos” utilizados en todo proceso, así como la inclusión de la energía y la información como dos hechos que se dan en forma simultánea en esos mismos procesos, conjuntamente con el tiempo y el espacio.
                            </p>

                            <p className="text-justify mb-5">
                                La metodología compleja tiene como basamento filosófico y doctrinario la evaluación continua que facilita mejorar y optimizar los procesos para incrementar la calidad de vida del hombre como ser social. Ello permite atacar la tendencia al desorden, a la entropía y al caos que en forma acelerada se observa en nuestro devenir histórico de hoy.
                            </p>

                            <h2 className="h4 fw-bold text-primary text-center mb-4">
                                Representación gráfica del modelo metodológico:
                            </h2>
                            <div className="col-lg-5 text-center">
                                <img
                                    src="/image/esfera.gif"
                                    alt="Esfera Trialéctica"
                                    className="img-fluid rounded shadow-sm border"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>
                            <div className=" g-5 mb-5 align-items-start">

                                    <p className="text-justify mb-4">
                                        La metodología compleja es una herramienta de trabajo que permite planificar, ejecutar, controlar, evaluar y ajustar todo proceso. Para ello debe tener definido un objetivo o meta por alcanzar, por lo que surge una tendencia en el tiempo y el espacio hacia ese logro.
                                    </p>
                                    <p className="text-justify mb-4">
                                        Usando la metodología compleja, todo proceso es representable gráficamente, porque existe una sistemática de referencia lógico-geométrica-matemática. El tiempo se representa con una flecha orientada hacia el objetivo, ubicada en un espacio tridimensional con tres planos dentro de una esfera.
                                    </p>


                            </div>

                            <div className="text-center my-5">
                                <img
                                    src="/image/esquema.gif"
                                    alt="Esquema del cono"
                                    className="img-fluid rounded shadow"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>

                            <p className="text-justify mb-4">
                                De acuerdo a una ley fundamental de la sistemática, todo proceso natural tiende a ampliar su información y lograr mejores resultados mediante la optimización de recursos, logrando la <strong>“eficiencia por sistema”</strong>. Gráficamente se representa como un cono en expansión generado por la acumulación de <strong>energía-información</strong>.
                            </p>

                            <div className="text-center my-5">
                                <img
                                    src="/image/dinamicas.gif"
                                    alt="Dinámicas sociopolítica y socioeconómica"
                                    className="img-fluid rounded shadow-sm border"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>

                            <p className="text-justify mb-5">
                                Las tres transferencias descritas producen <strong>síntesis social</strong>. La metodología compleja, también llamada <strong>Trialéctica</strong>, se presenta como una envolvente gnoseológica superior a la dialéctica tradicional.
                            </p>

                            {/* Resumen final */}
                            <div className="bg-light rounded-4 p-5 shadow-sm">
                                <p className="text-justify lead fw-bold fst-italic text-primary mb-0">
                                    En resumen: todo proceso se representa como un cono en revolución con tendencia expansiva, generado por dos transferencias contrarias en espiral (saber y hacer) que derivan una tercera relación sintética.
                                </p>
                            </div>

                        </article>
                        <div style={{height: "100px"}}>


                        </div>
                    </div>
                </div>
            </div>

            {/* CSS adicional para garantizar justificado perfecto en todos los navegadores */}
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