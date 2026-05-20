import React from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', units: 120 },
  { month: 'Feb', units: 140 },
  { month: 'Mar', units: 180 },
  { month: 'Apr', units: 160 },
  { month: 'May', units: 210 },
  { month: 'Jun', units: 190 },
];

const pieData = [
  { name: 'Fan', value: 25 },
  { name: 'AC', value: 40 },
    { name: 'TV', value: 20 },
  { name: 'Fridge', value: 15 },
];

const COLORS = ['#38bdf8', '#22c55e', '#f97316', '#e11d48'];

function Report() {
  return (
    <div className='page'>
      <h1>Monthly Electricity Report</h1>

      <div className='chart-container'>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data}>
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='units' fill='#38bdf8' />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='chart-container'>
        <ResponsiveContainer width='100%' height={300}>
          <PieChart>
             <Pie
              data={pieData}
              dataKey='value'
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Report;