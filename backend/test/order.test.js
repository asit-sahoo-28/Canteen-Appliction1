import request from "supertest";
import app from "../server.js";

describe("ORDER API", () => {

  test("List orders", async () => {
    const res = await request(app)
      .get("/api/order/list");

    expect(res.statusCode).toBe(200);
  });

});