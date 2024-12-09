import React from "react";
import PropTypes from "prop-types";

export function StatCard({ title, value }) {
  return (
    <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start py-5 pr-12 pl-5 w-full font-medium text-black bg-white rounded-xl border border-gray-200 border-solid shadow-[0px_1px_1px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:mt-4">
        <div className="text-lg">{title}</div>
        <div className="mt-1.5 text-4xl">{value}</div>
      </div>
    </div>
  );
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
