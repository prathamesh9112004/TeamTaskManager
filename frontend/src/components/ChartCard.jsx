import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ChartCard({ tasks }) {
  const data = [
    {
      name: "Completed",
      value: tasks.filter(
        (task) => task.status === "Completed"
      ).length,
    },
    {
      name: "Pending",
      value: tasks.filter(
        (task) => task.status !== "Completed"
      ).length,
    },
  ];

  const COLORS = ["#22c55e", "#f59e0b"];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Task Status Overview
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartCard;