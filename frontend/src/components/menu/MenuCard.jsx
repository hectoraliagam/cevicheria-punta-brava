export default function MenuCard({ name, description, price, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-900">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-blue-700 font-semibold mt-3">S/. {price}</p>
      </div>
    </div>
  );
}
