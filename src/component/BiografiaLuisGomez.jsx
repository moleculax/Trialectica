// BiografiaLuisGomez.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import SemblanzaLuisGomez from "./SemblanzaLuisGomez.jsx";

export default function BiografiaLuisGomez() {
    return (
        <>
            <Navbar />

            <div className="min-vh-100 bg-white py-5">
                <div className="container px-4 px-md-5">
                    <div className="mx-auto" style={{ maxWidth: "1450px" }}>

                        {/* Título principal */}
                        <header className="text-center mb-5 pt-4">
                            <h1 className="display-5 fw-bold text-primary mb-4">
                                Biografía del Dr. Luis Gómez de la Vega
                            </h1>
                            <hr className="w-50 w-md-25 mx-auto border-primary border-3 opacity-100" />
                        </header>

                        {/* Encabezado con logo */}
                        <div className="text-center mb-5">
                            <img
                                src="/image/lgv123.gif"
                                alt="Luis Gómez de la Vega"
                                className="img-fluid"
                                style={{ maxWidth: "300px", height: "auto" }}
                            />
                        </div>

                        {/* Nota sobre la semblanza */}
                        <div className="alert alert-light border-start border-primary border-5 mb-5">
                            <p className="mb-0 text-end fst-italic text-muted">
                                Sobre el Dr. Luis Gómez de la Vega, puedes leer también la{" "}
                                <a href="#" className="text-primary fw-bold text-decoration-underline">
                                    Semblanza
                                </a>{" "}
                                que escribió Gloria Martínez.
                            </p>
                        </div>

                        {/* Biografía completa - 100% justificada */}
                        <article className="text-justify fs-5 lh-lg">

                            <div className="row align-items-start g-5 mb-5">
                                <div className="col-lg-8 order-lg-1 order-2">
                                    <p>
                                        Este caraqueño, de nombre <strong>Luis Alberto Gómez de la Vega Henao</strong>, nacido en la esquina de <strong>Caja de Agua</strong> (en una vivienda que forma parte actualmente de los terrenos de la sede del Ministerio de Educación), Parroquia de la Pastora, el <strong>22 de junio de 1927</strong>, desde los diez años de edad (<strong>1937</strong>) estuvo condicionado a tomar decisiones propias dado que sus padres vivieron una situación económica difícil, que se agravó con la muerte de su padre.
                                    </p>
                                    <p>
                                        Ya huérfano y con gran esfuerzo hace la secundaria en Bogotá, donde aprovecha a muy corta edad aprender el oficio de <em>topógrafo</em> que será el apoyo fundamental para sus futuras actividades, sobre todo los estudios universitarios en la Facultad de Ingeniería de la Universidad Central de Venezuela, en el área de Agrimensura y Geodesia (<strong>1945 a 1948</strong>).
                                    </p>
                                    <p>
                                        Entre <strong>1948 y 1952</strong>, siendo <em>Preparador</em> en dicha Facultad realizó trabajos de topografía importantes, entre los cuales se encuentra el levantamiento topográfico de los terrenos de la Hacienda Ibarra, destinados a la construcción de la Ciudad Universitaria, y más adelante por concurso hizo el replanteo de las primeras edificaciones que se levantaron en esa área.
                                    </p>
                                </div>
                                <div className="col-lg-4 order-lg-2 order-1 text-center mb-4 mb-lg-0">
                                    <img
                                        src="/image/acordeon.jpg"
                                        alt="Dr. Gómez de la Vega con su acordeón en 1997"
                                        className="img-fluid rounded shadow"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                    <small className="text-muted d-block mt-2">
                                        Dr. Gómez de la Vega con su acordeón en 1997
                                    </small>
                                </div>
                            </div>

                            <p className="mb-4">
                                Como consecuencia del cierre de la Universidad por parte del régimen dictatorial de Pérez Jiménez, dedicó el tiempo sin clases para hacer varios <em>levantamientos de vías, trazado y construcción de carreteras</em> en lugares de difícil acceso. En esta actividad logró altos ingresos y la obtención de propiedades, así como numerosos "amigos" que lo desviaron hacia una vida dedicada en gran medida a los trasnochos y excesos que lo hicieron meditar y tomar una decisión en cuanto a reorientar su vida.
                            </p>

                            <p className="mb-4">
                                Por ello retornó al Estado Táchira donde contrajo <strong>matrimonio</strong> el <strong>02 de agosto de 1952</strong> con Carmen Alicia Mogollón.
                            </p>

                            <p className="mb-5">
                                En la búsqueda de una estabilidad económica para la familia ingresó a trabajar en la <em>Creole Petroleum Corporation</em> (<strong>1953 a 1956</strong>) en el área de carreteras y pavimentación con asfalto. En 1954 elaboró el primer <em>Plano de Carreteras</em> de Venezuela para ser distribuido por la empresa Creole en sus bombas de gasolina.
                            </p>

                            <h2 className="h4 fw-bold text-primary mb-4">
                                Contribuciones Técnicas y Científicas
                            </h2>

                            <p className="mb-4">
                                En <strong>1957</strong>, ya en Venezuela, inició la práctica de la <em>Fotogrametría Terrestre</em> en el país al diseñar y ejecutar la <u>construcción de la Cúpula metálica del Salón Elíptico del Congreso Nacional</u> y así salvar la obra pictórica más importante de Venezuela: el cuadro de la Batalla de Carabobo pintada por Martín Tovar y Tovar (1887-1888).
                            </p>

                            <p className="mb-5">
                                En <strong>1956</strong> inició la construcción de la <em>Carretera Panamericana</em> en el tramo oeste del Estado Mérida, por áreas totalmente vírgenes. Esta obra constituyó un hecho de gran trascendencia en la formación de su personalidad investigativa.
                            </p>

                            {/* Imagen del Escarabajo */}
                            <div className="float-lg-start me-lg-4 mb-4 text-center">
                                <img
                                    src="/image/Escarabajo.JPG"
                                    alt="Barco-draga El Escarabajo anclado en el sur del Lago"
                                    className="img-fluid rounded shadow"
                                    style={{ maxWidth: "280px" }}
                                />
                                <small className="text-muted d-block">
                                    Barco-draga El Escarabajo anclado en el sur del Lago
                                </small>
                            </div>

                            <p className="mb-4">
                                En la Hacienda Los Gavilanes desarrolló sus actividades de ingeniería junto con la agricultura, la ganadería de raza y la explotación maderera desde <strong>1949 hasta 1958</strong>. Tras el derrocamiento de la dictadura (<strong>23 de enero de 1958</strong>), y como consecuencia del proceso de análisis de la realidad, el <strong>21 de septiembre de 1959</strong> surgió el documento llamado el <u>Movimiento Comunero</u>, el cual dictó una apertura social y una <u>Filosofía Integralista</u> que estará presente en todas sus obras posteriores.
                            </p>

                            <p className="mb-5">
                                Como resultado de tantas inquietudes decidió cambiar la razón de su vida para dedicarse a definir lo que será más adelante una de las amplias y coherentes teorías para una nueva civilización: la <u>Teoría General de Integración de Sistemas Sociales</u>, así como el inicio de su aspecto metodológico (la <u>Trialéctica</u>), reflejado en su libro <a href="#" className="text-primary">El Gran Esquema</a>, publicado en <strong>1967</strong>.
                            </p>

                            <h2 className="h4 fw-bold text-primary mb-4">
                                Legado y Visión Universal
                            </h2>

                            <p className="mb-4">
                                A partir de <strong>1998</strong> comienza un nuevo ciclo al plantearse la misión de llevar a todas las naciones del mundo este nuevo paradigma, que puede lograr —por que así lo requiere la crisis actual— el logro de una mejor calidad de vida para la humanidad sin diferencias sociales, económicas, políticas o culturales.
                            </p>

                            <div className="bg-light rounded-4 p-5 shadow-sm mt-5">
                                <p className="lead fst-italic text-primary text-center mb-0">
                                    Ha nacido la Universidad Virtual como producto lógico, progresivo, abierto y acelerable de la Filosofía Integralista, de la Teoría de Integración de Sistemas Sociales y de la Metodología Compleja, y en síntesis de la Trialéctica "de Venezuela para el Mundo".
                                </p>
                            </div>

                            <p className="mt-5 text-center fst-italic text-muted">
                                El próximo tercer milenio no es otra cosa que un proceso de cambio continuo y acelerado de una nueva Época, de una nueva Era de valores y de una nueva Edad tecnológica que va directamente dirigida hacia el Universo.
                            </p>

                        </article>
                    </div>
                </div>
            </div>

            {/* Garantiza texto justificado perfecto */}
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