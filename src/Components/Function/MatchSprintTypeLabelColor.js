const TypeColor = type => {
  switch (type) {
    case "NORMAL":
      return "blue";
    case "BACKLOG":
      return "gray";

    default:
      return "default";
  }
};
export default TypeColor;
