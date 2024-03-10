import "../allCharts.css";
import { BarChart, Bar, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { expenseData } from "../../../dummydata";


const CustomLabel = ({ x, y, value, width }) => (
  <text x={x + width / 2} y={y - 10} fill="#8884d8" textAnchor="middle">
    ₹{value/1000}K
  </text>
);

const styleChart = {
  backgroundColor: "rgba(236,255,246)"
}

expenseData.forEach(item => {
    item.Profit = item.revenue - item.expense;
  });

export default function Expense({ title, data, dataKey, grid }) {
  return (
    <div className="chart" style={styleChart}>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2000/1000}>
        <BarChart
          width={500}
          height={300}
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
              { value: 'Revenue Yearwise', type: 'rect', id: 'revenue', color: '#8884d8' },
              { value: 'Expense Yearwise', type: 'rect', id: 'expense', color: '#82ca9d' },
              { value: 'Profit/Loss', type: 'rect', id: 'Profit', color: '#FFCF54' },
            ]}
          />
          <Bar dataKey="revenue" fill="#8884d8" barSize={40}>
            <LabelList content={<CustomLabel />} />
          </Bar>
          <Bar dataKey="expense" fill="#82ca9d" barSize={30}/>
          <Bar dataKey="Profit" fill="#FFCF54" barSize={30}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}