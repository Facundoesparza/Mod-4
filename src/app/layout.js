
//import "./globals.css";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

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
              <Header />
                  {children}
            </div>
          </div>
     <footer>@derr</footer>
       
      </body>
    </html>
  );
}
