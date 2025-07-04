import countries from "world-countries";

export const Country = countries.map((item) => ({
  code: item.cca2,
  name: item.name.common
}));