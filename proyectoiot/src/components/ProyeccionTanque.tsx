import React from "react";
import { useTanques } from "../hooks/useTanques";

const ProyeccionTanques: React.FC = () => {
  const { tanques, loading } = useTanques();
    
    
  // Función auxiliar para calcular la proyección de cada tanque
  const calcularProyeccion = (nivelActual: number, historial: { fecha: string; consumo: number }[]) => {
    if (!historial || historial.length === 0) return 0;
    const totalConsumo = historial.reduce((sum, h) => sum + h.consumo, 0);
    const promedio = totalConsumo / historial.length;
    return promedio > 0 ? nivelActual / promedio : 0;
  };
  if (loading) {
      return <p className="text-center mt-10">Cargando tanques...</p>;
    }
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        📊 Proyección de días restantes
      </h2>

      <div className="grid gap-6 w-full max-w-5xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tanques.map((tanque) => {
          const diasRestantes = calcularProyeccion(tanque.nivelActual, tanque.historial);

          return (
            <div
              key={tanque.id}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={`/${tanque.imagen}.png`}
                alt={tanque.nombre}
                className="w-20 h-20 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {tanque.nombre}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{tanque.descripcion}</p>
              <p className="text-gray-800 font-bold">
                Promedio de consumo:{" "}
                <span className="text-blue-600">
                  {(
                    tanque.historial.reduce((s, h) => s + h.consumo, 0) /
                    tanque.historial.length
                  ).toFixed(1)}{" "}
                  L/día
                </span>
              </p>
              <p className="mt-2 text-gray-800 font-bold">
                Días restantes:{" "}
                <span
                  className={`${
                    diasRestantes < 3
                      ? "text-red-600"
                      : diasRestantes < 7
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {diasRestantes.toFixed(1)} días
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProyeccionTanques;
