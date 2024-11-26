"use client";

import React, { FC, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_ID_OR_NAME } from "@/graphql/queries";
import usePoleDexStore from "@/store/pokedex";
import classNames from "classnames";
import { FaAngleLeft } from "react-icons/fa";
import { getColor } from "@/utils";
import PokemonGlobalDetails from "./PokemonGlobalDetails";
import PokemonNoFoundPage from "./PokemonNoFoundPage";
import PokemonStats from "./PokemonStats";
import PokemonEvolution from "./PokemonEvolution";

const PokemonPage: FC<{ value: string }> = ({ value }) => {
  const [selectedTab, setSelectedTab] = useState<string>("STATS");

  // const value = usePoleDexStore((state) => state.value!);
  const setValue = usePoleDexStore((state) => state.setValue);

  const { data, loading, error } = useQuery(GET_POKEMON_BY_ID_OR_NAME, {
    variables: { name: value, id: parseInt(value) },
  });

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-20 h-20 text-gray-200 animate-spin fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  if (error) return <PokemonNoFoundPage />;

  const pokemonData = data?.pokemon_v2_pokemon[0];

  const primaryColor = getColor(
    pokemonData.pokemon_v2_pokemontypes.map((e) => e.pokemon_v2_type.name)[0]
  );

  return (
    <div
      id="pokemon-page"
      style={{ backgroundColor: primaryColor }}
      className={classNames(
        "h-screen w-screen pt-8 px-4 md:px-8 lg:px-16 flex flex-col"
      )}
    >
      <button
        id="back-button"
        className="text-[#fafafa] relative z-10"
        onClick={() => {
          setValue(undefined);
        }}
      >
        <FaAngleLeft size={70} />
      </button>

      <div className="flex-1 bg-white rounded-t-3xl mt-8 px-4">
        <PokemonGlobalDetails pokemonData={pokemonData} />
        <div className="flex justify-center">
          <div className="flex pt-8 w-full max-w-[1200px] overflow-auto">
            <TabItem
              tabName={"STATS"}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              color={primaryColor}
            />
            <TabItem
              tabName={"EVOLUTIONS"}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              color={primaryColor}
            />
            <TabItem
              tabName={"MOVES"}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              color={primaryColor}
            />
          </div>
        </div>

        <div className="pt-6">
          {selectedTab === "STATS" && (
            <PokemonStats
              stats={pokemonData.pokemon_v2_pokemonstats}
              color={primaryColor}
            />
          )}
          {selectedTab === "EVOLUTIONS" && (
            <PokemonEvolution
              id={pokemonData.pokemon_v2_pokemonspecy.evolution_chain_id}
              color={primaryColor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;

interface TabItemProps {
  tabName: string;
  selectedTab: string;
  setSelectedTab: (tabName: string) => void;
  color: string;
}

const TabItem: FC<TabItemProps> = ({
  tabName,
  selectedTab,
  setSelectedTab,
  color,
}) => {
  const isSelected = selectedTab === tabName;
  return (
    <button
      style={
        isSelected ? { backgroundColor: color, color: "white" } : { color }
      }
      id={tabName}
      onClick={() => setSelectedTab(tabName)}
      className={"px-4 py-2 w-full text-lg uppercase rounded-full"}
    >
      {tabName}
    </button>
  );
};
