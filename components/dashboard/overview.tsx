"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    registrations: 12,
    reports: 8,
  },
  {
    name: "Feb",
    registrations: 15,
    reports: 12,
  },
  {
    name: "Mar",
    registrations: 18,
    reports: 15,
  },
  {
    name: "Apr",
    registrations: 14,
    reports: 10,
  },
  {
    name: "May",
    registrations: 20,
    reports: 17,
  },
  {
    name: "Jun",
    registrations: 25,
    reports: 20,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Tooltip />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="registrations"
          stroke="hsl(var(--chart-1))"
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="reports"
          stroke="hsl(var(--chart-2))"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}