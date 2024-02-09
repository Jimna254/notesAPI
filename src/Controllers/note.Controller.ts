import { Request, Response } from "express";
import { v4 } from "uuid";
import mssql from "mssql";
import { Note } from "../Interfaces/noteinterface";
import { sqlConfig } from "../Config/sql.config";

export const createNote = async (req: Request, res: Response) => {
  try {
    let id = v4();
    const { Title, Content, CreatedAt }: Note = req.body;
    const pool = await mssql.connect(sqlConfig);
    const result = (
      await pool
        .request()
        .input("note_id", mssql.NVarChar, id)
        .input("Title", mssql.NVarChar, Title)
        .input("Content", mssql.Text, Content)
        .input("CreatedAt", mssql.DateTime2, new Date(CreatedAt))
        .execute("createNote")
    ).rowsAffected;

    console.log(result);
    return res.status(201).json({
      message: `Note with ID ${id} has been created.`,
    });
  } catch (err) {
    console.log(err);
    return res.sendStatus(500).json({ message: err });
  }
};

export const getallNotes = async (req: Request, res: Response) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    let allNotes = (await pool.request().execute("")).recordset;

    return res.status(200).json({
      users: allNotes,
    });
  } catch (error) {
    return res.json({ error });
  }
};

export const getnotebyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pool = await mssql.connect(sqlConfig);

    let note = (
      await pool.request().input("user_id", id).execute("getnotebyId")
    ).recordset;

    return res.json({
      note,
    });
  } catch (error) {
    return res.json({ error });
  }
};
