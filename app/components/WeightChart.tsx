import { useEffect, useState } from "react";
import type { weightRec } from "~/routes/weight-dashboard";

interface WeightChartProps {
  data: weightRec[];
}

const WeightChart = ({ data }: WeightChartProps) => {
  const [URL, setURL] = useState<string>();
  const mon: Array<string> = [];
  const we: Array<number> = [];
  data.map((m) => {
    mon.push(m.date + "-" + m.month);
    we.push(m.weight);
  });
  const chart = {
    type: "line",
    data: {
      labels: mon,
      datasets: [
        {
          label: "Weights",
          data: we,
        },
      ],
    },
  };
  const jsonChartString = JSON.stringify(chart);
  const encodedChartParam = encodeURIComponent(jsonChartString);
  useEffect(() => {
    const fetchData = async () => {
      const url = await fetch(
        `https://quickchart.io/chart?chart=${encodedChartParam}&backgroundColor=white&width=500&height=300&devicePixelRatio=1.0&format=png&version=2.9.3`
      );
      setURL(url.url);
    };
    fetchData();
  },[encodedChartParam]);

  return (
    <div className="flex justify-center items-center w-full">
      <img src={URL} alt="data" className="max-w-full h-auto" />
    </div>
  );
};

export default WeightChart;
