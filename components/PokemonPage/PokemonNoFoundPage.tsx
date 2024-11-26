import usePoleDexStore from "@/store/pokedex";
import Image from "next/image";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

const PokemonNoFoundPage = () => {
  const setValue = usePoleDexStore((state) => state.setValue);

  return (
    <div className="h-screen bg-[#FE5858] pt-8 px-16">
      <div className="flex justify-between w-full">
        <button
          className="text-[#fafafa] relative z-10"
          onClick={() => {
            setValue(undefined);
          }}
        >
          <FaAngleLeft size={70} />
        </button>
        <p
          className="text-[75px] text-white"
          style={{ fontFamily: "Single Day" }}
        >
          No Pokemon Found!
        </p>
        <div className="w-[70px]" />
      </div>
      <Image
        src="/image5.svg"
        alt="pokemon"
        width={300}
        height={300}
        className="mx-auto"
      />
    </div>
  );
};

export default PokemonNoFoundPage;
