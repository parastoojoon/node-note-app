import notesService from "../services/notes.service.js";
import { Validator } from "node-input-validator";
import { Response } from "../models/response.model.js";

const getNotes = function (req, res) {
  res.send(notesService.getNotes());
};

const getNote = function (req, res) {
  res.send(notesService.getNote(req.params._id));
};

const addNote = function (req, res) {
  const validator = new Validator(req.body, {
    note: "required",
    title: "required",
  });

  validator.check().then((matched) => {
    if (!matched) {
      res.status(400).send(new Response(null, validator.errors));
    } else {
      res.status(201).send(notesService.addNote(req.body.title, req.body.note));
    }
  });
};

const updateNote = function (req, res) {
  const validator = new Validator(req.body, {
    note: "required",
  });

  validator.check().then((matched) => {
    if (!matched) {
      res.status(400).send(new Response(null, validator.errors));
    } else {
      res.status(202).send(notesService.updateNote(req.params._id, req.body));
    }
  });
};

const removeNote = function (req, res) {
  res.status(202).send(notesService.deleteNote(req.params._id));
};

const findNote = function (req, res) {
  const query = req.query;
  if (query.hasOwnProperty("contains")) {
    res.send(notesService.findNote(req.query.contains));
  } else {
    res.status(404).end();
  }
};

export default {
  getNotes,
  getNote,
  addNote,
  updateNote,
  removeNote,
  findNote,
};
