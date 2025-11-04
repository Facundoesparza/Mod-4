//import Image from "next/image";
//import styles from "./page.module.css";
export const metadata = {
  title: "Home",
  description: "xd",
};

export default function Home() {
  return (
    <div className="">
       <main>
                <section className="section">
                    <div className="main1">
                        <h2>Calendario semanal</h2>
                        <div className="calendario-semanal">
                            <div>Lun</div>
                            <div>Mar</div>
                            <div>Mié</div>
                            <div>Jue</div>
                            <div>Vie</div>
                            <div>Sáb</div>
                            <div>Dom</div>
                        </div>
                    </div>

                    <div className="proximos-eventos">
                        <h2>Próximos eventos</h2>
                        <ul>
                            <li>09:00 Reunión con equipo</li>
                            <li>11:00 Turno paciente Pérez</li>
                            <li>15:00 Llamada cliente XYZ</li>
                            <li>16:00 Reunión interna</li>
                            <li>17:30 Revisión semanal</li>
                        </ul>
                    </div>
                </section>
            </main>
    </div>
  );
}
