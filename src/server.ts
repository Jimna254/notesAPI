import express, { NextFunction, Request, Response, json } from "express";
import userRouter from "./Routes/notesrouter";

const app = express();
app.use("/notes", userRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: error.toString() });
  console.log(error);
});

const port: number | string = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
