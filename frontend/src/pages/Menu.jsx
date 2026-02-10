import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import MenuCard from "../components/menu/MenuCard";

const mockData = [
  {
    id: 1,
    name: "Ceviche Clásico",
    description: "Pescado fresco, limón y ají limo.",
    price: 35,
    image: "https://source.unsplash.com/400x300/?ceviche",
  },
  {
    id: 2,
    name: "Jalea Mixta",
    description: "Mariscos fritos con salsa criolla.",
    price: 45,
    image: "https://source.unsplash.com/400x300/?seafood",
  },
];

export default function Menu() {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle>Nuestro Menú</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {mockData.map((item) => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
