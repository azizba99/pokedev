import { gql } from "@apollo/client";

export const GET_POKEMON_IDS = gql(/* GraphQL */ `
  query GetPokemonIds {
    pokemon_v2_pokemon {
      id
    }
  }
`);

export const GET_POKEMON_BY_ID_OR_NAME = gql(/* GraphQL */ `
  query GetPokemonByIdOrName($name: String, $id: Int) {
    pokemon_v2_pokemon(
      where: { _or: [{ name: { _eq: $name } }, { id: { _eq: $id } }] }
    ) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonspecy {
        evolution_chain_id
        pokemon_v2_pokemonspeciesflavortexts {
          flavor_text
          language_id
          version_id
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          pokemon_v2_statnames {
            name
            language_id
          }
        }
      }
    }
  }
`);
