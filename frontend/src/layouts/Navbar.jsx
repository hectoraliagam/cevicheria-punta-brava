import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Cevichería Punta Brava</h1>
          <div className="space-x-6">
            <Link to="/">Inicio</Link>
            <Link to="/menu">Menú</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
