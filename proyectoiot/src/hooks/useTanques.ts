import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
import type { HistorialItem, Tanque } from "../types";

export const useTanques = () => {
  const [tanques, setTanques] = useState<Tanque[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(db, "tanques");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const result: Tanque[] = Object.keys(data).map((key) => {
        const t = data[key];

        const historialArray: HistorialItem[] = t.historial
            ? Object.values(t.historial as Record<string, HistorialItem>)
                .filter((h) => h && h.fecha)
                .map((h) => ({
                    fecha: h.fecha,
                    consumo: Number(h.consumo ?? 0),
                }))
            : [];


        return {
          id: t.id ?? 0,
          nombre: t.nombre ?? "Tanque sin nombre",
          descripcion: t.descripcion ?? "",
          imagen: `tanque${t.id + 1}`,
          nivelMaximo: t.nivelMaximo ?? 100,
          nivelActual: t.nivelActual ?? 0,
          porcentaje: t.porcentaje ?? 0,
          estado: t.estado ?? "Desconocido",
          alerta: t.alerta ?? false,
          diasRestantes: t.diasRestantes ?? 0,
          consumoPromedio: t.consumoPromedio ?? 0,
          ultimaActualizacion: t.ultimaActualizacion ?? "",
          radio: t.radio ?? 20,
          historial: historialArray,
        };
      });

      setTanques(result);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { tanques, loading };
};
