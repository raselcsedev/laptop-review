import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, Tooltip, XAxis, YAxis } from 'recharts';
import './MyCharts.css'

const MyRecharts = () => {
  const data = [
    {
      "month": "Mar",
      "investment": 100000,
      "sell": 241,
      "revenue": 10401
    },
    {
      "month": "Apr",
      "investment": 200000,
      "sell": 423,
      "revenue": 24500
    },
    {
      "month": "May",
      "investment": 500000,
      "sell": 726,
      "revenue": 67010
    },
    {
      "month": "Jun",
      "investment": 500000,
      "sell": 529,
      "revenue": 40405
    },
    {
      "month": "Jul",
      "investment": 600000,
      "sell": 601,
      "revenue": 50900
    },
    {
      "month": "Aug",
      "investment": 700000,
      "sell": 670,
      "revenue": 61000
    }
  ]
  return (
    <div className='my-charts'>
      <div className='line-chart'>
        <LineChart width={500} height={300} data={data}>
          <Line dataKey={'month'}></Line>
          <Line dataKey={'investment'}></Line>
          <Line dataKey={'sell'}></Line>
          <Line dataKey={'revenue'}></Line>
          <Tooltip></Tooltip>
          <XAxis></XAxis>
          <YAxis></YAxis>
        </LineChart>
      </div>
      <div>
        <AreaChart width={500} height={300} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          <Tooltip></Tooltip>
        </AreaChart>
      </div>
      <div>
      <BarChart width={500} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis ></YAxis>
  <Tooltip />
  <Legend />
  <Bar dataKey="investment" fill="#8884d8" />
  <Bar dataKey="sell" fill="#82ca9d" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>
      </div>
      <div>
      <ComposedChart width={500} height={300} data={data}>
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="sell" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
</ComposedChart>

      </div>
    </div>
  );
};

export default MyRecharts;