SELECT * FROM friendlypets.user;

INSERT INTO friendlypets.user (name, email, password)
VALUES ('Pepe', 'pepito@msn.com', SHA1('1234'));

UPDATE friendlypets.user
SET address_id = 1 
WHERE id = 4;

SELECT * FROM friendlypets.animal;

SELECT friendlypets.user.email, friendlypets.animal.name
FROM friendlypets.user
LEFT JOIN friendlypets.animal ON friendlypets.user.id = friendlypets.animal.owner_user_id;



SELECT SHA1("1234")