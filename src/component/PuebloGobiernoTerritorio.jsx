// PuebloGobiernoTerritorio.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PuebloGobiernoTerritorio() {


    const justifyStyle = { textAlign: "justify" };

    return (
        <>
        <Navbar/>


        <div className="min-vh-100 bg-white">
            <div className="container py-5 px-4">
                <div className="mx-auto" style={{ maxWidth: "1450px" }}>

                    {/* Título principal */}
                    <header className="text-center mb-5">
                        <h1 className="display-5 fw-bold text-primary mb-3">
                            Pueblo • Gobierno • Territorio
                        </h1>
                        <p className="lead text-muted">
                            Filosofía de la Planificación Participativa y Protagónica
                        </p>
                        <hr className="w-25 mx-auto border-primary border-2 opacity-100" />
                    </header>

                    {/* Contenido principal – 95% del ancho */}
                    <main style={{ maxWidth: "95%", margin: "0 auto" }}>

                        {/* Sección Filosofía */}
                        <section className="mb-5">
                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                En este expresivo ciclo cognoscitivo, encontramos la clara inserción de la “realidad”, cuya atención no debemos soslayar ni aplazar; es justamente esta propuesta la que hace posible producir el conocimiento consistente y orgánico, que proyectará con certeza las diversas e infinitas relaciones entre la <span className="text-primary fw-bold">POBLACIÓN ORGANIZADA</span>, <span className="text-primary fw-bold">GOBIERNO</span> y <span className="text-primary fw-bold">TERRITORIO</span>, y devolverá a la historia la palabra y el aliento de cambio e integración continua, para que cada orden social (individuo, familia, área vecinal, parroquia, municipio, estado y país) se convierta en sujeto de su propio destino y participe en la planificación estratégica de la libertad y liberación de la gestión integral del bien común.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                Si este contenido lo plasmáramos en un texto legal, no tendríamos otra norma que no fuera la actual y vigente, por lo menos en Venezuela: la Ley de los Consejos Locales de Planificación Pública.
                            </p>

                            <div className="text-center my-5">
                                <img src="/image/flujo2.gif" alt="Flujo cognoscitivo 2" className="img-fluid" style={{ maxWidth: "420px" }} />
                            </div>
                            <div className="text-center my-5">
                                <img src="/image/flujo1.gif" alt="Flujo cognoscitivo 1" className="img-fluid" style={{ maxWidth: "400px" }} />
                            </div>
                        </section>

                        <hr className="my-5 border-secondary" />

                        {/* Sección Ley CLPP */}
                        <section className="mb-5">
                            <h2 className="h3 fw-bold text-primary mb-4">
                                Ley de los Consejos Locales de Planificación Pública
                            </h2>

                            <div className="row mb-5">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <small className="text-muted text-uppercase d-block">Fecha de promulgación</small>
                                    <p className="fs-4 fw-bold text-primary mb-0">12 de junio de 2002</p>
                                </div>
                                <div className="col-md-6">
                                    <small className="text-muted text-uppercase d-block">Objetivo principal</small>
                                    <p className="fs-5 fw-semibold">Desarrollo integral, progresivo y permanente</p>
                                </div>
                            </div>

                            <h3 className="h5 fw-bold mt-5 mb-3">¿Qué es el Consejo Local de Planificación Pública?</h3>
                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                Es la estructura u órgano encargado de la planificación integral pública del gobierno local, con participación plena de la comunidad organizada, a fin de asegurar el desarrollo social, económico y cultural, aumentando la capacidad de generar ingresos fiscales propios.
                            </p>

                            <h3 className="h5 fw-bold mt-4 mb-3">Funciones asignadas por la Ley</h3>
                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                La Ley asigna <strong>22 funciones prácticas</strong> al Consejo Local de Planificación Pública, con el propósito de aumentar la calidad de vida de los habitantes en un espacio territorial sustentable.
                            </p>

                            <h3 className="h5 fw-bold mt-4 mb-3">Mecanismo de ejecución</h3>
                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                Integrando los recursos inteligentemente, a través de la <strong className="text-primary">Sala Técnica</strong>.
                            </p>

                            <h3 className="h5 fw-bold mt-5 mb-3">
                                Requerimientos para activar la planificación, ejecución, control y evaluación pública
                            </h3>
                            <ul className="list-unstyled fs-5">
                                {[
                                    "Constituir el Consejo Local de Planificación Pública.",
                                    "El Gobierno Municipal debe integrarse con la comunidad organizada.",
                                    "El pueblo debe transformarse en comunidad organizada.",
                                    "La comunidad organizada se incorpora a la participación protagónica.",
                                    "Integración del Gobierno Municipal, la comunidad organizada y el territorio municipal.",
                                    "Comunicación e información entre Gobierno Local, Regional, Nacional y otros entes institucionales.",
                                    "Sistema de información e inteligencia social."
                                ].map((item, index) => (
                                    <li key={index} className="mb-3 d-flex">
                                        <span className="text-primary me-3 fw-bold">•</span>
                                        <span style={{ textAlign: "justify", flex: 1 }}>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="fs-5 lh-lg mt-5 fst-italic text-primary" style={justifyStyle}>
                                El Consejo Local de Planificación Pública es la figura que permite generar estrategias sobre administración, finanzas y presupuesto, para lograr el incremento máximo de los ingresos fiscales propios.
                            </p>
                        </section>

                        {/* NUEVA SECCIÓN: Catastro Integral */}
                        <hr className="my-5 border-secondary" />

                        <section className="mb-5">
                            <h2 className="h3 fw-bold text-primary mb-4">
                                Catastro Integral
                            </h2>

                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                La presencia urgente y necesaria de ejercer un control y desarrollo multidimensional de su espacio geográfico y de los recursos que muestran las dinámicas de la realidad cambiante, le ha dado a la disciplina catastral una orientación de mayor profundidad y complejidad, transformándola así en un paradigma cuyo enfoque responde a órdenes socioeconómicos, sociopolíticos y socioculturales. Es con esta tendencia moderna y tecnología de punta, que nos lleva a nuevas dimensiones que sustentan las bases socioterritoriales y político-administrativas del principio trascendente de Municipio Inteligente.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                La concepción Integral del Catastro tiene como requisito previo las etapas de “Organización, Información e inteligencia”, para poder visualizar al Municipio como la estructura funcional estable que permite mantener por sistemas el mejoramiento continuo de la relación Pueblo, Territorio con todos sus recursos y el Gobierno. Es así como se evidencia la integración de los Sistemas Sociales advirtiendo que no existen como sistemas aislados, así como no puede existir una visión desagregada de la realidad Municipal, lo cual reafirma que la expresión Catastro Integral expone la totalidad con todas sus partes: individuo, la familia, Área vecinal, Municipio, Estado y País.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                Sobre esta configuración temática se puede concluir que el Catastro Integral se constituye en una necesidad social que no tiene rechazo posible dentro de una planificación de la ciudad moderna, cuyo vector resultante adquiere la jerarquía de convertirse en un servicio público de múltiples objetivos. Lo más importante de esta visión integral, lograda con la tecnología adecuada, es su bajo costo y el escaso tiempo en que se ejecuta. Existiendo además la posibilidad óptima de reconocer y comprender en tiempo real los procesos y patrones de organización, jerarquía, distribución e interacción de la estructura social e inmobiliaria, para así ejercer el dominio del espacio social, Físico, Jurídico y Económico Fiscal.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                El dominio esbozado en el párrafo anterior no trata del espacio como recurso, sino además como lo que es: un sistema que integra al tiempo, a sus gentes y a sus dirigentes.
                            </p>

                            <h3 className="h5 fw-bold text-primary mt-5 mb-3">
                                Enfoque Sistémico del Catastro Integral
                            </h3>

                            <p className="fs-5 lh-lg" style={justifyStyle}>
                                La acción humana individualizada en extremo se ha concebido tradicionalmente como algo totalmente separado de su propia causa y efecto, apartada totalmente de la realidad social, política y económica, tanto en el espacio como en el tiempo. Esto nos ha conducido a permanecer bajo un orden de separatividad para con nuestra condición biosicosocial y nuestro entorno biológico natural y biogeofísico, ya que las ciencias interdisciplinarias aún no han sido desarrolladas suficientemente y la filosofía política ha permanecido dentro de esquemas inerciales de poco dinamismo.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                El enfoque sistémico del “CATASTRO INTEGRAL” promete transformar nuestra noción de relación, es decir, presagia una revolución sobre la percepción de cómo se relacionan los seres humanos, de cómo sus objetivos, procesos, actividades o eventos y productos se encuentran tan integralmente eslabonados e interconectados tanto en ESPACIO como en tiempo, en donde cada acción y su posible efecto se comportan como un conjunto de múltiples contenidos de energía e información. Estos se constituyen como un todo organizado e integrado, cuyas definiciones, principios y reglas operativas evidencian y advierten que la “realidad” no puede ser entendida aisladamente. Se exige un profundo cambio en nuestros estándares de percibir, procesar e interpretar la constelación de nuestro entorno GEOgráfico, GEOpolítico y GEOeconómico. Es en este sentido en el que actualmente se trabaja el Catastro Integral como un sistema Pentadimensional, en el que los mapas expresan no solo cartografía digital sino las necesidades sentidas y las capacidades ofertables de las comunidades organizadas.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                Por consiguiente, el “enfoque sistémico” propone la unidad y relación entre gobierno, población organizada y territorio, en función de lograr el cambio continuo y acelerado de nuestra causa u objetivo hacia la obtención de un efecto exitoso y trascendente, a través de la generación y transferencia de flujos de energía e información útil humana, completa y oportuna, al proceso de desarrollo estratégico en el ESPACIO y el tiempo.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                En todos los casos, la propuesta de mayor relevancia deduce que el enfoque sistémico del “CATASTRO INTEGRAL” permite leer, comprender e interpretar con certeza nuestra verdad existencial global como un conjunto infinito de relaciones que responden a una disposición real según síntesis universal, que propicia la difusión y expansión de una conciencia integral en todo escenario espacio-temporal.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                Este “enfoque sistémico” insertado en las recíprocas e integradas relaciones de cambio continuo y acelerado con la tecnología (GEOtecnología – Tecnología de la información GEOespacial) y la triple relación o “relación de relaciones” entre GOBIERNO, POBLACIÓN ORGANIZADA y TERRITORIO, abre un vigoroso impulso filosófico y científico hacia un nuevo ordenamiento territorial. En este juega un papel científico importante y trascendente el “enfoque sectorial y jurisdiccional interactivo” continental de espacio-tiempo, de los cuales observamos efectos indiscutibles como son la globalización de la economía, las redes abiertas de telecomunicación, la descentralización administrativa, la desconcentración programática y la multiplicidad de convenios y asociaciones internacionales.
                            </p>

                            <p className="fs-5 lh-lg mt-4" style={justifyStyle}>
                                Se impone a corto plazo la organicidad e integración sectorial de Ciudades y Municipios a todo lo largo de los diversos continentes. Con el advenimiento del tercer milenio surgen las transferencias entre mapas que van de dos dimensiones hasta cinco: 2D, 3D, 4D, 5D.
                            </p>

                        </section>




                        {/* Autor */}

                    </main>
                </div>
            </div>
        </div>


            <Footer/>
        </>
    );
}