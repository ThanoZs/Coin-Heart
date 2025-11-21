import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (!historicalData || !historicalData.prices) return;

    const chartData = [["Date", "Prices"]];
    const dailyData = {}; // to keep only one price per day

    // Aggregate data: take last price of each day
    historicalData.prices.forEach(([timestamp, price]) => {
      const date = new Date(timestamp).toLocaleDateString().slice(0, -5);
      dailyData[date] = price; // last price for the day
    });

    // Keep only the latest 10 days
    const last10Days = Object.entries(dailyData)
      .slice(-10)
      .map(([date, price]) => [date, price]);

    chartData.push(...last10Days);
    setData(chartData);
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="400px"
      legendToggle
    />
  );
};

export default LineChart;
