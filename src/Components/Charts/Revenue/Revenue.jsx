import "../allCharts.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Revenue({ title, data, dataKey, grid }) {
  const styleChart = {
    backgroundColor: "#FF00990D"
  }
  return (
    <div className="chart" style={styleChart}>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2000 / 1000}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid stroke="#293357" strokeDasharray="0.1" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            payload={[
              { value: 'Sales Brokerage', type: 'rect', id: 'Sales', color: '#8884d8' },
              { value: 'Unit Value', type: 'rect', id: 'Logistic', color: '#82ca9d' },
              { value: 'Fintech', type: 'rect', id: 'Fintech', color: '#FFCF54' },
              { value: 'Subscription', type: 'rect', id: 'Subscription', color: '#0085FF' }
            ]}
          />
          <Bar dataKey="Sales" fill="#8884d8" />
          <Bar dataKey="Logistic" fill="#82ca9d" />
          <Bar dataKey="Fintech" fill="#FFCF54" />
          <Bar dataKey="Subscription" fill="#0085FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}