const request = require("supertest");
const app = require("../../server");

describe("Student /login", () => {
  //Test Case : TA001
  describe("Add group details", () => {
    test("should give success message", async () => {
      const response = await request(app).post("/rpmt/groups/add").send({
        leader: "testleader",
        member1: "testmember1",
        member2: "testmember2",
        member3: "testmember3",
      });
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toEqual("Group Added Successfully!!");
    });
  });

  //Test Case : TA002
  describe("Get all group details", () => {
    test("should give group list & status as 200", async () => {
      const response = await request(app).get("/rpmt/groups/").send();
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
    });
  });

  //Test Case : TA003
  describe("Remove non exsisting group", () => {
    test("should give 500 status and error message", async () => {
      const response = await request(app)
        .delete("/rpmt/groups/delete/62891cefe6ee56f1612633bf")
        .send();
      expect(response.statusCode).toBe(500);
      expect(response.body.status).toEqual("Error while deleting Data");
    });
  });

  //---------------------------------Researches-----------------------------------------
  //Test Case : TA004
  describe("Get all research", () => {
    test("should give research list & status as 200", async () => {
      const response = await request(app).get("/rpmt/research/").send();
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeDefined();
    });
  });

  //Test Case : TA005
  describe("Remove non exsisting research", () => {
    test("should give 500 status and error message", async () => {
      const response = await request(app)
        .delete("/rpmt/research/delete/62891cefe6ee56f1612633bf")
        .send();
      expect(response.statusCode).toBe(500);
      expect(response.body.status).toEqual("Error while deleting Data");
    });
  });

  //Test Case : TA006
  describe("Get one research", () => {
    test("should give 200 status and the research", async () => {
      const response = await request(app)
        .get("/rpmt/research/get/626b75486f6d72bcb0454762")
        .send();
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toEqual("Research fetched");
      expect(response.body.research).toBeDefined();
    });
  });
});
