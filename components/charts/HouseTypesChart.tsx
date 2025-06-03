"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface ChartDataItem {
  name: string;
  value: number;
}

interface HouseTypesChartProps {
  data: ChartDataItem[];
}

export const HouseTypesChart = ({ data }: HouseTypesChartProps) => {
  const colors = [
    "#3b82f6",
    "#06b6d4",
    "#6366f1",
    "#8b5cf6",
    "#a855f7",
    "#10b981",
    "#f97316",
    "#ef4444",
  ];

  return (
    <div className="p-6 mb-8 bg-white border rounded-lg shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Property Type Distribution</h3>
      <div className="py-10 min-h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
