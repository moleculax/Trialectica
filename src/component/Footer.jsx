import React from "react";

// Importar Bootstrap (CSS y JS)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Footer() {
    return (
        <footer className="bg-dark text-light border-top py-3 fixed-bottom w-100">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                {/* Texto de copyright */}
                <span className="text-light">
          © {new Date().getFullYear()} Proyecto Catastro Integral
        </span>
                <small className="fw-medium">
                    Autor: <strong>Luis Gómez de la Vega</strong>
                </small>
            </div>
        </footer>
    );
}

