import Link from 'next/link';

export default function Nav() {

    return (
        <nav>
            <h2><img /*src="img/logos/book-solid-full.svg" */alt=""/>Agenda</h2>
            <ul>
              <li><Link href="/"><img /*src="img/logos/house-user-solid-full.svg" */ alt=""/>Home</Link></li>
               <li><Link href="/MiCalendario"><img /*src="img/logos/calendar-days-solid-full.svg" */alt=""/>Mi Calendario</Link></li>
                <li><Link href="/NuevaActividad"><img /* src="img/logos/plus-solid-full.svg" */alt=""/>Nueva Actividad</Link></li>
                <li><Link href="Usuarios"><img /* src="img/logos/users-solid-full.svg" */ alt=""/>Usuarios</Link></li>
                <li><Link href=""><img /* src="img/logos/gear-solid-full.svg" */ alt=""/>Configuración</Link></li>
            </ul>
        </nav>
        
    )

}