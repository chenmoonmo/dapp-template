import { globalConfigAtom } from "@/atoms";
import { useStore } from "jotai";

export default function Home() {
  const store = useStore();

  console.log(store,store.get(globalConfigAtom));

  store.set(globalConfigAtom, {
    test: "1",
  });

  return <main></main>;
}
