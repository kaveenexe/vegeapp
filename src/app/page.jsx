import { StatCard } from "@/components/Farmer/StatCard";

export default function Home() {
  return (
    <div className="p-6">
      <div className="flex">
        <StatCard title="Number of Farmers" value="1500" />
        <StatCard title="Grow Areas" value="500" />
        <StatCard title="No of Collectors" value="200" />
        <StatCard title="Number of Wholesale Buyers" value="2000" />
      </div>
      <div className="my-5 ml-5">
        <div className="flex w-full mr-5 mt-5">
          <div className="bg-[#baffba] flex justify-between w-1/2 mr-5 rounded-md p-3">
            <div className="">
              <h3 className="text-xl font-semibold mb-1">Carrot</h3>
              <p>Rs.135.00</p>
            </div>
            <h1 className="text-4xl font-semibold">150T</h1>
          </div>
          <div className="bg-[#baffba] flex justify-between w-1/2 mr-5 rounded-md p-3">
            <div className="">
              <h3 className="text-xl font-semibold mb-1">Cabbage</h3>
              <p>Rs.135.00</p>
            </div>
            <h1 className="text-4xl font-semibold">150T</h1>
          </div>
        </div>
        <div className="flex w-full mr-5 mt-5">
          <div className="bg-[#baffba] flex justify-between w-1/2 mr-5 rounded-md p-3">
            <div className="">
              <h3 className="text-xl font-semibold mb-1">Potato</h3>
              <p>Rs.135.00</p>
            </div>
            <h1 className="text-4xl font-semibold">150T</h1>
          </div>
          <div className="bg-[#baffba] flex justify-between w-1/2 mr-5 rounded-md p-3">
            <div className="">
              <h3 className="text-xl font-semibold mb-1">Capsicum</h3>
              <p>Rs.135.00</p>
            </div>
            <h1 className="text-4xl font-semibold">150T</h1>
          </div>
        </div>
        <div className="flex w-full mr-5 mt-5">
          <div className="bg-[#baffba] flex justify-between w-1/2 mr-5 rounded-md p-3">
            <div className="">
              <h3 className="text-xl font-semibold mb-1">Brinjal</h3>
              <p>Rs.135.00</p>
            </div>
            <h1 className="text-4xl font-semibold">150T</h1>
          </div>
          <div className="bg-[#baffba] flex justify-between w-1/2 mr-5 rounded-md p-3">
            <div className="">
              <h3 className="text-xl font-semibold mb-1">Leek</h3>
              <p>Rs.135.00</p>
            </div>
            <h1 className="text-4xl font-semibold">150T</h1>
          </div>
        </div>
      </div>

      
    </div>
  );
}
