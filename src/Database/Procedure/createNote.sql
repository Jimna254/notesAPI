CREATE OR ALTER PROCEDURE createNote(
    @user_id VARCHAR(100),
    @name VARCHAR(50),
    @email VARCHAR(100) , 
    @role VARCHAR (20),
    @areaofspecialization VARCHAR(100),
    @password VARCHAR(20)
  ) 
  AS
  BEGIN
    INSERT INTO Notes(note_id, Title, Content, CreatedAt)
    VALUES(@note_id, @Title, @Content, @CreatedAt)
  END
   