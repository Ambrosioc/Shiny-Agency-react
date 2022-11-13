import { formatFetchParams, formatJobList } from "./Results";

describe("The formatJobList function", () => {
  it("should add a comma to a word", () => {
    const expectedState = "item2, ";
    expect(formatJobList("item2", 3, 1)).toEqual(expectedState);
  });

  it("should not add a comma to the last word", () => {
    const expectedState = "item3";
    expect(formatJobList("item3", 3, 2)).toEqual(expectedState);
  });
});

// <= new test suite =>
describe("The formatFetchParams function", () => {
  // <= new test =>
  it("should the correct format", () => {
    const expectedState = "a1=answer1";
    expect(formatFetchParams({ 1: "answer1" })).toEqual(expectedState);
  });
  // <= new test =>
  it("should concatenate params", () => {
    const expectedState = "a1=answer1&a2=answer2";
    expect(formatFetchParams({ 1: "answer1", 2: "answer2" })).toEqual(
      expectedState
    );
  });
});
