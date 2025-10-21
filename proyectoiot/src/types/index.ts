export type Tanque = {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    nivelMaximo: number;
    nivelActual: number;
    radio: number;
    historial: Consumo[];

};

export type Consumo = {
    fecha: string;
    consumo: number;
}