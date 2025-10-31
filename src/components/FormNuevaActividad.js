import Link from 'next/link';

export default function FormNuevaActividad(){
    return(
        <form className="form">
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" required />

          <label htmlFor="descripcion">Descripción:</label>
          <textarea id="descripcion" name="descripcion" rows="3"></textarea>

          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" required />

          <div>
            <label htmlFor="hora-inicio">Hora inicio:</label>
            <input type="time" id="hora-inicio" name="hora-inicio" />

            <label htmlFor="hora-fin">Hora fin:</label>
            <input type="time" id="hora-fin" name="hora-fin" />
          </div>

          <label htmlFor="categoria">Categoría:</label>
          <select id="categoria" name="categoria">
            <option value="trabajo">Trabajo</option>
            <option value="personal">Personal</option>
            <option value="medico">Médico</option>
            <option value="otro">Otro</option>
          </select>

          <label>Prioridad:</label>
          <div>
            <label>
              <input type="radio" name="prioridad" value="alta" /> Alta
            </label>
            <label>
              <input type="radio" name="prioridad" value="media" /> Media
            </label>
            <label>
              <input type="radio" name="prioridad" value="baja" /> Baja
            </label>
          </div>

          <button className="button" type="submit">
            Guardar Actividad
          </button>
        </form>
    )
}