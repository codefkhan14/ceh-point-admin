import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { pieData } from '../../../dummydata';


export default function User({ title, data, dataKey, grid }) {
  const styleChart = {
    backgroundColor: "rgba(174,255,245,0.28)",
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataItem = payload[0].payload;
      return (
        <div className="custom-tooltip" style={{backgroundColor: "white", padding: "5px 20px", }}>
          <p style={{ color: dataItem.color }}>{dataItem.name}</p>
          <p>{dataItem.value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart" style={styleChart}>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2000/1360}>
        {/* Include the PieChart component here */}
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend layout="vertical" align="right" verticalAlign="middle" iconType='circle' />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
