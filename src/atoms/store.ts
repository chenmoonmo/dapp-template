import { createStore } from "jotai";
import { atomWithStorage } from "jotai/utils";

type globalConfigType = {};

export const store = createStore();
// system config
export const globalConfigAtom = atomWithStorage<globalConfigType>(
  "globalConfig",
  {}
);

store.set(globalConfigAtom, {});
