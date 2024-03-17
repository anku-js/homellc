import { useEffect, useState, memo } from "react";
import "./Graph.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const historyFileds: Record<string, string> = {
  Today: "today",
  "Last Week": "lastWeek",
  "Last Month": "lastMonth",
};

interface History {
  id: number;
  hour?: string;
  day?: string;
  date?: number;
  minTemp: number;
  maxTemp: number;
}

function Graph({ selected }: { selected: string }) {

  const [historyWeather, setHistoryWeather] = useState({
    minTemp: [0],
    maxTemp: [0],
    labels: [0],
  });
  const [isLoading, setIsLoading] = useState(false);
  const options = {
    responsive: true,
    tooltips: { enabled: false },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = historyWeather.labels;

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: historyWeather.minTemp,
        // borderColor: "rgb(53, 162, 235)",
        // backgroundColor: "rgba(53, 162, 235, 0.5)",
        lineTension: 0.4,
        borderColor: "#ffa136",
        borderWidth: 1,
        spanGaps: false,
        backgroundColor: "#ffa136",
        pointStyle: "line",
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        fill: true,
        label: "Dataset 2",
        data: historyWeather.maxTemp,
        // borderColor: "rgb(53, 162, 235)",
        // backgroundColor: "rgba(53, 162, 235, 0.5)",
        lineTension: 0.4,
        borderColor: "#ffd9b1",
        borderWidth: 1,
        spanGaps: false,
        backgroundColor: "#ffd9b1",
        pointStyle: "line",
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  useEffect(() => {
    setIsLoading(true);
    async function getWeatherHistory() {
      const response = await fetch(
        `https://my-json-server.typicode.com/anku-js/homellc/${historyFileds[selected]}`
      );
      const responsJson: History[] = await response.json();
      const minTemp = responsJson.map((item) => item.minTemp);
      const maxTemp = responsJson.map((item) => item.maxTemp);
      const labels = responsJson.map((item) => item.id);
      setHistoryWeather({
        ...historyWeather,
        minTemp: minTemp,
        maxTemp: maxTemp,
        labels,
      });
      setIsLoading(false);
    }

    getWeatherHistory();
  }, [selected]);

  return (
    <div className="graph">
      {isLoading ? <p>Loading...</p> : <Line options={options} data={data} />}
    </div>
  );
}

export default memo(Graph);
