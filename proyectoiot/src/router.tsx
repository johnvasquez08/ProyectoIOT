import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Medicion from './views/Medicion'
import Proyeccion from './views/Proyeccion'
import Volumen from './views/Volumen'
import Historial from './views/Historial'
import Alertas from './views/Alertas'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
             <Route element={<Layout/>}>
                <Route path="/" element={<Medicion/>} index/>
                <Route path="/volumen" element={<Volumen/>} index/>
                <Route path="/proyeccion" element={<Proyeccion/>} index/>
                <Route path="/historial" element={<Historial/>} index/>
                <Route path="/alertas" element={<Alertas/>} index/>
             </Route>
        </Routes>
    </BrowserRouter>
  )
}
