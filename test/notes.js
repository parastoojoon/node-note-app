import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig.js";
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/server.js";
const should = chai.should();

const db = new JsonDB(new Config("./db/note-app.json", true, false, "/"));

chai.use(chaiHttp);
const api = "http://localhost:8080";

describe("Notes", () => {
  // Clean up after all tests are done
  after(() => {
    db.delete("/api/notes");
  });

  describe("/GET notes", () => {
    it("should list all the notes", (done) => {
      chai
        .request(api)
        .get("/notes")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("/POST note", () => {
    after(() => {
      db.delete("/api/notes");
    });

    it("should insert a single note", (done) => {
      const note = {
        title: "there",
        note: "some notes",
      };
      chai
        .request(api)
        .post("/notes")
        .send(note)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("/GET a specific note", () => {
    before(() => {
      const note = {
        title: "one",
        note: "getOne",
        id: "1",
      };
      db.push("/api/notes", note);
    });
    after(() => {
      db.delete("/api/notes");
    });

    it("should get a single note", (done) => {
      chai
        .request(api)
        .get("/notes/1")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe("/PUT a specific note", () => {
    const note = {
      title: "one",
      note: "getOne",
      id: "1",
    };
    before(() => {
      db.push("/api/notes", note);
    });
    after(() => {
      db.delete("/api/notes");
    });

    it("should update a single note", (done) => {
      chai
        .request(api)
        .put("/notes/1")
        .send(note)
        .end((err, res) => {
          res.should.have.status(202);
          done();
        });
    });
  });
});
