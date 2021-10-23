import { Router } from "express";
import noteController from "../controllers/notes.controller.js";

const router = Router({ mergeParams: true });

router.route("/notes/find").get(noteController.findNote);

router
  .route("/notes/:_id")
  .get(noteController.getNote)
  .put(noteController.updateNote)
  .delete(noteController.removeNote);

router
  .route("/notes")
  .get(noteController.listNotes)
  .post(noteController.addNote);

export default router;
