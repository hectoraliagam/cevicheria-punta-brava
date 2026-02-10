import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function Contact() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle>Contacto</SectionTitle>
        <div className="text-center">
          <p>Los Olivos, Lima</p>
          <p>987 654 321</p>
          <p className="mt-4">Horario: 10am - 6pm</p>
        </div>
      </Container>
    </section>
  );
}
