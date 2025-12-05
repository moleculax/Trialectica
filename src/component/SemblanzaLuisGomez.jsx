// SemblanzaLuisGomez.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function SemblanzaLuisGomez() {
    return (
        <>
            <Navbar />

            <div className="min-vh-100 bg-white py-5">
                <div className="container px-4 px-md-5">
                    <div className="mx-auto" style={{ maxWidth: "1450px" }}>

                        {/* Título principal */}
                        <header className="text-center mb-5 pt-4">
                            <h1 className="display-5 fw-bold text-primary mb-3">
                                Semblanza de Luis Gómez de la Vega
                            </h1>
                            <h2 className="h4 text-secondary fst-italic">
                                Por Gloria Martínez
                            </h2>
                            <hr className="w-50 w-md-25 mx-auto border-primary border-3 opacity-100 mt-4" />
                        </header>

                        {/* Foto principal */}
                        <div className="text-center mb-5">
                            <img
                                src="/image/LGV (2006-11-18).jpg"
                                alt="Dr. Luis Gómez de la Vega (2006)"
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ maxWidth: "340px", border: "8px solid #f8f9fa" }}
                            />
                            <p className="text-muted mt-3 fst-italic">
                                Dr. Luis Gómez de la Vega (1927–2007)
                            </p>
                        </div>

                        {/* Todo el texto justificado */}
                        <article className="text-justify fs-5 lh-lg lead">

                            <p className="mb-4">
                                Cuando en el año 1982 conocí a Luís Gómez de la Vega (1927-2007), nunca imaginé que en esos momentos estaba ante un <strong>genio</strong>. Mi percepción más bien era la de encontrarme ante un ser sumamente evolucionado desde el punto de vista espiritual. La placidez de aquellos ojos tan azules como el infinito, cuando me miró, me trasladaron a otro espacio, a otro tiempo. Quizás un compromiso establecido en otra dimensión.
                            </p>

                            <p className="mb-4">
                                Los años a su lado dejaron atrás el santo, pero el genio quedó. Sí… un genio en el cual se establecía una simbiosis de carácter integrado en una personalidad que no solamente se traslucía en el magnetismo que carismáticamente ejercía sobre quienes estaban a su alrededor cuando desglosaba “su modelo”, sino también en su gran talento, su facultad creadora y el insoslayable deseo permanentemente presente en la búsqueda de un mundo mejor.
                            </p>

                            <p className="mb-5">
                                Un individuo que a través de la profundidad de sus planteamientos, su hacer diario en concurrencia con su decir, sistemáticamente nos transfería una forma de vivir en la cual el propósito era lograr que “los chiquiticos”, como él les decía (a los que menos poseían), pudieran <strong>“elevar su nivel de calidad de vida”</strong>.
                            </p>

                            <h2 className="h4 fw-bold text-primary mb-4 text-center">
                                El Modelo Integralista y la Trialéctica
                            </h2>

                            <p className="mb-4">
                                Lo exponencial de su método estaba en la génesis de un modelo lógico/matemático que partiendo de la concepción más abstracta, interrelacionaba sistémicamente todos y cada uno de los aspectos en los cuales subdividimos el quehacer existencial, estableciendo holística y funcionalmente la conjunción entre <strong>espacio/tiempo</strong>, <strong>energía/información</strong> y <strong>causa/efecto</strong>: los <strong>Sistemas de Recursos Dimensionables y Relacionados (RDR)</strong>.
                            </p>

                            <p className="mb-4">
                                De acuerdo a su teoría, es imposible planificar sin tomar en cuenta el todo universal. Y para ello, Luís Gómez de la Vega desgranó como al trigo en flor la <strong>Metodología Compleja</strong>, que con el correr de los años dio paso a la <strong>Sistemática de la Interdisciplinariedad o Trialéctica</strong>.
                            </p>

                            <p className="mb-5">
                                En sus casi 80 años, nunca dejó de pensar en lo mismo, intelectual y operativamente. Producía diaria y permanentemente en función de ir cerrando, ajustando y perfeccionando el modelo. La derivada matemática en la cual explicaba el incremento de la información y la energía en el <strong>Conoide Lugoviano</strong> era él, era el otro, éramos todos.
                            </p>

                            <div className="row align-items-center g-5 my-5">
                                <div className="col-lg-8 order-lg-1 order-2">
                                    <p className="mb-4">
                                        En cada vuelta existencial en ese eje temporo-espacial, donde “la mente brillante” se desenvolvía, producía una nueva teoría, pero siempre apoyada en el soporte filosófico y científico desarrollado. Y para darle fundamento epistemológico, le dio vida a la <strong>Teoría del Conocimiento Trialéctico</strong>.
                                    </p>
                                    <p>
                                        Desde la óptica de esta teoría, no es solamente del sujeto la aprehensión del conocimiento ante el objeto; como tampoco lo es del objeto ante el sujeto. Es la <strong>relación trial</strong> entre ellos de la cual derivamos el conocimiento.
                                    </p>
                                </div>
                                <div className="col-lg-4 order-lg-2 order-1 text-center">
                                    <img
                                        src="/image/SIO Chiguara - 1985.jpg"
                                        alt="Sala de Inteligencia Operativa - Chiguará, 1985"
                                        className="img-fluid rounded-4 shadow"
                                    />
                                    <small className="text-muted d-block mt-2">
                                        Primera Sala de Inteligencia Operativa - Chiguará, 1985
                                    </small>
                                </div>
                            </div>

                            <h2 className="h4 fw-bold text-primary mb-4 text-center">
                                La Utopía del Concreto Real
                            </h2>

                            <p className="mb-4">
                                Veinticinco años de trabajo social a nivel nacional, sin compromisos políticos/partidistas, con recursos propios, los miembros del <strong>Instituto de Investigaciones Integradas</strong>, dirigidos por el Dr. Luís Gómez de la Vega, nos entregamos desinteresadamente en la búsqueda de la <strong>“Utopía del Concreto Real”</strong> que dejó de serlo cuando constituimos en Venezuela casi un centenar de <strong>Fundaciones para el Desarrollo Integral</strong>.
                            </p>

                            <p className="mb-5">
                                El <strong>Catastro Integral</strong> (Físico, Social, Jurídico y Económico Fiscal), los Censos Autogestionados, los Seminarios Intersectoriales, la activación socioeconómica a través de Planes, Proyectos y Programas (PPP) eran lo que determinaba el <strong>Plan de Acción</strong> — un verdadero plan conformado, estructurado y realizado por el Pueblo en el Territorio y con su Gobierno.
                            </p>

                            <blockquote className="bg-light rounded-4 p-5 shadow-sm border-start border-primary border-5 my-5">
                                <p className="lead fst-italic text-primary text-center mb-0">
                                    “De Venezuela para el mundo” — como bautizó el Dr. Juan Felipe Manzanares sus textos acerca de La Teoría del Conocimiento Trialéctico.
                                </p>
                            </blockquote>

                            <p className="mb-5">
                                En esta primera década del siglo XXI, ya avizoraba en el actual acontecer el proceso de cambio acelerado y continuo de una nueva Época, de una nueva Era de Valores y de una nueva Edad Tecnológica universal. Era impostergable hacer cualquier tipo de esfuerzo. Aún a riesgo personal.
                            </p>

                            <div className="text-center my-5">
                                <p className="fs-4 fw-bold text-primary">
                                    Dios nos bendice por siempre.
                                </p>
                                <p className="text-muted fst-italic">
                                    — Gloria Martínez
                                </p>
                            </div>

                            <hr className="my-5" />

                            <footer className="text-muted text-center">
                                <small>
                                    Tomado y ampliado del Prólogo del libro <strong>“Consejos Comunales”</strong> del General Pedro E. Dávila F. (2008).<br />
                                    Gloria Martínez fue Directora del Instituto y Miembro Titular del Consejo Directivo del Instituto de Investigaciones Integradas (1985-1995).
                                </small>
                            </footer>

                        </article>
                    </div>
                </div>
            </div>

            {/* Garantiza justificado perfecto */}
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