// src/components/ContactosRedisComponent.jsx
import React, { useState } from "react";
import axios from "axios";
import proCumana from "/image/proCumana.png";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const ContactosRedisComponent = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
    });

    const [enviando, setEnviando] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviando(true);
        try {
            const res = await axios.post(
                "https://moleculaxapp-backend.vercel.app/api/mensajes",
                formData
            );
            if (res.data.status === "ok") {
                alert("Mensaje enviado correctamente a Redis");
                setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
            } else {
                alert(`Problema al enviar: ${res.data.message || "Error desconocido"}`);
            }
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            const mensajeError =
                error.response?.data?.message || error.message || "Error de conexión";
            alert(`Error al enviar: ${mensajeError}`);
        } finally {
            setEnviando(false);
        }
    };

    return (
        <>
            <Navbar />

            <div className="min-vh-100 bg-white py-5">
                <div className="container px-4 px-md-5">

                    <div className="row justify-content-center">
                        <div className="col-12 shadow-lg">

                            <h1 className="display-5 fw-bold text-primary">Contacto</h1>
                            <p className="lead text-muted">
                                Estamos aquí para ayudarte. Envíanos tu mensaje.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="p-4 p-md-5 rounded-4"
                                style={{ borderRadius: "20px" }}
                            >
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="nombre"
                                        placeholder="Tu nombre completo"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="form-control form-control-lg"
                                        style={{
                                            borderRadius: "12px",
                                            border: "2px solid #ced4da",
                                            padding: "14px",
                                            fontSize: "1.1rem",
                                        }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="tu@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-control form-control-lg"
                                        style={{
                                            borderRadius: "12px",
                                            border: "2px solid #ced4da",
                                            padding: "14px",
                                            fontSize: "1.1rem",
                                        }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="asunto"
                                        placeholder="Asunto del mensaje"
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        required
                                        className="form-control form-control-lg"
                                        style={{
                                            borderRadius: "12px",
                                            border: "2px solid #ced4da",
                                            padding: "14px",
                                            fontSize: "1.1rem",
                                        }}
                                    />
                                </div>

                                <div className="mb-4">
                                    <textarea
                                        name="mensaje"
                                        placeholder="Escribe aquí tu mensaje..."
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="form-control form-control-lg"
                                        style={{
                                            borderRadius: "12px",
                                            border: "2px solid #ced4da",
                                            padding: "14px",
                                            fontSize: "1.1rem",
                                            resize: "none",
                                        }}
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={enviando}
                                        className="btn btn-primary btn-lg px-5 py-3 fw-bold text-white shadow"
                                        style={{
                                            borderRadius: "50px",
                                            background: enviando
                                                ? "#6c757d"
                                                : "linear-gradient(90deg, #007bff, #00d4ff)",
                                            border: "none",
                                            fontSize: "1.2rem",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        {enviando ? "Enviando mensaje..." : "Enviar Mensaje"}
                                    </button>
                                </div>

                                <div style={{ height: "150px" }}></div>
                            </form>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="row justify-content-center mt-5">
                        <div className="col-12 text-center mb-4 shadow rounded-4">
                            <img
                                src={proCumana}
                                alt="Redis Node"
                                className="img-fluid"
                                style={{ borderRadius: "16px" }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactosRedisComponent;
