import { tanques } from '../db/tanques'
import TanqueVolumen from '../components/TanqueVolumen'

export default function Volumen() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {tanques.map((tanque) => (
        <TanqueVolumen key={tanque.id} tanque={tanque} />
      ))}
    </div>
  )
}
