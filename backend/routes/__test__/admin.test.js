const request = require("supertest");
const app = require("../../server");

describe("User /login", () => {
  //Test Case : TA001
  describe("Given username password and role", () => {
    test("should give 200 status", async () => {
      const response = await request(app).post("/rpmt/users/add").send({
        username: "testusername",
        password: "testpassword",
        role: "student",
      });
      expect(response.statusCode).toBe(200);
    });
  });

  //Test Case : TA002
  describe("Remove existing Login", () => {
    test("should give 204 status", async () => {
      const response = await request(app)
        .delete("/rpmt/users/delete/62891cefe6ee56f1612633bf")
        .send();
      expect(response.statusCode).toBe(204);
    });
  });

  //Test Case : TA003
  describe("Enter non existing user ID for login", () => {
    test("should give status as no_user", async () => {
      const response = await request(app).post("/rpmt/users/login").send({
        userID: "testUserID",
      });

      expect(response.body.status).toEqual("no_user");
    });
  });

  //Test Case : TA004
  describe("Get All Templates added by Admin", () => {
    test("should give template list & status as 200", async () => {
      const response = await request(app).get("/rpmt/templates/").send();

      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
    });
  });

  //Test Case : TA005
  describe("Remove non existing template", () => {
    test("should give 500 status and error message", async () => {
      const response = await request(app)
        .delete("/rpmt/templates/delete/62891cefe6ee56f1612633bf")
        .send();

      expect(response.statusCode).toBe(500);
      expect(response.body.status).toEqual("Error while deleting the record!!");
    });
  });

  //Test Case : TA006
  describe("Get one Template", () => {
    test("should give 200 status and the template", async () => {
      const response = await request(app)
        .get("/rpmt/templates/get/626b75486f6d72bcb0454762")
        .send();

      expect(response.statusCode).toBe(200);
      expect(response.body.status).toEqual("Template Details");
      expect(response.body.template).toBeDefined();
    });
  });
});
