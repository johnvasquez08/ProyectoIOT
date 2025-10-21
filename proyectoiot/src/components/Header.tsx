
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
    <div className="presentacion">
        <div className="maxwidth-7xl flex justify-around p-4 gap-2 bg-slate-200">
            <p className="font-bold text-2xl ">Maicol Vasquez</p>
            <p className="font-bold text-2xl">Sergio Caballero</p>
            <h1 className="font-bold text-4xl">Proyecto IoT</h1>
            <p className="font-bold text-2xl">John Vasquez</p>
            <p className="font-bold text-2xl">Carlos Angulo</p>
        </div>
    </div>
    <div className="">
        <nav className="flex p-7 gap-4 justify-evenly bg-slate-200">
                    <NavLink 
                    className={({isActive}) => 
                    isActive ? "text-orange-500 uppercase font-bold" : "text-black uppercase font-bold"}
                    to="/">Medicion de tanques</NavLink>
                    <NavLink 
                    className={({isActive}) => 
                    isActive ? "text-orange-500 uppercase font-bold" : "text-black uppercase font-bold"}
                    to="/volumen">Calculo de volumen</NavLink>
                    <NavLink 
                    className={({isActive}) => 
                    isActive ? "text-orange-500 uppercase font-bold" : "text-black uppercase font-bold"}
                    to="/proyeccion">Proyeccion de días restantes</NavLink>
                    <NavLink 
                    className={({isActive}) => 
                    isActive ? "text-orange-500 uppercase font-bold" : "text-black uppercase font-bold"}
                    to="/historial">Historial de consumo y llenado</NavLink>
                    <NavLink 
                    className={({isActive}) => 
                    isActive ? "text-orange-500 uppercase font-bold" : "text-black uppercase font-bold"}
                    to="/alertas">Alertas</NavLink>
                    
                    
            </nav>
    </div>
    
    </>
  )
}
