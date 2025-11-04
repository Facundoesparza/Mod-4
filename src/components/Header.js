"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';
export default function Header(){
 const pathname = usePathname(); 
 const titles = {
    "/" : "Home",
    "/MiCalendario": "Mi Calendario",
    "/NuevaActividad": "Nueva Actividad",
    "/Usuarios": "Usuarios",
    "/Configuracion": "Configuración",
 }
 const [fecha, setFecha] = useState("");

    useEffect(() =>{
          const actualizarFecha = () => {
              const ahora = new Date();
              const opciones = {year: "numeric",month: "long", day: "numeric"};
              const fechaFormateada = ahora.toLocaleDateString("es-ES", opciones);
              setFecha(fechaFormateada);
          }
          actualizarFecha();
  
          const intervalo = setInterval(actualizarFecha, 60000);
  
          return () => clearInterval(intervalo);
      },[]);


return(
                <header>
                    <h1>{titles[pathname] || "Página"}</h1>
                    <div>
                    {fecha}
                    </div>
                    <button>+ Nueva Actividad</button>
                </header>
)
}