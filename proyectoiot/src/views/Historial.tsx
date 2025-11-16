import HistorialTanque from '../components/Historialdetanque';
import { useTanques } from '../hooks/useTanques';


export default function Historial() {
  const { tanques, loading } = useTanques();
  
    if (loading) {
      return <p className="text-center mt-10">Cargando tanques...</p>;
    }
  return (
    <div className="max-h-screen p-3 gap-5 flex items-center xl:justify-center xl:flex-row flex-col">
     {tanques.map((tanque) => (
    <HistorialTanque key={tanque.id} tanque={tanque} />
  ))}
    </div>
  );
}
