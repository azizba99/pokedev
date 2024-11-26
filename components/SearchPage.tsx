"use client";
import usePoleDexStore from "@/store/pokedex";
import Image from "next/image";
import React, { FC, useState } from "react";

interface Props {
  ids: number[];
}
const SearchPage: FC<Props> = ({ ids }) => {
  const [query, setQuery] = useState("");

  const setValue = usePoleDexStore((state) => state.setValue);

  const searchButton = () => {
    setValue(query);
  };

  const randomButton = () => {
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    setValue(randomId.toString());
  };

  return (
    <div className="h-screen w-screen bg-cover bg-[url('/image1.png')] flex justify-center items-center">
      <div className="bg-white p-8 w-[500px] max-w-[90%] border-2 border-[#595854] rounded-lg">
        <div className="flex justify-center">
          <Image src="/Pokeball.png" width={80} height={80} alt="Pokeball" />
        </div>

        <div className="pb-8">
          <label className="font-medium text-[#767676]">
            Pokemon Name or Id
          </label>
          <input
            value={query}
            id="input"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-[#CFC7C2] rounded-sm px-4 py-2"
          />
        </div>

        <div className="flex justify-between">
          <button
            className="bg-[#FE5858] rounded-md font-bold text-white w-24 py-2"
            onClick={searchButton}
            id="search"
          >
            Search
          </button>
          <button
            className="bg-[#FE5858] rounded-md font-bold text-white w-24 py-2"
            onClick={randomButton}
            id="random"
          >
            Random
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
