
import { NavLink } from "react-router-dom";



export default function Header() {

  return (
    <>
  {/* Presentación */}
  <div className="presentacion bg-slate-200 p-4">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-wrap sm:flex-row justify-around items-center gap-2">
      <p className="font-bold text-xl sm:text-2xl text-center">Maicol Vasquez</p>
      <p className="font-bold text-xl sm:text-2xl text-center">Sergio Caballero</p>
      <h1 className="font-bold text-3xl sm:text-4xl text-center">Proyecto IoT</h1>
      <p className="font-bold text-xl sm:text-2xl text-center">John Vasquez</p>
      <p className="font-bold text-xl sm:text-2xl text-center">Carlos Angulo</p>
    </div>
  </div>

  {/* Navegación */}
  <nav className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-evenly items-center bg-slate-200 p-5 gap-3 sm:gap-4 text-center">
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-sky-700 uppercase font-bold border-2 border-solid p-2 rounded-lg"
          : "text-black uppercase font-bold border-2 border-solid p-2 rounded-lg"
      }
      to="/"
    >
      Medición de tanques
    </NavLink>

    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-sky-700 uppercase font-bold border-2 border-solid p-2 rounded-lg "
          : "text-black uppercase font-bold border-2 border-solid p-2 rounded-lg "
      }
      to="/volumen"
    >
      Cálculo de volumen
    </NavLink>

    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-sky-700 uppercase font-bold border-2 border-solid p-2 rounded-lg"
          : "text-black uppercase font-bold border-2 border-solid p-2 rounded-lg"
      }
      to="/proyeccion"
    >
      Proyección de días restantes
    </NavLink>

    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-sky-700 uppercase font-bold border-2 border-solid p-2 rounded-lg"
          : "text-black uppercase font-bold border-2 border-solid p-2 rounded-lg"
      }
      to="/historial"
    >
      Historial de consumo
    </NavLink>

    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-sky-700 uppercase font-bold border-2 border-solid p-2 rounded-lg"
          : "text-black uppercase font-bold border-2 border-solid p-2 rounded-lg"
      }
      to="/alertas"
    >
      Alertas
    </NavLink>
  </nav>
</>
  )
}
