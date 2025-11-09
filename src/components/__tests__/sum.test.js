import { sum } from "../sum";

test("Sum function adds two numbers correctly", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(0, 0)).toBe(0);
}); 