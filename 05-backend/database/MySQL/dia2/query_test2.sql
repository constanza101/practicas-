INSERT INTO schema_test.usuarios (username, telefono)
VALUES ('Jose', 123123123);

INSERT INTO schema_test.usuarios (username, telefono)
VALUES ('Gabi', 345345456);

INSERT INTO schema_test.razas (raza_name)
VALUES ('siames');

INSERT INTO schema_test.razas (raza_name)
VALUES ('persa');

INSERT INTO schema_test.pets (petname, pettype, usuarios_idusuarios, razas_idrazas)
VALUES ('Suki', 'gato', 2, 2);

INSERT INTO schema_test.pets (petname, pettype, usuarios_idusuarios, razas_idrazas)
VALUES ('Alfredo', 'gato', 3, 3);
