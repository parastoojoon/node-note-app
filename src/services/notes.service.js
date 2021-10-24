import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig.js";
import { v4 as uuidv4 } from "uuid";
import { Note } from "../models/notes.model.js";

const db = new JsonDB(new Config("./db/note-app.json", true, false, "/"));

const listNotes = function () {
  try {
    return db.getData("/api/notes");
  } catch (dbError) {}
};

const getNotes = function () {
  var response = [];
  const data = listNotes();

  for (const key in data) {
    response.push(data[key]);
  }

  return response;
};

const getNote = function (_noteId) {
  const data = listNotes();
  for (const key in data) {
    if (key === _noteId) return data[key];
  }

  return _noteId;
};

const addNote = function (_title, _notes) {
  const id = uuidv4();

  db.push(`/api/notes/${id}`, new Note(id, _title, _notes), true);

  return id;
};

const updateNote = function (_id, _title, _notes) {
  db.push(`/api/notes/${_id}`, new Note(_notes), true);

  return _id;
};

const deleteNote = function (_id) {
  db.delete(`/api/notes/${_id}`);

  return _id;
};

const findNote = function (_phrase) {
  var response = [];
  const data = listNotes();
  for (const key in data) {
    if (data[key].note.match(_phrase)) {
      response.push(data[key]);
    }
  }
  return response;
};

export default {
  getNotes,
  getNote,
  addNote,
  updateNote,
  deleteNote,
  findNote,
};
