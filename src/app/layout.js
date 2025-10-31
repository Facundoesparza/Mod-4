
//import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Hola mundo",
  description: "xd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <div className="layout">
             <Nav />
            <div className="contenido">
                <header>
                    <h1>Home</h1>
                    <div>Fecha actual</div>
                    <button>+ Nueva Actividad</button>
                </header>
                  {children}
            </div>
          </div>
     <footer>@derr</footer>
       
      </body>
    </html>
  );
}
