import notesService from "../services/notes.service.js";

const listNotes = function (req, res) {
  res.send(notesService.listNotes());
};

const getNote = function (req, res) {
  res.send(notesService.getNote(req.params._id));
};

const addNote = function (req, res) {
  res.status(201).send(notesService.addNote(req.body)).end();
};

const updateNote = function (req, res) {
  res.status(202).send(notesService.updateNote(req.params._id, req.body)).end();
};

const removeNote = function (req, res) {
  res.status(202).send(notesService.deleteNote(req.params._id)).end();
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
  listNotes,
  getNote,
  addNote,
  updateNote,
  removeNote,
  findNote,
};
