import request from "supertest";
import { jest } from "@jest/globals";

// ✅ MOCK EMAIL SERVICE
jest.unstable_mockModule("../services/emailService.js", () => ({
  sendEmail: jest.fn().mockResolvedValue(true),
}));

// ✅ IMPORT APP AFTER MOCK
const { default: app } = await import("../server.js");

describe("AUTH API", () => {
  const user = {
    name: "Test User",
    email: `test${Date.now()}@mail.com`,
    password: "123456",
  };

  test("Register user", async () => {
    const res = await request(app)
      .post("/api/v1/auth/register")
      .send(user);

    console.log("REGISTER BODY:", res.body);

    expect(res.statusCode).toBe(201);
  });

  test("Login user", async () => {
    const res = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: user.email,
        password: user.password,
      });

    console.log("LOGIN BODY:", res.body);

    expect(res.statusCode).toBe(200);
  });
});