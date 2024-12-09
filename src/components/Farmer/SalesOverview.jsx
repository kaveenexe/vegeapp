import * as React from "react";
import { ValueCard } from "./ValueCard";
import { PieChart } from "./PieChart";

const salesData = [
  { label: "Value - 01", unit: "lt", value: "12,423", percentage: 30 },
  { label: "Value - 02", unit: "lt", value: "12,423", percentage: 50 },
  { label: "Value - 03", unit: "lt", value: "12,423", percentage: 25 },
  { label: "Value - 04", unit: "lt", value: "12,423", percentage: 25 },
];

function SalesOverview() {
  return (
    <div className="flex flex-col pb-6 font-medium max-w">
      <div className="flex gap-5 justify-between w-full">
        <h1 className="text-2xl text-black">Daily Sales Overview</h1>
        <div className="flex gap-3 self-start mt-2 text-xs text-right text-zinc-500">
          <time dateTime="2023-10-28">28 Oct</time>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5a3944ba5b2d33dcf67a448f6e5b0fc71441235892332ad0eeb77dbd0bc65ed?placeholderIfAbsent=true&apiKey=75b8c1370edd446e9805632d368e23e9"
            alt="Calendar icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col self-center py-px pl-4 mt-9 max-w-full w-[317px]">
        <PieChart data={salesData} />
        <div className="flex gap-10 mt-4">
          {salesData.map((item, index) => (
            <ValueCard key={index} label={item.label} unit={item.unit} value={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesOverview;
