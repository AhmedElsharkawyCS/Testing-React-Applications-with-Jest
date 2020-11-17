import { DirectionsRailwayOutlined } from "@material-ui/icons";
import * as React from "react";
describe("Test Course Details", () => {
  beforeEach(() => {
    console.log("beforeEach");
  });

  beforeAll(() => {
    console.log("beforeAll");
  });
  afterEach(() => {
    console.log("afterEach");
  });
  afterAll(() => {
    console.log("afterAll");
  });

  it("should display a list of items", async () => {
    expect(40 + 2).toEqual(42);
  });
  it("should be the meaning of life", async () => {
    // expect(40 + 2).toEqual(43);
    await setTimeout(() => console.log(), 1000);
  });
});
