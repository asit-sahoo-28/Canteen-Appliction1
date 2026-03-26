import request from "supertest";
import app from "../server.js";

describe("FOOD API", () => {

  test("Get food list", async () => {
    const res = await request(app)
      .get("/api/food/list");

    expect(res.statusCode).toBe(200);
  });

  test("Search food", async () => {
    const res = await request(app)
      .get("/api/food/search?q=rice");

    expect(res.statusCode).toBe(200);
  });

});