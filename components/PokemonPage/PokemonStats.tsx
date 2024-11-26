import React, { FC } from "react";

const maxStat = 255;

interface Props {
  stats: {
    base_stat: number;
    pokemon_v2_stat: {
      pokemon_v2_statnames: {
        name: string;
        language_id: number;
      }[];
    };
  }[];
  color: string;
}

const PokemonStats: FC<Props> = ({ stats, color }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[407px]" id="stat-block">
        {stats.map((e, index) => (
          <div key={index} className="flex items-center gap-2 py-1">
            <p className="w-36 uppercase whitespace-nowrap">
              {
                e.pokemon_v2_stat.pokemon_v2_statnames.find(
                  (stateNames) => stateNames.language_id === 9
                )!.name
              }
            </p>

            <div className="w-full max-w-[255px] bg-gray-200 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: `${(e.base_stat / maxStat) * 100}%`,
                  backgroundColor: color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
