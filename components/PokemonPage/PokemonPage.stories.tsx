import type { Meta, StoryObj } from "@storybook/react";
import PokemonPage from "./PokemonPage";
import { GET_POKEMON_BY_ID_OR_NAME } from "@/graphql/queries";
import { MockedProvider } from "@apollo/client/testing";
import { ApolloWrapper } from "../ApolloWrapper";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "PokemonPage",
  component: PokemonPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component: "This component contain all components of the PokemonPage.",
      },
    },

    apolloClient: {
      mocks: [
        {
          request: {
            query: GET_POKEMON_BY_ID_OR_NAME,
            variables: {
              id: 1,
              name: "1",
            },
          },
          result: {
            data: {
              data: {
                pokemon_v2_pokemon: [
                  {
                    id: 10005,
                    name: "wormadam-trash",
                    pokemon_v2_pokemontypes: [
                      {
                        pokemon_v2_type: {
                          name: "bug",
                          __typename: "pokemon_v2_type",
                        },
                        __typename: "pokemon_v2_pokemontype",
                      },
                      {
                        pokemon_v2_type: {
                          name: "steel",
                          __typename: "pokemon_v2_type",
                        },
                        __typename: "pokemon_v2_pokemontype",
                      },
                    ],
                    pokemon_v2_pokemonsprites: [
                      {
                        sprites: {
                          other: {
                            home: {
                              front_shiny:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/10005.png",
                              front_female: null,
                              front_default:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10005.png",
                              front_shiny_female: null,
                            },
                            showdown: {
                              back_shiny:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/10005.gif",
                              back_female: null,
                              front_shiny:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10005.gif",
                              back_default:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/10005.gif",
                              front_female: null,
                              front_default:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10005.gif",
                              back_shiny_female: null,
                              front_shiny_female: null,
                            },
                            dream_world: {
                              front_female: null,
                              front_default:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/413-trash.svg",
                            },
                            "official-artwork": {
                              front_shiny:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10005.png",
                              front_default:
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10005.png",
                            },
                          },
                          versions: {
                            "generation-i": {
                              yellow: {
                                back_gray: null,
                                front_gray: null,
                                back_default: null,
                                front_default: null,
                                back_transparent: null,
                                front_transparent: null,
                              },
                              "red-blue": {
                                back_gray: null,
                                front_gray: null,
                                back_default: null,
                                front_default: null,
                                back_transparent: null,
                                front_transparent: null,
                              },
                            },
                            "generation-v": {
                              "black-white": {
                                animated: {
                                  back_shiny:
                                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/10005.gif",
                                  back_female: null,
                                  front_shiny:
                                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/10005.gif",
                                  back_default:
                                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/10005.gif",
                                  front_female: null,
                                  front_default:
                                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10005.gif",
                                  back_shiny_female: null,
                                  front_shiny_female: null,
                                },
                                back_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/413-trash.png",
                                back_female: null,
                                front_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/413-trash.png",
                                back_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/413-trash.png",
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/10005.png",
                                back_shiny_female: null,
                                front_shiny_female: null,
                              },
                            },
                            "generation-ii": {
                              gold: {
                                back_shiny: null,
                                front_shiny: null,
                                back_default: null,
                                front_default: null,
                                front_transparent: null,
                              },
                              silver: {
                                back_shiny: null,
                                front_shiny: null,
                                back_default: null,
                                front_default: null,
                                front_transparent: null,
                              },
                              crystal: {
                                back_shiny: null,
                                front_shiny: null,
                                back_default: null,
                                front_default: null,
                                back_transparent: null,
                                front_transparent: null,
                                back_shiny_transparent: null,
                                front_shiny_transparent: null,
                              },
                            },
                            "generation-iv": {
                              platinum: {
                                back_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/413-trash.png",
                                back_female: null,
                                front_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/413-trash.png",
                                back_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/413-trash.png",
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/413-trash.png",
                                back_shiny_female: null,
                                front_shiny_female: null,
                              },
                              "diamond-pearl": {
                                back_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/413-trash.png",
                                back_female: null,
                                front_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/413-trash.png",
                                back_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/413-trash.png",
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/413-trash.png",
                                back_shiny_female: null,
                                front_shiny_female: null,
                              },
                              "heartgold-soulsilver": {
                                back_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/413-trash.png",
                                back_female: null,
                                front_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/413-trash.png",
                                back_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/413-trash.png",
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/413-trash.png",
                                back_shiny_female: null,
                                front_shiny_female: null,
                              },
                            },
                            "generation-vi": {
                              "x-y": {
                                front_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/413-trash.png",
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/413-trash.png",
                                front_shiny_female: null,
                              },
                              "omegaruby-alphasapphire": {
                                front_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/413-trash.png",
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/413-trash.png",
                                front_shiny_female: null,
                              },
                            },
                            "generation-iii": {
                              emerald: {
                                front_shiny: null,
                                front_default: null,
                              },
                              "ruby-sapphire": {
                                back_shiny: null,
                                front_shiny: null,
                                back_default: null,
                                front_default: null,
                              },
                              "firered-leafgreen": {
                                back_shiny: null,
                                front_shiny: null,
                                back_default: null,
                                front_default: null,
                              },
                            },
                            "generation-vii": {
                              icons: {
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/413-trash.png",
                              },
                              "ultra-sun-ultra-moon": {
                                front_shiny:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/413-trash.png",
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/413-trash.png",
                                front_shiny_female: null,
                              },
                            },
                            "generation-viii": {
                              icons: {
                                front_female: null,
                                front_default:
                                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/10005.png",
                              },
                            },
                          },
                          back_shiny:
                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/413-trash.png",
                          back_female: null,
                          front_shiny:
                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/413-trash.png",
                          back_default:
                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/413-trash.png",
                          front_female: null,
                          front_default:
                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png",
                          back_shiny_female: null,
                          front_shiny_female: null,
                        },
                        __typename: "pokemon_v2_pokemonsprites",
                      },
                    ],
                    pokemon_v2_pokemonspecy: {
                      evolution_chain_id: 213,
                      pokemon_v2_pokemonspeciesflavortexts: [
                        {
                          flavor_text:
                            "When BURMY evolved, its cloak\nbecame a part of this Pokémon’s\nbody. The cloak is never shed.",
                          language_id: 9,
                          version_id: 12,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Its appearance changes depending\non where it evolved. The materials\non hand become a part of its body.",
                          language_id: 9,
                          version_id: 13,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "When evolving, its body takes in\nsurrounding materials. As a result,\nthere are many body variations.",
                          language_id: 9,
                          version_id: 14,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "It is said that a WORMADAM that\nevolves on a cold day will have a\nthicker cloak.",
                          language_id: 9,
                          version_id: 15,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "It is said that a WORMADAM that\nevolves on a cold day will have a\nthicker cloak.",
                          language_id: 9,
                          version_id: 16,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "À l’évolution, son corps absorbe\nles matériaux à proximité et peut\nainsi présenter divers aspects.",
                          language_id: 5,
                          version_id: 17,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "When evolving, its body takes in\nsurrounding materials. As a result,\nthere are many body variations.",
                          language_id: 9,
                          version_id: 17,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "À l’évolution, son corps absorbe\nles matériaux à proximité et peut\nainsi présenter divers aspects.",
                          language_id: 5,
                          version_id: 18,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "When evolving, its body takes in\nsurrounding materials. As a result,\nthere are many body variations.",
                          language_id: 9,
                          version_id: 18,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "When evolving, its body takes in\nsurrounding materials. As a result,\nthere are many body variations.",
                          language_id: 9,
                          version_id: 21,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "When evolving, its body takes in\nsurrounding materials. As a result,\nthere are many body variations.",
                          language_id: 9,
                          version_id: 22,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "しんかした　ばしょによって　すがたが\nかわる。みぢかにある　ざいりょうが\nからだの　いちぶに　なるのだ。",
                          language_id: 1,
                          version_id: 23,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "진화한 장소에 따라 모습이\n바뀐다. 가까이 있는 재료가\n몸의 일부가 된다.",
                          language_id: 3,
                          version_id: 23,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Son apparence varie selon le lieu d’évolution. Son\ncorps est façonné avec les matériaux à disposition.",
                          language_id: 5,
                          version_id: 23,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Die Umgebung, in der es sich entwickelt, bestimmt\nsein Aussehen. Es formt seinen Körper mithilfe\nder umliegenden Materialien.",
                          language_id: 6,
                          version_id: 23,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Su apariencia varía según dónde evolucione. Los\nmateriales que haya pasan a formar parte de su\ncuerpo.",
                          language_id: 7,
                          version_id: 23,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Il suo aspetto dipende dal luogo in cui si evolve.\nTutto ciò che ha intorno va a costituire il suo corpo.",
                          language_id: 8,
                          version_id: 23,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Its appearance changes depending on where it\nevolved. The materials on hand become a part of\nits body.",
                          language_id: 9,
                          version_id: 23,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "進化した　場所によって\n姿が　変わる。身近にある　材料が\n体の　一部に　なるのだ。",
                          language_id: 11,
                          version_id: 23,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "ミノムッチから　しんかしたとき\nミノが　からだの　いちぶに　なった。\nいっしょう　ミノを　ぬぐことはない。",
                          language_id: 1,
                          version_id: 24,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "도롱충이로부터 진화할 때\n도롱이가 몸의 일부가 되었다.\n일생 도롱이를 벗는 일은 없다.",
                          language_id: 3,
                          version_id: 24,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Quand Cheniti a évolué, sa cape a fusionné avec son\ncorps. Cheniselle ne s’en sépare jamais.",
                          language_id: 5,
                          version_id: 24,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Als sich Burmy entwickelte, wurde sein Umhang\nTeil des Körpers. Es legt den Umhang niemals ab.",
                          language_id: 6,
                          version_id: 24,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Cuando Burmy evolucionó, su caparazón pasó a formar\nparte de este Pokémon.",
                          language_id: 7,
                          version_id: 24,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Con l’evoluzione, il manto di Burmy diventa parte del\ncorpo di questo Pokémon. Non se ne separa mai.",
                          language_id: 8,
                          version_id: 24,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "When Burmy evolved, its cloak became a part of\nthis Pokémon’s body. The cloak is never shed.",
                          language_id: 9,
                          version_id: 24,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "ミノムッチから　進化したとき\nミノが　体の　一部に　なった。\n一生　ミノを　脱ぐことはない。",
                          language_id: 11,
                          version_id: 24,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "しんかした　ばしょによって　すがたが\nかわる。みぢかにある　ざいりょうが\nからだの　いちぶに　なるのだ。",
                          language_id: 1,
                          version_id: 25,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "진화한 장소에 따라 모습이\n바뀐다. 가까이 있는 재료가\n몸의 일부가 된다.",
                          language_id: 3,
                          version_id: 25,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Son apparence varie selon le lieu d’évolution. Son corps est\nfaçonné avec les matériaux à disposition.",
                          language_id: 5,
                          version_id: 25,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Die Umgebung, in der es sich entwickelt, bestimmt sein\nAussehen. Es formt seinen Körper mithilfe der umliegenden\nMaterialien.",
                          language_id: 6,
                          version_id: 25,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Su apariencia varía según dónde evolucione. Los materiales\nque haya pasan a formar parte de su cuerpo.",
                          language_id: 7,
                          version_id: 25,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Il suo aspetto dipende dal luogo in cui si evolve. Tutto ciò\nche ha intorno va a costituire il suo corpo.",
                          language_id: 8,
                          version_id: 25,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Its appearance changes depending on where it\nevolved. The materials on hand become a part of\nits body.",
                          language_id: 9,
                          version_id: 25,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "進化した　場所によって\n姿が　変わる。身近にある　材料が\n体の　一部に　なるのだ。",
                          language_id: 11,
                          version_id: 25,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "ミノムッチから　しんかしたとき\nミノが　からだの　いちぶに　なった。\nいっしょう　ミノを　ぬぐことはない。",
                          language_id: 1,
                          version_id: 26,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "도롱충이로부터 진화할 때\n도롱이가 몸의 일부가 되었다.\n일생 도롱이를 벗는 일은 없다.",
                          language_id: 3,
                          version_id: 26,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Quand Cheniti a évolué, sa cape a fusionné avec son corps.\nCheniselle ne s’en sépare jamais.",
                          language_id: 5,
                          version_id: 26,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Als sich Burmy entwickelte, wurde sein Umhang Teil\ndes Körpers. Es legt den Umhang niemals ab.",
                          language_id: 6,
                          version_id: 26,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Cuando Burmy evolucionó, su caparazón pasó a formar parte\nde este Pokémon.",
                          language_id: 7,
                          version_id: 26,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "Con l’evoluzione, il manto di Burmy diventa parte del corpo\ndi questo Pokémon. Non se ne separa mai.",
                          language_id: 8,
                          version_id: 26,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "When Burmy evolved, its cloak became a part of\nthis Pokémon’s body. The cloak is never shed.",
                          language_id: 9,
                          version_id: 26,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                        {
                          flavor_text:
                            "ミノムッチから　進化したとき\nミノが　体の　一部に　なった。\n一生　ミノを　脱ぐことはない。",
                          language_id: 11,
                          version_id: 26,
                          __typename: "pokemon_v2_pokemonspeciesflavortext",
                        },
                      ],
                      __typename: "pokemon_v2_pokemonspecies",
                    },
                    pokemon_v2_pokemonstats: [
                      {
                        base_stat: 60,
                        pokemon_v2_stat: {
                          pokemon_v2_statnames: [
                            {
                              name: "HP",
                              language_id: 1,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "HP",
                              language_id: 3,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "HP",
                              language_id: 4,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "PV",
                              language_id: 5,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "KP",
                              language_id: 6,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "PS",
                              language_id: 7,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "PS",
                              language_id: 8,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "HP",
                              language_id: 9,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "HP",
                              language_id: 12,
                              __typename: "pokemon_v2_statname",
                            },
                          ],
                          __typename: "pokemon_v2_stat",
                        },
                        __typename: "pokemon_v2_pokemonstat",
                      },
                      {
                        base_stat: 69,
                        pokemon_v2_stat: {
                          pokemon_v2_statnames: [
                            {
                              name: "こうげき",
                              language_id: 1,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "공격",
                              language_id: 3,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "攻擊",
                              language_id: 4,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Attaque",
                              language_id: 5,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Angriff",
                              language_id: 6,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Ataque",
                              language_id: 7,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Attacco",
                              language_id: 8,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Attack",
                              language_id: 9,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "攻击",
                              language_id: 12,
                              __typename: "pokemon_v2_statname",
                            },
                          ],
                          __typename: "pokemon_v2_stat",
                        },
                        __typename: "pokemon_v2_pokemonstat",
                      },
                      {
                        base_stat: 95,
                        pokemon_v2_stat: {
                          pokemon_v2_statnames: [
                            {
                              name: "ぼうぎょ",
                              language_id: 1,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "방어",
                              language_id: 3,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "防禦",
                              language_id: 4,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Défense",
                              language_id: 5,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Verteidigung",
                              language_id: 6,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Defensa",
                              language_id: 7,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Difesa",
                              language_id: 8,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Defense",
                              language_id: 9,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "防御",
                              language_id: 12,
                              __typename: "pokemon_v2_statname",
                            },
                          ],
                          __typename: "pokemon_v2_stat",
                        },
                        __typename: "pokemon_v2_pokemonstat",
                      },
                      {
                        base_stat: 69,
                        pokemon_v2_stat: {
                          pokemon_v2_statnames: [
                            {
                              name: "とくこう",
                              language_id: 1,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "특수공격",
                              language_id: 3,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "特攻",
                              language_id: 4,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Attaque Spéciale",
                              language_id: 5,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Spezialangriff",
                              language_id: 6,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Ataque Especial",
                              language_id: 7,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Attacco Speciale",
                              language_id: 8,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Special Attack",
                              language_id: 9,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "特攻",
                              language_id: 12,
                              __typename: "pokemon_v2_statname",
                            },
                          ],
                          __typename: "pokemon_v2_stat",
                        },
                        __typename: "pokemon_v2_pokemonstat",
                      },
                      {
                        base_stat: 95,
                        pokemon_v2_stat: {
                          pokemon_v2_statnames: [
                            {
                              name: "とくぼう",
                              language_id: 1,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "특수방어",
                              language_id: 3,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "特防",
                              language_id: 4,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Défense Spéciale",
                              language_id: 5,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Spezialverteidigung",
                              language_id: 6,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Defensa Especial",
                              language_id: 7,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Difesa Speciale",
                              language_id: 8,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Special Defense",
                              language_id: 9,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "特防",
                              language_id: 12,
                              __typename: "pokemon_v2_statname",
                            },
                          ],
                          __typename: "pokemon_v2_stat",
                        },
                        __typename: "pokemon_v2_pokemonstat",
                      },
                      {
                        base_stat: 36,
                        pokemon_v2_stat: {
                          pokemon_v2_statnames: [
                            {
                              name: "すばやさ",
                              language_id: 1,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "스피드",
                              language_id: 3,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "速度",
                              language_id: 4,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Vitesse",
                              language_id: 5,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Initiative",
                              language_id: 6,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Velocidad",
                              language_id: 7,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Velocità",
                              language_id: 8,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "Speed",
                              language_id: 9,
                              __typename: "pokemon_v2_statname",
                            },
                            {
                              name: "速度",
                              language_id: 12,
                              __typename: "pokemon_v2_statname",
                            },
                          ],
                          __typename: "pokemon_v2_stat",
                        },
                        __typename: "pokemon_v2_pokemonstat",
                      },
                    ],
                    __typename: "pokemon_v2_pokemon",
                  },
                ],
              },
            },
          },
        },
      ],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: "text",
      description: "Pokemon name or id",
    },
  },
  decorators: [
    (Story) => (
      <ApolloWrapper>
        <MockedProvider>
          <Story />
        </MockedProvider>
      </ApolloWrapper>
    ),
  ],
} satisfies Meta<typeof PokemonPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    value: "1",
  },
};
