import { Router } from "express";
import {
  createNote,
  getallNotes,
  getnotebyId,
} from "../Controllers/note.Controller";

const userRouter = Router();

//
userRouter.post("/", createNote); //crear un usuario nuevo en la BD
userRouter.post("/", getallNotes);
userRouter.post("/:id", getnotebyId);
export default userRouter;
