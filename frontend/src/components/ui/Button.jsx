export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition duration-300"
    >
      {children}
    </button>
  );
}
