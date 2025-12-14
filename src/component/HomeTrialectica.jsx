// HomeTrialectica.jsx → Versión MÓVIL PERFECTO (2025)
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeTrialectica() {
    return (
        <>
            <div className="min-vh-100 bg-black text-white position-relative overflow-hidden">

                {/* Fondo animado ultra suave */}
                <div className="position-fixed top-0 start-0 w-100 h-100 opacity-50">
                    <div
                        className="w-100 h-100"
                        style={{
                            background: `
                radial-gradient(circle at 20% 80%, #0033cc 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, #00ff99 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, #ff00aa 0%, transparent 50%)
              `,
                            filter: "blur(120px)",
                            animation: "pulse 20s infinite alternate",
                        }}
                    />
                </div>

                {/* Partículas (menos en móvil para mejor rendimiento) */}
                <div className="position-fixed top-0 start-0 w-100 h-100">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="position-absolute rounded-circle"
                            style={{
                                width: Math.random() * 6 + 3 + "px",
                                height: Math.random() * 6 + 3 + "px",
                                background: i % 3 === 0 ? "#00ffff" : i % 2 === 0 ? "#00ff88" : "#ff00aa",
                                opacity: Math.random() * 0.5 + 0.3,
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                                animation: `float ${18 + i}s linear infinite`,
                                animationDelay: `${i * 0.5}s`,
                            }}
                        />
                    ))}
                </div>

                <Navbar />

                {/* Contenido principal - OPTIMIZADO PARA MÓVIL */}
                <div className="container position-relative z-10" style={{ paddingTop: "90px", paddingBottom: "80px" }}>
                    <div className="row align-items-center justify-content-center g-4 g-md-5">

                        {/* GIF PRIMERO EN MÓVIL */}
                        <div className="col-12 col-lg-6 order-1 order-lg-2 text-center">
                            <img

                                src="/image/sistemasIntegrados.png"

                                alt="Catastro Integral"
                                className="img-fluid rounded-4 border border-3 border-success shadow-lg"
                                style={{
                                    maxWidth: "92vw",
                                    width: "clamp(260px, 85vw, 500px)",
                                    borderColor: "#00ff88",
                                    boxShadow: "0 0 60px rgba(0, 255, 136, 0.6)",
                                    animation: "levitate 7s infinite ease-in-out",
                                }}
                            />
                        </div>

                        {/* TEXTO DESPUÉS EN MÓVIL */}
                        <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start px-4 px-md-5">
                            <h1
                                className="fw-bold mb-2"
                                style={{
                                    fontSize: "clamp(2.7rem, 10vw, 7rem)",
                                    lineHeight: "0.95",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                               TRIALECTICA
                            </h1>

                            <h2
                                className="fw-light mb-3 text-cyan"
                                style={{ fontSize: "clamp(1.5rem, 5.5vw, 3rem)" }}
                            >
                                La revolución geotecnológica
                            </h2>

                            <p
                                className="opacity-90 lead"
                                style={{
                                    fontSize: "clamp(1rem, 3.8vw, 1.4rem)",
                                    lineHeight: "1.6",
                                }}
                            >
                               <br />
                                <strong>Pueblo • Gobierno • Territorio</strong><br />
                                con inteligencia social organizada.
                            </p>
                            <p>
                            Desde el comienzos de la humanidad, existen tres relaciones que conforman la realidad:
                            la primera relación continentaliza el<strong> Espacio-Tiempo</strong>; la segunda le da contenidos a la vida,
                            a la naturaleza, al mundo y al cosmos,se trata de la <strong>Energía-Información</strong>, pero todo ello a
                            su vez relaciona las <strong> causas infinitas y sus efectos también infinitos</strong>.
                                <br/> La trialéctica <strong>(Metodología Compleja)</strong>
                            es la envolvente conceptual del método trialéctico que implica: para toda síntesis es existencial
                            la triple relación. Desde ese método se genera: toda revolución, toda adecuación y concurrencia a fines,
                            objetivos y metas, sean estrictamente sociales, políticas o económicas. La trialéctica
                            es el fluido real que invita a la calidad de la vida en nuestro planeta para que la raza humana
                            salga del mismo con ideales cósmicos de perdurabilidad.
                                <div style={{height: "100px"}}>

                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer autor - siempre visible y bonito en móvil */}
                <div className="position-fixed bottom-0 start-0 end-0 text-center py-3 bg-black bg-opacity-70 backdrop-blur-sm">
                    <small style={{ fontSize: "clamp(0.8rem, 2.2vw, 1rem)", opacity: 0.7 }}>
                        Luis Gómez de la Vega — Instituto de Investigaciones Integradas
                    </small>
                </div>
            </div>

            {/* ANIMACIONES Y ESTILOS */}
            <style jsx global>{`
        body, html { margin:0; padding:0; background:#000; overflow-x:hidden; }
        
        @keyframes pulse { 
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        @keyframes float {
          from { transform: translate(0, 100vh) rotate(0deg); }
          to { transform: translate(30vw, -100vh) rotate(360deg); }
        }
        @keyframes levitate {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .text-cyan { color: #00ffff !important; }

        /* Evita que el GIF se vea cortado en móviles */
        img { image-rendering: -webkit-optimize-contrast; }
      `}</style>

            <Footer />
        </>
    );
}