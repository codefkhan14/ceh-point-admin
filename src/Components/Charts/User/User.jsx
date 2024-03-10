import "../allCharts.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function User({ title, data, dataKey, grid }) {
    const styleChart = {
        backgroundColor: "rgba(255,214,107,0.16)",
    }
    return (
        <div className="chart" style={styleChart}>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={2000 / 1360}>
                <LineChart
                    layout="horizontal"
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" type="category" />
                    <YAxis type="number" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#293357" strokeDasharray="0.1" />}
                    <Legend align="left" 
                        payload={[
                            { value: 'Listing progression', type: 'rect', id: 'listing', color: '#8884d8' },
                            { value: 'Projected user base @ 5% of total listings (Progression)', type: 'rect', id: 'userbase', color: '#82ca9d' },
                            { value: 'Projected paid users @ (2 to 4)% of total users/Qtr', type: 'rect', id: 'paiduser', color: '#FFCF54' },
                        ]}
                    />
                    <Line dataKey="listing" stroke="#8884d8" strokeWidth={5} />
                    <Line dataKey="userbase" stroke="#82ca9d" strokeWidth={5} />
                    <Line dataKey="paiduser" stroke="#FFCF54" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}