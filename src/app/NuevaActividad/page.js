import FormNuevaActividad from "@/components/FormNuevaActividad";
export const metadata = {
  title: "Nueva Actividad",
  description: "xd",
};

export default function NuevaActividad() {
  return (
    <main className="main-form">
      <section className="form-actividad">
        <h2>Datos de la nueva actividad</h2>
        <FormNuevaActividad />
      </section>
    </main>
  );
}

    