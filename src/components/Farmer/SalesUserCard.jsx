import * as React from "react";

function SalesUserCard({ name, id, phone }) {
  return (
    <div className="flex gap-5 justify-between px-3.5 py-6 w-full rounded-xl border border-gray-200 border-solid bg-stone-50 shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
      <div>
        <ul>
          <li>{name}</li>
        </ul>
        <span className="text-xs text-zinc-500">{id}</span>
        <br />
        <span className="text-xs text-zinc-500">{phone}</span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c14b2682a7af4fe0f500691ab3349ce09f7cfb34d0e8b32d05225834d203310d?placeholderIfAbsent=true&apiKey=75b8c1370edd446e9805632d368e23e9"
        alt=""
        className="object-contain shrink-0 my-auto w-6 aspect-square"
      />
    </div>
  );
}

export default SalesUserCard;
