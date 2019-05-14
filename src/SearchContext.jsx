import React from "react";

const SearchContext = React.createContext({
  Locaion: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Consumer = SearchContext.Consumer;
export const Provider = SearchContext.Provider;
