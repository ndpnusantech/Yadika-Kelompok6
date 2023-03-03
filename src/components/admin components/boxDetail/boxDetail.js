import "./boxDetail.css";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const data = [

    { name: 'product', value: 200 },
    { name: 'expired', value: 100 },
    { name: 'user', value: 425 },
    { name: 'income', value: 1000 }

];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const charto = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const dataBalok = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];




const BoxDetail = () => {
    return (
        <div className="main-box">

          

            <div className="title"><p>Dashboard</p></div>
            <div className="card">
                <div className="produk">
                    <p>Produk</p>
                    <p>200</p>
                </div>


                <div className="expired">
                    <p>expired</p>
                    <p>10</p>
                </div>

                <div className="user">
                    <p>user</p>
                    <p>425</p>
                </div>

                <div className="income">
                    <p>income</p>
                    <p>1000000</p>
                </div>
            </div>


            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={2000} height={2000}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={true}
                            label={charto}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="Balok">

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={dataBalok}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="uv" fill="#ffc658" />
                    </BarChart>
                </ResponsiveContainer>
            </div>







        </div>

    );
}


export default BoxDetail