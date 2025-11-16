import TanqueVolumen from '../components/TanqueVolumen'
import { useTanques } from '../hooks/useTanques';

export default function Volumen() {
  const { tanques, loading } = useTanques();
  
  if (loading) {
    return <p className="text-center mt-10">Cargando tanques...</p>;
  }
  
  return (
    
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {tanques.map((tanque) => (
        <TanqueVolumen key={tanque.id} tanque={tanque} />
      ))}
    </div>
  )
}
