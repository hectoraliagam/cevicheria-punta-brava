import Container from "../components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <Container>
        <div className="text-center">
          <p>© {new Date().getFullYear()} Cevichería Punta Brava</p>
          <p className="text-sm mt-2">Los Olivos - Lima, Perú</p>
        </div>
      </Container>
    </footer>
  );
}
