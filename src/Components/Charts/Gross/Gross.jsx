import "../allCharts.css";
import { BarChart, Bar, LabelList, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CustomLabel = ({ x, y, value, width }) => (
    <text x={x + width / 2} y={y - 10} fill="#8884d8" textAnchor="middle">
      ₹{value}K
    </text>
  );


export default function Gross({ title, data, dataKey, grid }) {
    const styleChart = {
        backgroundColor: "#EDFFEDE5",
    }
    return (
        <div className="chart" style={styleChart}>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={2000/1360}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {grid && <CartesianGrid stroke="#293357" strokeDasharray="0.1" />}
                <Legend />
                <Bar dataKey="sales" fill="#46A6FF" barSize={30}>
                    <LabelList content={<CustomLabel />} />
                </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}