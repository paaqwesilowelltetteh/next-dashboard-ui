"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Image from "next/image";

const data = [
    {
        name: "Mon",
        present: 40,
        absent: 40,
        amt: 2400,
    },
    {
        name: "Tue",
        present: 86,
        absent: 85,
        amt: 2210,
    },
    {
        name: "Wed",
        present: 67,
        absent: 99,
        amt: 2290,
    },
    {
        name: "Thu",
        present: 98,
        absent: 90,
        amt: 2000,
    },
    {
        name: "Fri",
        present: 98,
        absent: 90,
        amt: 87,
    },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg w-full h-full p-4">
      <div className="flex justify-between items-center">
        {/* TITLE */}
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray"}}/>

          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />

          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
