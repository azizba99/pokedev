"use client";
import usePoleDexStore from "@/store/pokedex";
import React, { FC } from "react";
import PokemonPage from "./PokemonPage";
import SearchPage from "./SearchPage";

interface Props {
  ids: number[];
}
const HomePage: FC<Props> = ({ ids }) => {
  const value = usePoleDexStore((state) => state.value);

  if (value) return <PokemonPage value={value} />;

  return <SearchPage ids={ids} />;
};

export default HomePage;
