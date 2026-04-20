"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type Props = {
  data: {
    company: string;
    change: number;
  }[];
};

export default function TransferChart({ data }: Props) {
  return (
    <div className="chart-wrap">
      <div className="chart-label">Hiring change % — Q4 2025 vs Q1 2026</div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={data}
          margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
        >
        <XAxis
            dataKey="company"
            tick={{ fill: "#8b949e", fontSize: 11, fontFamily: "Google Sans, sans-serif" }}
            axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#8b949e", fontSize: 11, fontFamily: "Google Sans, sans-serif" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            contentStyle={{
              background: "#161b22",
              border: "0.5px solid rgba(255,255,255,0.1)",
              borderRadius: "6px",
              fontFamily: "Google Sans, sans-serif",
              fontSize: "13px",
              color: "#e6edf3",
            }}
            labelStyle={{ 
              color: "#8b949e", 
              marginBottom: "4px",
              fontFamily: "Google Sans, sans-serif",
            }}
            itemStyle={{
              color: "#e6edf3",
            }}
            formatter={(value: unknown) => [`${value}%`, "Change"]}
          />
          <Bar dataKey="change" radius={[3, 3, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry.change > 0
                    ? "#00ff9f"
                    : entry.change > -20
                    ? "#FFB347"
                    : "#FF4D6D"
                }
                opacity={0.85}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}