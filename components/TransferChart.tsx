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
            tick={{ fill: "rgba(0,255,159,0.75)", fontSize: 11, fontFamily: "monospace" }}
            axisLine={{ stroke: "rgba(0,255,159,0.15)" }}
            tickLine={false}
        />
        <YAxis
            tick={{ fill: "rgba(0,255,159,0.75)", fontSize: 11, fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
        />
          <Tooltip
            cursor={{ fill: "rgba(0,255,159,0.04)" }}
            contentStyle={{
              background: "#080d1a",
              border: "0.5px solid rgba(0,255,159,0.2)",
              borderRadius: "6px",
              fontFamily: "monospace",
              fontSize: "12px",
              color: "#00ff9f",
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