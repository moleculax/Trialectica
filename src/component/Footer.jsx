// Footer.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { SiReact, SiNodedotjs, SiRedis } from "react-icons/si"; // ← Redis agregado

export default function Footer() {
    return (
        <footer className="bg-dark text-light border-top py-3 fixed-bottom w-100">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">

                {/* Izquierda: Copyright y autor */}
                <div>
          <span className="text-light">
            © {new Date().getFullYear()} Proyecto Catastro Integral  ::.
          </span>
                    <br className="d-block d-md-none" />
                    <small className="fw-medium">
                           Autor: <strong>Luis Gómez de la Vega</strong> .::
                    </small>
                </div>
                <strong>
                    Cumaná - Sucre - Venezuela / Buenos Aires - Argentina
                </strong>
                {/* Derecha: React + Node.js + Redis */}
                <div className="d-flex align-items-center gap-4 mt-3 mt-md-0">
                    <small className="text-light opacity-75 me-2">Hecho con:</small>
                    <div className="d-flex align-items-center gap-3">
                        <SiReact className="text-info" size={23} title="React" />
                        <SiNodedotjs className="text-success" size={28} title="Node.js" />
                        <SiRedis className="text-danger" size={24} title="Redis" />
                    </div>
                </div>

            </div>
        </footer>
    );
}