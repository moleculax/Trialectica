// src/components/Descargas.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function DescargasComponent() {
    const [descargas, setDescargas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/data/descargas.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar el archivo descargas.json");
                }
                return response.json();
            })
            .then((data) => {
                setDescargas(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="container-fluid py-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="container-fluid py-5">
                    <div className="alert alert-danger text-center">
                        Error: {error}
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="mt-0" style={{background: "white"}}>

            <div className="container-fluid container-md py-3 py-md-4">
                <h1 className="fw-bold text-primary mb-4 fs-3 fs-md-2 text-center text-md-start">
                    Descargas
                </h1>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-md-4 mx-0">
                    {descargas.map((item) => (
                        <div key={item.id} className="col px-2">
                            {/* Card estilo Material Design */}
                            <div className="card shadow-lg border-0 rounded-4 h-100 overflow-hidden">

                                {/* Imagen superior */}
                                {/*<img*/}
                                {/* src={item.image}*/}
                                {/* className="card-img-top"*/}
                                {/* alt="Descarga"*/}
                                {/* style={{ height: "180px", objectFit: "cover" }}*/}
                                {/*/>*/}

                                <div className="card-body d-flex flex-column p-3 p-md-4">
                                    <h5 className="card-title fw-bold text-primary fs-6 fs-md-5">
                                        {item.titulo || item.archivo}
                                    </h5>

                                    <p className="card-text text-muted small flex-grow-1">
                                        {item.descripcion.length > 160
                                            ? `${item.descripcion.substring(0, 160)}...`
                                            : item.descripcion}
                                    </p>

                                    <div className="mt-auto">
                                        <a
                                            href={`/downloads/${item.archivo}`}
                                            download={item.archivo}
                                            className="btn btn-primary w-100 rounded-pill shadow-sm"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Descargar archivo
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
                <div style={{height: "700px"}}></div>
            </div>
            <Footer />
        </>
    );
}
