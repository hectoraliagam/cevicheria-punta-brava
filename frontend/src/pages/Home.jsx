import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <section className="bg-blue-100 py-20 text-center">
        <Container>
          <h1 className="text-4xl font-bold text-blue-900">
            El mejor ceviche de Los Olivos
          </h1>
          <p className="mt-4 text-gray-700">
            Frescura, tradición y sabor marino en cada plato.
          </p>
          <div className="mt-6">
            <Button>Ver Menú</Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>¿Por qué elegirnos?</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold">Productos Frescos</h3>
              <p className="text-gray-600 mt-2">
                Ingredientes seleccionados diariamente.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Tradición Peruana</h3>
              <p className="text-gray-600 mt-2">
                Recetas auténticas y sabor casero.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Ambiente Familiar</h3>
              <p className="text-gray-600 mt-2">
                Un lugar ideal para compartir.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
