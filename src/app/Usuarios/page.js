export const metadata = {
  title: "Usuario",
  description: "xd",
};

export default function Usuario() {
  return (
    <main>
                <section className="tabla-usuarios">
                <h2>Lista de usuarios</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Cargo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>@@@@@</td>
                                <td>Administrador</td>
                                <td>
                                <button className="btn ver">Ver</button>
                                <button className="btn editar">Editar</button>
                                <button className="btn eliminar">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>NNNNN</td>
                                <td>Usuario</td>
                                <td>
                                <button className="btn ver">Ver</button>
                                <button className="btn editar">Editar</button>
                                <button className="btn eliminar">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
  );
}

    