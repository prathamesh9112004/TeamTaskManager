function StatCard({ title, value, color }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 border-l-4"
      style={{ borderLeftColor: color }}
    >
      <h3 className="text-gray-500 text-lg font-medium">
        {title}
      </h3>

      <p
        className="text-5xl font-bold mt-4"
        style={{ color }}
      >
        {value}
      </p>
    </div>
  );
}

export default StatCard;