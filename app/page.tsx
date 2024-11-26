import { getClient } from "@/graphql/apollo-client";
import { GET_POKEMON_IDS } from "@/graphql/queries";
import HomePage from "@/components/HomePage";

interface GET_POKEMON_IDS {
  pokemon_v2_pokemon: { id: number }[];
}

export default async function Home() {
  const client = getClient();

  const { data } = await client.query<GET_POKEMON_IDS>({
    query: GET_POKEMON_IDS,
  });

  return <HomePage ids={data.pokemon_v2_pokemon.map((e) => e.id)} />;
}
