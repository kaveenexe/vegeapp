import * as React from "react";

export function ValueCard({ label, unit, value }) {
  return (
    <div className="flex flex-col flex-1">
      <div className="text-xs text-black text-opacity-40">
        {label} <span className="text-xs leading-3">({unit})</span>
      </div>
      <div className="self-start mt-1.5 text-xs text-black text-opacity-90">{value}</div>
    </div>
  );
}
