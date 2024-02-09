CREATE OR ALTER PROCEDURE deleteNote @note_id INT
AS
BEGIN
    DELETE FROM Notes WHERE note_id = @note_id
END