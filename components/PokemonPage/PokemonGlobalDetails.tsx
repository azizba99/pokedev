import { getColor } from "@/utils";
import { capitalize } from "lodash";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  pokemonData: {
    name: string;
    pokemon_v2_pokemontypes: { pokemon_v2_type: { name: string } }[];
    pokemon_v2_pokemonsprites: {
      sprites: { other: { "official-artwork": { front_default: string } } };
    }[];
    pokemon_v2_pokemonspecy: {
      pokemon_v2_pokemonspeciesflavortexts: {
        flavor_text: string;
        language_id: number;
      }[];
    };
  };
}

const PokemonGlobalDetails: FC<Props> = ({ pokemonData }) => {
  const name: string = pokemonData.name;
  const types: string[] = pokemonData.pokemon_v2_pokemontypes.map(
    (e) => e.pokemon_v2_type.name
  );
  const image: string =
    pokemonData.pokemon_v2_pokemonsprites[0].sprites.other["official-artwork"]
      .front_default;
  const flavorTexts: { flavor_text: string; language_id: number }[] =
    pokemonData.pokemon_v2_pokemonspecy?.pokemon_v2_pokemonspeciesflavortexts?.filter(
      (e) => e.language_id === 9
    );

  return (
    <>
      <div className="flex justify-center mt-[-85px] relative">
        <Image id="image" src={image} alt="pokemon" width={170} height={170} />
      </div>
      <p id="name" className="text-center text-[40px] text-[#4F4F4F]">
        {capitalize(name)}
      </p>
      <div className="flex justify-center gap-4" id="types">
        {types.map((type) => (
          <div
            key={type}
            style={{ backgroundColor: getColor(type) }}
            className={"px-8 py-2 rounded-full text-white text-lg uppercase"}
          >
            {type}
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-[#4F4F4F] mt-8" id="description">
        {flavorTexts[flavorTexts.length - 1]?.flavor_text}
      </p>
    </>
  );
};

export default PokemonGlobalDetails;
