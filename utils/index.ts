export const getColor = (type: string) => {
  switch (type) {
    case "normal":
      return "#A8A87B";
    case "water":
      return "#559EDF";
    case "fire":
      return "#EE803B";
    case "grass":
      return "#88BE5D";
    case "electric":
      return "#F7CF43";
    case "ice":
      return "#9AD8D8";
    case "fighting":
      return "#BE322E";
    case "poison":
      return "#B563CE";
    case "ground":
      return "#DFBF6E";
    case "flying":
      return "#A893ED";
    case "psychic":
      return "#EC5C89";
    case "bug":
      return "#A8B732";
    case "rock":
      return "#B89F41";
    case "ghost":
      return "#705A97";
    case "dark":
      return "#705849";
    case "dragon":
      return "#7043F4";
    case "steel":
      return "#B8B9CF";
    case "fairy":
      return "#EFB7BD";
    default:
      return "";
  }
};
