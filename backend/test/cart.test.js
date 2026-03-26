import request from "supertest";
import app from "../server.js";

describe("CART API", () => {

  test("Cart without token should fail", async () => {
    const res = await request(app)
      .post("/api/cart/get")
      .send({ userId: "123" });

    expect(res.statusCode).toBe(401);
  });

});