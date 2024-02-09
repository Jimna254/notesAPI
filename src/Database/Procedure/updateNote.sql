CREATE OR ALTER PROCEDURE updateNote(
    @note_id VARCHAR(100),
    @Title CHAR(50),
    @Content VARCHAR(100), 
    @CreatedAt VARCHAR(20)
) 
AS
BEGIN
    UPDATE Notes SET
    Title = @Title,
    Content = @Content,
    CreatedAt = @CreatedAt
    WHERE note_id = @note_id;
END
