"use client";

import React from "react";
import { FarmerCard } from "../../components/Farmer/FarmerCard";
import { StatCard } from "../../components/Farmer/StatCard";
import SalesOverview from "../../components/Farmer/SalesOverview";
import SalesUserCard from "../../components/Farmer/SalesUserCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const farmers = [
  { id: "1", name: "Sathira Vikum Isiwaruna", nic: "20005604308", phone: "076 6578225" },
  { id: "2", name: "Kasun Perera", nic: "19905604308", phone: "076 1234567" },
  { id: "3", name: "Nimal Silva", nic: "19855604308", phone: "076 7654321" },
];

const metrics = [
  { label: "Value - 01", value: "15" },
  { label: "Value - 02", value: "15,423" },
  { label: "Value - 03", value: "18,423" },
  { label: "Value - 04", value: "22,423" },
];

const SalesUsers = [
  {
    name: "Sathira Vikum Isiwaruna",
    id: "20005604308",
    phone: "076 6578225",
  },
  {
    name: "Sathira Vikum Isiwaruna",
    id: "20005604308",
    phone: "076 6578225",
  },
  {
    name: "Sathira Vikum Isiwaruna",
    id: "20005604308",
    phone: "076 6578225",
  },
];

export default function FarmerDashboard() {
  return (
    <div className="flex flex-col p-6 w-full">
      <div className="w-full max-md:mr-1.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[51%] max-md:ml-0 max-md:w-full">
            <div className="grow px-8 py-10 w-full bg-white rounded-xl border border-gray-200 border-solid shadow-[0px_1px_1px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-4 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                  <h1 className="self-stretch my-auto text-2xl font-medium text-black max-md:mt-10">Farmer Registration</h1>
                </div>
                <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                  <button className="grow px-5 py-2.5 w-full text-base font-semibold text-white bg-green-400 rounded-xl max-md:mt-10 hover:bg-green-500 transition-colors">
                    Add Farmer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <StatCard title="Number of Farmers" value="1500" />
          <StatCard title="Grow Areas" value="500" />
        </div>
      </div>

      <div className="flex justify-between mt-7 w-full text-2xl font-medium text-black max-md:max-w-full">
        <h2 className="grow shrink w-[147px]">Farmer Details</h2>
      </div>

      <div className="mt-7 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:w-full">
            <div className="space-y-3">
              {farmers.map((farmer) => (
                <FarmerCard key={farmer.id} farmer={farmer} />
              ))}
            </div>
          </div>

          <div className="w-1/2 max-md:w-full">
            <div className="bg-white rounded-xl p-6 shadow-sm w-full">
              <SalesOverview />
            </div>

            <div className="flex flex-col text-base font-medium text-black rounded-none max-w-full">
              {SalesUsers.map((user, index) => (
                <div key={index} className={index > 0 ? "mt-5" : ""}>
                  <SalesUserCard name={user.name} id={user.id} phone={user.phone} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
