import { at } from "./at";
import { chunk } from "./chunk";
import { groupBy } from "./groupBy";

export default function App() {
  return <div className="App"></div>;
}

const data = { a: [{ b: { c: 3 } }, 4] };

// const result = at(data, ["a[0].b.c", "a[1]"]);

// const result = groupBy(["one", "two", "three"], "length");

const result = chunk(["a", "b", "c", "d"], 3);

console.log(result);
