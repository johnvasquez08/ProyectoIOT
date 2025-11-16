import { useTanques } from "../hooks/useTanques";

export default function TankCard() {
  const { tanques, loading } = useTanques();

  if (loading) {
    return <p className="text-center mt-10">Cargando tanques...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 place-items-center">
      {tanques.map((tanque) => (
        <div key={tanque.id} className="m-5 p-5 border rounded-lg shadow-lg">
          <div className="flex flex-col items-center p-3 space-y-5">
            <p className="font-medium text-1xl">{tanque.nombre}</p>
            <img
              className="size-48"
              src={`/${tanque.imagen}.png`}
              alt={tanque.nombre}
            />
          </div>

          <div className="flex flex-col p-3 space-y-3 gap-5 place-items-center">
            <p className="font-medium text-1xl">{tanque.descripcion}</p>

            <p className="text-1xl font-medium">
              Nivel máximo del tanque en metros: <br />
              {tanque.nivelMaximo}
            </p>

            <p className="text-1xl font-medium">
              Nivel actual del tanque en metros: <br />
              {tanque.nivelActual}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
