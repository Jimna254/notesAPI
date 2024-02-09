import dotenv from "dotenv";
import mssql from "mssql";

dotenv.config({ path: "../../.env" });

export const sqlConfig = {
  user: process.env.DB_USER || "sa",
  password: process.env.DB_PASSWORD || "@Stockholm01",
  database: process.env.DB_NAME || "NoteDB",
  server: process.env.DB_SERVER || "DESKTOP-KDHQCIN",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false, // true for linux users
    trustServerCertificate: true,
  },
};

// let connect = async () => {
//   let pool = await mssql.connect(sqlConfig);

//   if (pool.connected) {
//     console.log("connected");

//     let query = `
//      CREATE TABLE Notes(
//          note_id VARCHAR(100) NOT NULL,
//          Title VARCHAR(100) NOT NULL,
//          Content VARCHAR(255) NOT NULL UNIQUE,
//           CreatedAt VARCHAR(20),
        
//      )`;

//     let result = (await (await pool.connect()).query(query)).rowsAffected;

//     console.log(result);
//   } else {
//     console.log("not connected");
//   }
// };

// connect();
