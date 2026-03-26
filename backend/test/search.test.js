import request from "supertest";
import app from "../server.js";

describe("SEARCH API", () => {

  test("Search endpoint", async () => {
    const res = await request(app)
      .get("/api/food/search?q=pizza");

    expect(res.statusCode).toBe(200);
  });

});