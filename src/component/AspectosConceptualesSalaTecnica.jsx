// AspectosConceptualesSalaTecnica.jsx → 100% RESPONSIVE + TEXTO JUSTIFICADO
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function AspectosConceptualesSalaTecnica() {
    return (
        <>
            <Navbar />

            <div className="min-vh-100 bg-white py-5">
                <div className="container px-4 px-md-5 shadow">
                    <div className="mx-auto" style={{ maxWidth: "900px" }}>

                        {/* Título principal */}
                        <header className="text-center mb-5 pt-3">
                            <h1 className="display-5 fw-bold text-primary mb-4">
                                Aspectos Conceptuales de la Sala Técnica
                            </h1>
                            <hr className="w-50 w-md-25 mx-auto border-primary border-3 opacity-100" />
                        </header>

                        {/* Todo el contenido con texto 100% justificado */}
                        <article className="fs-5 lh-lg text-justify">



                            {/* Imagen principal */}
                            <div className="text-center my-5">
                                <img
                                    src="/image/elementos.gif"
                                    alt="Elementos de la gestión integrada"
                                    className="img-fluid rounded shadow"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>

                            <p className="mb-4">
                                En la base de todo proceso para la gestión del desarrollo integrado, debe darse respuesta a los elementos factores siguientes:
                            </p>

                            <ul className="list-group list-group-flush mb-5">
                                <li className="list-group-item"><strong>¿Por qué?</strong> o sea la razón de lo que se requiere obtener en el futuro (causa u objetivos).</li>
                                <li className="list-group-item"><strong>¿Dónde?</strong> que define el recurso espacial, el lugar en el cual se obtendrá el resultado.</li>
                                <li className="list-group-item"><strong>¿Cuándo?</strong> o sea el recurso tiempo, lapso en el cual se operará y la posible fecha de conclusión y seguimiento.</li>
                                <li className="list-group-item"><strong>¿Con quién?</strong> es decir el recurso humano, el personal que opera la organización y las personas de fuera que permitirán o recibirán el producto del resultado.</li>
                                <li className="list-group-item"><strong>¿Con qué?</strong> referido a los otros recursos con que se cuenta y/o se deberá disponer para lograr el objetivo, o sea recursos materiales, técnicos, financieros, equipo etc.</li>
                                <li className="list-group-item"><strong>¿Para qué?</strong> es decir, cual sería el resultado concreto obtenido o por obtener.</li>
                                <li className="list-group-item"><strong>¿Cómo?</strong> o sea la forma de proceder para obtener un resultado deseado, en forma eficiente, por medio de la expansión por la buena utilización y optimización de los recursos.</li>
                            </ul>

                            <p className="mb-4">
                                El conjunto de los elementos factores correspondientes al <strong>¿Dónde?, ¿Cuándo?, ¿Con quién? y ¿Con qué?</strong> se consideran como referencias conceptuales de los sistemas <strong>RDR (Recursos y Dimensiones Relacionados)</strong>. Son sistemas RDR por cuanto pueden ser igualmente utilizados como recursos (R), en el caso de planificar las acciones futuras (prospección), o como dimensión (D), en el caso de evaluar lo realizado en el pasado (retrospección), por lo que se dice que son dimensiones relacionadas (R). Representan los elementos factores en su conjunto: el <em>cómo sistémico</em>.
                            </p>

                            <p className="mb-4">
                                Como en todo proceso teleológico, es decir cuando el hombre actúa en función de lograr un objetivo o meta específica, requiere efectuarse en un lugar o en un tiempo determinado, a éstos se les considera como el <strong>continente</strong> y a los otros recursos necesarios para alcanzar el objetivo o meta se les considera como el <strong>contenido</strong>; constituyendo esos tres aspectos otra de las tríadas importantes del método.
                            </p>

                            <p className="mb-5">
                                En toda actividad determinada que se realiza para obtener una meta, se requiere un análisis previo (etapa de la planificación) y luego una acción operativa que permite ese logro, esto es lo que denominamos <strong>Guía Operativa</strong>. Es en esta etapa donde a plenitud se manifiestan la energía-información como el contenido del proceso.
                            </p>

                            <h2 className="h4 fw-bold text-primary mb-4">Información y Energía en la Sala Técnica</h2>

                            <p className="mb-4">
                                Se definen organigramas (O), funciogramas (F) y flujogramas (1), con un <strong>Archivo Central Inteligente (A)</strong> que recibe, clasifica y procesa toda la información. Este archivo permite inteligencia operativa: programar, controlar, evaluar y ajustar en tiempo real.
                            </p>

                            <p className="mb-5">
                                La etapa de <strong>Control y Evaluación Continua (CEC)</strong> permite detectar desviaciones y realizar ajustes inmediatos para garantizar el logro de metas con los recursos disponibles.
                            </p>

                            {/* Imagen del esquema de la sala */}
                            <div className="text-center my-5">
                                <img
                                    src="/image/esquema-sala.gif"
                                    alt="Esquema de la Sala Técnica"
                                    className="img-fluid rounded shadow"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>

                            <h2 className="h4 fw-bold text-primary mb-4">El Código Trialectográfico</h2>

                            <p className="mb-4">
                                Todos los subsistemas se codifican numéricamente:
                            </p>
                            <ul className="mb-5">
                                <li><strong>1a</strong> → Objetivos</li>
                                <li><strong>2</strong> → Territorio</li>
                                <li><strong>3</strong> → Tiempo</li>
                                <li><strong>4</strong> → Organigrama</li>
                                <li><strong>5</strong> → Funciograma</li>
                                <li><strong>6</strong> → Flujograma y procedimientos</li>
                                <li><strong>7</strong> → Archivo Central</li>
                                <li><strong>8</strong> → Presupuesto funcional</li>
                                <li><strong>9</strong> → Presupuesto conceptual</li>
                                <li><strong>10</strong> → Control y Evaluación Continua</li>
                                <li><strong>1b</strong> → Resultados</li>
                            </ul>

                            <p className="mb-5">
                                Este código universal permite compatibilidad total entre instituciones públicas, privadas, locales, regionales o nacionales. Facilita el procesamiento electrónico masivo y la generación de información <strong>Útil, Completa y Oportuna (UCO)</strong>.
                            </p>

                            {/* Escala cromática */}
                            <div className="row align-items-center g-5 mb-5">
                                <div className="col-lg-8">
                                    <h2 className="h4 fw-bold text-primary mb-3">Código Cromático (Escala cromática)</h2>
                                    <p>
                                        Cada código tiene un color asociado del blanco (inicio) al negro (saturación y logro). Las transferencias sociopolíticas usan tonos fríos (verde, azul, morado) y las socioeconómicas tonos cálidos (anaranjado, rojo, marrón).
                                    </p>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <img
                                        src="/image/cromatica.gif"
                                        alt="Escala cromática trialéctica"
                                        className="img-fluid rounded shadow"
                                    />
                                </div>
                            </div>

                            <div style={{height: "100px"}}>


                            </div>

                        </article>
                    </div>
                </div>
            </div>

            {/* Garantiza justificado perfecto en todos los navegadores */}
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