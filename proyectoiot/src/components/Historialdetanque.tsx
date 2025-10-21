import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import type { Tanque } from "../types";

type HistorialProps = {
  tanque: Tanque;
}

const HistorialTanque: React.FC<HistorialProps> = ({ tanque }) => {
  const [historial, setHistorial] = useState(tanque.historial);

  // Simulación de actualización de consumo
  useEffect(() => {
    const intervalo = setInterval(() => {
      const nuevoNivel = Math.max(0, tanque.nivelActual - Math.random() * 10);
      const nuevoHistorial = [
        ...historial,
        { fecha: new Date().toISOString().slice(0, 10), consumo: tanque.nivelActual - nuevoNivel },
      ];
      setHistorial(nuevoHistorial);
    }, 5000); // cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Historial de consumo - {tanque.nombre}
      </h2>

      {/* Nivel actual */}
      <div className="mb-6">
        <p className="text-gray-600 ">
          Nivel actual:{" "}
          <span className="font-bold text-blue-600 ">
            {tanque.nivelActual} / {tanque.nivelMaximo} metros
          </span>
        </p>
        <div className="w-full bg-gray-200  h-4 rounded-xl mt-2">
          <div
            className="bg-blue-500 h-4 rounded-xl transition-all duration-500"
            style={{ width: `${(tanque.nivelActual / tanque.nivelMaximo) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Gráfico de consumo */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart data={historial}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="consumo" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tabla opcional */}
      <table className="mt-6 w-full text-sm text-gray-700 ">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="p-2 text-left">Fecha</th>
            <th className="p-2 text-left">Consumo (L)</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((c, i) => (
            <tr key={i} className="border-b border-gray-200 ">
              <td className="p-2">{c.fecha}</td>
              <td className="p-2">{c.consumo.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistorialTanque;
