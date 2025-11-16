import React from "react";
import type { Tanque } from "../types";
import { toLitros } from "../utils/toLitros";

type Props = {
  tanque: Tanque;
}


const TanqueVolumen: React.FC<Props> = ({ tanque }) => {
  // Fórmulas de volumen
  const volumenMaximo: number= Math.PI * Math.pow(tanque.radio, 2) * tanque.nivelMaximo;
  const volumenActual: number = Math.PI * Math.pow(tanque.radio, 2) * tanque.nivelActual;
  const porcentaje = (volumenActual / volumenMaximo) * 100;
  
  return (
    
    <div className="bg-white  rounded-2xl shadow-md p-6 mb-6 w-full max-w-md">
      <h2 className="text-xl font-semibold text-gray-900  mb-3">
        Volumen del {tanque.nombre}
      </h2>

      <p className="text-gray-700  mb-2">
        <strong>Descripción:</strong> {tanque.descripcion}
      </p>

      <div className="mt-4">
        <p className="text-gray-700 ">
          <strong>Radio:</strong> {tanque.radio} m
        </p>
        <p className="text-gray-700 ">
          <strong>Altura máxima:</strong> {tanque.nivelMaximo} m
        </p>
        <p className="text-gray-700 ">
          <strong>Altura actual:</strong> {tanque.nivelActual} m
        </p>
        <p className="text-gray-700  mt-2">
          <strong>Volumen máximo:</strong> {toLitros(Number(volumenMaximo.toFixed(2)))} L
        </p>
        <p className="text-gray-700 ">
          <strong>Volumen actual:</strong> {toLitros(Number(volumenActual.toFixed(2)))} L
        </p>
      </div>

      <div className="w-full bg-gray-200  rounded-full h-4 mt-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${porcentaje}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-500  mt-2 text-center">
        {porcentaje.toFixed(1)}% del volumen total
      </p>
    </div>
  );
};

export default TanqueVolumen;
