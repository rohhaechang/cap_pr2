'use client'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  params: { [key: string]: { [key: string]: any } };
  name: string;
}

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
}

interface LineChartData {
  labels: string[];
  datasets: Dataset[];
}

export default function LineChart({params, name}: Props) {
  const backgroundColors = ["#0CD3FF", "#FF5733", "#33FF57", "#5733FF", "#FF33EC", "#FFD700", "#00CED1", "#FF6347", "#8A2BE2", "#32CD32"];
  const labels1 = Object.keys(params[Object.keys(params)[0]]);
  const label1 = Object.keys(params)
  const data1 = label1.map(item => params[item]).map(val => Object.values(val))

  
  const data2: any = label1.map((label, index) => ({
    label: label,
    data: data1[index].map(value => parseFloat(value)),
    backgroundColor: backgroundColors[index],
    borderColor: backgroundColors[index],
  }))


  const data3: LineChartData = {
    labels: labels1,
    datasets: data2
  };
  console.log(data3)

  const labels = ['2021', '2022', '2023'];

  const data = {
    labels,
    datasets: [
      {
        label: "React",
        data: [77277, 85629, 96175],
        backgroundColor: "#0CD3FF",
        borderColor: "#0CD3FF",
      },
      {
        label: "Angular",
        data: [55966, 61100, 60865],
        backgroundColor: "#a6120d",
        borderColor: "#a6120d",
      },
      {
        label: "Vue",
        data: [27183, 29527, 31977],
        backgroundColor: "#FFCA29",
        borderColor: "#FFCA29",
      },
    ],
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
      
      <div style={{ width: 660, height: 300 }}>
        <Line options={{
                  responsive: true,
                  interaction: {
                      intersect: false,
                  },
                  scales: {
                      x: {
                          grid: {
                              display: false,
                          },
                      },
                  },
                  plugins: {
                      legend: {
                          position: "bottom",
                      },
                  },
              }} data={data3} />
      </div>
    </div>
  );
};