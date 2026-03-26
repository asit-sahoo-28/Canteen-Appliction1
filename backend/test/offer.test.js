import request from "supertest";
import app from "../server.js";

describe("OFFER API", () => {

  test("Get active offers", async () => {
    const res = await request(app)
      .get("/api/offers/active");

    expect(res.statusCode).toBe(200);
  });

});