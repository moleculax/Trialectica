// src/components/Background.jsx
import React from "react";

export default function Background({ children }) {
    return (
        <div className="min-vh-100 bg-dark">
            {children}
        </div>
    );
}