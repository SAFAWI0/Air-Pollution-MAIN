import { Card } from "../../Components/Card/card";
import { Chart } from "../../Components/Chart/chart";
import Header from "../../Components/Header/header";
import { Table } from "../../Components/Table/table";

export const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Card />
      <Table/>
      <Chart/>
    </div>
  );
};
