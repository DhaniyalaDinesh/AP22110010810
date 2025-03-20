import { Line } from "react-chartjs-2";
import Header from "./components/Header";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Followers Growth",
      data: [100, 200, 400, 600, 900],
      borderColor: "blue",
      borderWidth: 2,
    },
  ],
};

const Dashboard = () => (
  <div className="p-4">
    <Header />
    <h2 className="text-xl font-bold mt-4">Followers Growth</h2>
    <Line data={data} />
  </div>
);

export default Dashboard;