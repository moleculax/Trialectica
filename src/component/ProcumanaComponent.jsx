'use client';
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import proCumana from "/image/proCumana.png";

export default function ProcumanaComponent() {
    return (
        <>
            <Navbar/>
            {/* Box con fondo aplicado */}
            <Box sx={{ backgroundColor: "#212120", minHeight: "100vh", fontSize: "12px !important" }}>
                <Container maxWidth="md" sx={{ py: 4, textAlign: "justify" }}>
                    <Typography variant="h3" gutterBottom>

                    </Typography>

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

                    {/* Editorial */}
                    <Box mb={4}>
                        <Typography variant="h5" gutterBottom>
                            Editorial
                        </Typography>
                        <Typography paragraph>
                            Venezuela ha transitado desde su independencia hasta nuestros tiempos, por guerras civiles,
                            revoluciónes, golpes de estado y sistemas incoherentes, que han dañado el patrimonio material,
                            espiritual y natural de la república. Es aquí y ahora cuando se ha acentuado la más trascendente
                            revolución del pensamiento y acción, gestada con la concurrencia de un sentimiento de unidad animado
                            por la filosofía y ciencia Integralista e interdisciplinaria, acoplada a la acción política que
                            transforma nuestra noción de relación "gobierno, pueblo y territorio", para postular la apertura a
                            una nueva fase histórico cultural del país, anunciando su desprendimiento hacia latitudes que
                            proyectan el resurgimiento a una nueva y verdadera civilización.
                        </Typography>
                        <Typography paragraph>
                            Saludamos al mundo entero desde la ciudad primogénita de Venezuela "Cumaná", y les comunicamos sobre
                            la transferencia de la democracia directa e inteligente.
                        </Typography>
                    </Box>

                    {/* Estrategia */}
                    <Box mb={4}>
                        <Typography variant="h5" gutterBottom>
                            Estrategia
                        </Typography>
                        <Typography paragraph>
                            Procumana es la voz y evidencia del desarrollo estratégico municipal, cuyo dinamismo y complejidad
                            postula la participación de la comunidad, representada por organizaciones legalmente constituidas,
                            y los niveles decisionales, para atender la delicada labor del abordaje concurrente con la
                            autenticidad geopolítica y geoeconómica, a nivel urbano y rural, a los efectos de adquirir y
                            fortalecer la propiedad legitima de nuestra verdad y realidad municipal.
                        </Typography>
                        <Typography paragraph>
                            La estrategia se fundamenta en lograr la identificación y dominio Intersectorial en el territorio
                            municipal, bajo la perspectiva de impulsar el mejoramiento de las actividades productivas, y
                            establecer la distribución proporcional de los bienes y servicios en los sectores: social (1),
                            educación (2), promoción (3), planificación e inteligencia (4), político (5), normativo (6),
                            administración (7), economía y finanzas (8), producción y comercio (9), infraestructura (10),
                            ecología (11) y salud (12).
                        </Typography>
                    </Box>

                    {/* Metodología */}
                    <Box mb={4}>
                        <Typography variant="h5" gutterBottom>
                            Metodología
                        </Typography>
                        <Typography paragraph>
                            La matriz y proyección del Sistema de Desarrollo Estratégico Municipal (SIDEM), se dirige a la
                            apertura de lo útil y trascendental en nuestro municipio, a través del diseño, desarrollo e
                            implementación de la plataforma metodológica y tecnológica que surge de la integración del Sistema
                            de Información Social (SIS), el Sistema de Inteligencia Social (SIS) y un Sistema Dinámico
                            Computarizado - GEOtecnología.
                        </Typography>
                        <Typography paragraph>
                            Así se conforma la estructura funcional, de elevada concentración de información, que acelera el
                            mejoramiento contínuo de los procesos cíclicos entre conocimiento y experiencia, e induce el
                            resurgimiento de un clima de descentralización de decisiones y activación de la población.
                        </Typography>
                        <Typography paragraph>
                            Los pasos metodológicos para lograr que la población informada y organizada, genere inteligencia y
                            se active por vía de la autogestión y cogestión son:
                        </Typography>
                        <ul>
                            <li>Abordaje</li>
                            <li>Diagnóstico</li>
                            <li>Censo Autogestionado</li>
                            <li>Validación y Activación por Sistemas</li>
                            <li>Control y Evaluación Continua Automatizada</li>
                        </ul>
                        <Typography paragraph>
                            La Transferencia de Poder en "Cumaná", Estado Sucre, ciudad primogénita del continente americano,
                            se hace realidad en un acto de participación, con un sentimiento de unidad entre "gobierno, pueblo
                            y territorio", que postula la transferencia del poder político, y se constituye en la evidencia
                            tangible y concurrente con la democracia directa e inteligente, cuyo logro se traduce en transferir
                            la administración del patrimonio material, espiritual y natural del Municipio Sucre, a la población
                            organizada.
                        </Typography>
                    </Box>

                    {/* Relación Pueblo - Gobierno - Territorio */}
                    <Box mb={4}>
                        <Typography variant="h5" gutterBottom>
                            Relación "Pueblo - Gobierno - Territorio"
                        </Typography>
                        <Typography paragraph>
                            La estrategia inicial en la democracia directa e inteligente, se identifica con el juego de
                            relaciones de poder que se forman entre "Gobierno, Pueblo y Territorio", durante la gestión pública
                            en materia social, política y económica, y además propone el fortalecimiento de los contactos y
                            vínculos entre el gobierno y población organizada, en términos de control y evaluación contínua del
                            poseer y distribuir los bienes y servicios.
                        </Typography>
                        <Typography paragraph>
                            La democracia directa trasvasa las barreras del gobierno tradicional y estático, convirtiéndose en
                            la expresión viva del desarrollo estratégico representada por el abordaje coherente a la población
                            urbana y rural, sobre la base del Censo Autogestionario en los sectores:<br/> social (1)<br/> educación (2)<br/>
                            promoción (3)<br/> planificación e inteligencia (4)<br/> político (5)<br/> normativa (6)<br/> administración (7)<br/>
                            economía y finanzas (8)<br/> producción y comercio (9)<br/> infraestructura (10)<br/> ecología (11)<br/> salud
                            (12)<br/>En términos de diseñar, desarrollar e instrumentar el Sistema de Información y Preinteligencia
                            Social (SIPS), el Sistema de Inteligencia Social (SIS), y el Sistema de Activación Social (SAS),
                            todo lo cual se procesa en el Laboratorio de Gestión, para potenciar la toma de decisiones del
                            Gobierno con la población organizada, en función de lograr la buena administración de los recursos
                            en el territorio.
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <Footer/>
        </>
    );
}
