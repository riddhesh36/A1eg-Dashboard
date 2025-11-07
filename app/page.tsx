import AppBarCharts from "@/components/AppBarCharts";
import AppRadialChart from "@/components/AppRadialChart";
import CardList from "@/components/CardList";
import AppPieChart from "@/components/AppPieChart";
import React from "react";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
          <div className="bg-primary-foreground p-4 rounded-md lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarCharts /></div>
          <div className="bg-primary-foreground p-4 rounded-md"><CardList title="Latest Transactions"/></div>
          <div className="bg-primary-foreground p-4 rounded-md"><AppPieChart /></div>
          <div className="bg-primary-foreground p-4 rounded-md"><TodoList /></div>
          <div className="bg-primary-foreground p-4 rounded-md lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppRadialChart /></div>
          <div className="bg-primary-foreground p-4 rounded-md"><CardList title="Top Payer" /></div>
      </div>
    </div>
  );
}
