export const formatString = (string) => {
  if (string === "Terraza by SA Lifetsyle") return "terraza-salifestyle";
  if (string?.includes("Speckles Patio")) return "patio-speckles";
  if (!string) return null;
  let str = string.replace(/[^A-Z0-9]+/gi, "-").toLowerCase();
  if (str.charAt(str.length - 1) === "-" && str.charAt(0) === "-") {
    str = str.slice(1, -1);
  }
  if (str.charAt(str.length - 1) === "-") {
    str = str.slice(0, -1);
  }
  if (str.charAt(0) === "-") {
    str = str.slice(1);
  }
  return str;
};

export const decodeString = (string) => {
  if (string === "terraza-salifestyle") return "Terraza by SA Lifetsyle";
  if (string === "patio-speckles") return " Speckles Patio";
  if (!string) return null;
  let str = string.replace(/-/g, " ");
  str = str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  return str;
};
