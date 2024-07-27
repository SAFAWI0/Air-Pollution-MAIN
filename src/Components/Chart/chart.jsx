import { finalScores } from "../../fake";
import "./chart.css";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Element } from "react-scroll";

export const Chart = () => {
  const axisStyle = {
    fill: "#333", 
    fontSize: "14px", 
  };

  return (
      <Element name="section3">
    <div className="chart">
      <div className="title">
        <span>مخطط بياني يوضح تفاصيل دقيقة للتلوث الهواء</span>
      </div>

      <div className="line-chart">
        <LineChart
          width={900}
          height={350}
          data={finalScores}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <Line type="monotone" dataKey="value" stroke="#3366CC" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="dayNum"
            tick={{ fill: "#333", fontSize: "14px", fontWeight: "bold" }}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: "#333", fontSize: "14px", fontWeight: "bold" }}
          />
          <Tooltip />
        </LineChart>
      </div>
    </div>
      </Element>
  );
};
