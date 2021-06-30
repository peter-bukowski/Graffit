import { singularize } from "./Singularizer.js";

test("singularizes", () => {
  var testMap = new Map([
    ["names", 10],
    ["name", 10],
    ["writers", 10],
  ]);
  singularize(testMap);
  expect(testMap.get("name")).toBe(20);
  expect(testMap.get("names")).toBeUndefined();
  expect(testMap.get("writer")).toBe(10);
  expect(testMap.get("writers")).toBeUndefined();
});
