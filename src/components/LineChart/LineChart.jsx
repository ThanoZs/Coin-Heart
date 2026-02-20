import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import './LineChart.css'; // <-- Import CSS

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (!historicalData || !historicalData.prices) return;

    const chartData = [["Date", "Prices"]];
    const dailyData = {};

    historicalData.prices.forEach(([timestamp, price]) => {
      const date = new Date(timestamp).toLocaleDateString().slice(0, -5);
      dailyData[date] = price;
    });

    const last10Days = Object.entries(dailyData)
      .slice(-10)
      .map(([date, price]) => [date, price]);

    chartData.push(...last10Days);
    setData(chartData);
  }, [historicalData]);

  const options = {
    hAxis: {
      slantedText: false,
      maxAlternation: 1,
      maxTextLines: 1,
      textStyle: { fontSize: 12 },
    },
    vAxis: {
      textStyle: { fontSize: 12 },
    },
    chartArea: {
      left: 65,
      right: 20,
      top: 20,
      bottom: 75,
      width: "100%",
      height: "80%",
    },
    legend: { position: "none" },
  };

  return (
    <div className="chart-wrapper">
      <Chart
        chartType="LineChart"
        data={data}
        height="376px"
        options={options}
      />
    </div>
  );
};

export default LineChart;
