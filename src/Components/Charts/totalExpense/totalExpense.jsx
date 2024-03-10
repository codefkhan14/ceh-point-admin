import "../allCharts.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function totalExpense({ data, grid }) {

  const styleChart = {
    backgroundColor: "rgba(255,204,222,0.29)",
  }
  return (
    <div className="chart" style={styleChart}>
      <ResponsiveContainer width="100%" aspect={2000 / 1000}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid stroke="#293357" strokeDasharray="0.1" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="one" stackId="a" fill="#8884d8" />
          <Bar dataKey="two" stackId="a" fill="#82ca9d" />
          <Bar dataKey="three" stackId="a" fill="#FFCF54" />
          <Bar dataKey="four" stackId="a" fill="#5b9bd5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}