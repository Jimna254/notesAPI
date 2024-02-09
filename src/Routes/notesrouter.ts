import { Router } from "express";
import {
  createNote,
  getallNotes,
  getnotebyId,
  updateNote,
  deleteNote,
} from "../Controllers/note.Controller";

const userRouter = Router();

//
userRouter.post("/", createNote); //crear un usuario nuevo en la BD
userRouter.get("/", getallNotes);
userRouter.get("/:id", getnotebyId);
userRouter.put("/update/:id", updateNote);
userRouter.delete("/delete/:id", deleteNote);
export default userRouter;
