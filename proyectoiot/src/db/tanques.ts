import type { Tanque } from "../types";

export const tanques : Tanque[] = [
        {
            "id": 1,
            "nombre": "Tanque de agua",
            "descripcion": "Tanque principal de agua potable ubicado en la planta alta, utilizado para el suministro general del edificio.",
            "imagen": "tanque",
            "nivelMaximo": 1000,
            "nivelActual": 750,
            "radio": 30,
            historial: [
                { fecha: "2025-10-15", consumo: 20 },
                { fecha: "2025-10-16", consumo: 30 },
                { fecha: "2025-10-17", consumo: 10 },
            ]
        },
        {
            "id": 2,
            "nombre": "Tanque de combustible",
            "descripcion": "Tanque para almacenamiento de combustible diesel de maquinaria pesada y vehiculos. Ubicado en el exterior de la bodega.",
            "imagen": "tanquecombustible",
            "nivelMaximo": 750,
            "nivelActual": 300,
            "radio": 25,
            historial: [
            { fecha: "2025-10-15", consumo: 20 },
            { fecha: "2025-10-16", consumo: 30 },
            { fecha: "2025-10-17", consumo: 10 },
            ]

        },
        {
            "id": 3,
            "nombre": "Tanque de quimico",
            "descripcion": "Tanque para almacenamiento de quimicos utilizados en procesos industriales. Ubicado en el area de produccion.",
            "imagen": "tanquequimico",
            "nivelMaximo": 900,
            "nivelActual": 450,
            "radio": 20,
            historial: [
            { fecha: "2025-10-15", consumo: 20 },
            { fecha: "2025-10-16", consumo: 30 },
            { fecha: "2025-10-17", consumo: 10 },
        ]     
        }
    ]