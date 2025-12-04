// HomeTrialectica.jsx
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function HomeTrialectica() {
    return (
        <>

            {/* Fullscreen oscuro futurista */}
            <div className="fixed-top start-0 w-100 h-100 bg-black text-white overflow-hidden">

                {/* Fondo animado con gradientes borrosos */}
                <div className="position-absolute w-100 h-100 opacity-60">
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            background:
                                "radial-gradient(circle at 10% 90%, #0033cc 0%, transparent 40%), radial-gradient(circle at 90% 10%, #00ff99 0%, transparent 40%), radial-gradient(circle at 50% 50%, #ff00aa 0%, transparent 50%)",
                            filter: "blur(140px)",
                            animation: "pulse 15s infinite alternate",
                        }}
                    />
                </div>

                {/* Partículas flotantes */}
                <div className="position-absolute w-100 h-100">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="position-absolute rounded-circle"
                            style={{
                                width: Math.random() * 8 + 2 + "px",
                                height: Math.random() * 8 + 2 + "px",
                                background: i % 3 === 0 ? "#00ffff" : i % 2 === 0 ? "#00ff88" : "#ff00aa",
                                opacity: Math.random() * 0.6 + 0.2,
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                                animation: `float ${12 + i * 0.8}s linear infinite`,
                                animationDelay: `${i * 0.3}s`,
                            }}
                        />
                    ))}
                </div>
                <Navbar/>
                {/* Contenido principal – sin container, full width */}
                <div className="h-100 d-flex align-items-center position-relative z-10 px-4 px-md-5">
                    <div className="row w-100 g-5 align-items-center">
                        <div className="col-lg-7 col-xl-6">
                            {/* Título glitch ultra grande */}
                            <h1
                                className="display-1 fw-bold mb-4 lh-1"
                                style={{
                                    fontSize: "clamp(4rem, 12vw, 10rem)",
                                    background: "linear-gradient(90deg, #00ff88, #00ccff, #ff00aa, #00ffff)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundSize: "200%",
                                    animation: "glitch 10s infinite, gradient 8s ease infinite",
                                }}
                            >
                                CATASTRO
                                <br />
                                INTEGRAL
                            </h1>

                            <h2 className="display-5 fw-light mb-4 text-cyan opacity-90">
                                Municipio Inteligente
                            </h2>

                            <h5>
                                La revolución geotecnológica que unifica <br/>  Pueblo •  Gobierno • Territorio<br/>
                                mediante inteligencia social organizada y gestión
                            </h5>


                        </div>

                        {/* Imagen central flotante */}
                        <div className="col-lg-5 col-xl-6 text-center">
                            <div className="position-relative d-inline-block">
                                <img
                                    src="/image/flujo5.gif"
                                    alt="Catastro Integral 5D"
                                    className="img-fluid"
                                    style={{
                                        maxWidth: "90vw",
                                        width: "520px",
                                        border: "3px solid #00ff88",
                                        borderRadius: "24px",
                                        boxShadow: "0 0 80px rgba(0, 255, 136, 0.7), inset 0 0 40px rgba(0, 255, 136, 0.3)",
                                        animation: "levitate 7s infinite ease-in-out",
                                    }}
                                />

                            </div>
                        </div>
                    </div>
                </div>

                {/* Autor en esquina inferior */}
                <div className="position-absolute bottom-0 start-0 end-0 text-center p-3 opacity-40">
                    <small className="fw-light">
                        Luis Gómez de la Vega — Instituto de Investigaciones Integradas
                    </small>
                </div>
            </div>

            {/* Estilos globales para este componente */}
            <style jsx global>{`
        body, html { margin: 0; padding: 0; overflow: hidden; background: black; }
        
        @keyframes pulse { 
          0%, 100% { opacity: 0.4; transform: scale(1); } 
          50% { opacity: 0.8; transform: scale(1.1); } 
        }
        @keyframes float { 
          from { transform: translate(0, 0) rotate(0deg); } 
          to { transform: translate(100vw, -100vh) rotate(360deg); } 
        }
        @keyframes glitch {
          0%, 100% { text-shadow: 4px 4px #ff00aa, -4px -4px #00ffff; }
          25% { text-shadow: -4px 4px #ff00aa, 4px -4px #00ffff; }
          50% { text-shadow: 4px -4px #ff00aa, -4px 4px #00ffff; }
          75% { text-shadow: -4px -4px #ff00aa, 4px 4px #00ffff; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes levitate {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(2deg); }
        }

        .btn-cyan {
          background: linear-gradient(45deg, #00ff88, #00ccff);
          color: black !important;
          transition: all 0.4s ease;
        }
        .hover-bg-cyan:hover {
          background: #00ff88 !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 255, 136, 0.4) !important;
        }
        .text-cyan { color: #00ffff !important; }
      `}</style>

            <Footer/>
        </>
    );
}