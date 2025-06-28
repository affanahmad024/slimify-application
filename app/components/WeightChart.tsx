import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { weightRec } from "~/routes/weight-dashboard";

interface WeightGraphProps {
  data: weightRec[];
}

const WeightGraph: React.FC<WeightGraphProps> = ({ data }: WeightGraphProps) => {
  // Format data for the chart
  const chartData = data
    .map((record) => ({
      ...record,
      displayDate: `${record.dateNum}/${record.month}`,
      fullDate: record.date,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{`${data.dayOfWeek}, ${data.displayDate}/${data.year}`}</p>
          <p className="text-red-600 font-medium">{`Weight: ${payload[0].value} kg`}</p>
          <p className="text-gray-500 text-sm">{`Time: ${data.time}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Graph */}

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="displayDate"
              tick={{ fontSize: 12, fill: "#666" }}
              tickLine={{ stroke: "#ccc" }}
              axisLine={{ stroke: "#ccc" }}
            />
            <YAxis
              domain={["dataMin - 2", "dataMax + 2"]}
              tick={{ fontSize: 12, fill: "#666" }}
              tickLine={{ stroke: "#ccc" }}
              axisLine={{ stroke: "#ccc" }}
              label={{
                value: "Weight (kg)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fill: "#666" },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#dc2626"
              strokeWidth={3}
              dot={{ fill: "#dc2626", strokeWidth: 2, r: 5 }}
              activeDot={{
                r: 7,
                stroke: "#dc2626",
                strokeWidth: 2,
                fill: "white",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeightGraph;
