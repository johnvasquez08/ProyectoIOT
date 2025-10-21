import HistorialTanque from '../components/Historialdetanque';
import { tanques } from '../db/tanques';


export default function Historial() {
  return (
    <div className="min-h-screen bg-gray-100  flex items-center justify-center">
     {tanques.map((tanque) => (
    <HistorialTanque key={tanque.id} tanque={tanque} />
  ))}
    </div>
  );
}
