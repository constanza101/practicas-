#ejemplos de INSTERT INTO:
#recordar que siempre las columnas y los valores tienen que ser la misma cantidad.

#primero añadir los que no tengan claves foraneas (foreign keys). 
INSERT INTO schema_test.usuarios (idusuarios, username, telefono)
VALUES (1, 'Constanza', 489489489);

INSERT INTO schema_test.razas (idrazas, raza_name)
VALUES (1, 'breton');

#ultimo agregar los que tienen foreign keys, con valores válidos para ellas.
INSERT INTO schema_test.pets (idpets, petname, pettype, usuarios_idusuarios, razas_idrazas)
VALUES  (1, 'Shiva', 'perro', 1, 1);

#ejemplo de UPDATE donde cambiamos un valor en una línea única identificandola con su primary key 
UPDATE schema_test.pets 
SET petname = 'Shiva' 
WHERE idpetts = 1;

#ejemplo de UPDATE conde cambiamos múltiples líneas, donde en este caso todos los que tengan el 
#valor 'perro' en el campo pettype, se les cambiará el valor de petname. 
UPDATE schema_test.pets 
SET petname = 'Shiva' 
WHERE pettype = 'perro';

#ejemplo DELETE FROM: donde borraremos líneas enteras. Igual que con UPDATE, podemos borrar una o 
#múltiples líneas, dependiendo de la condición del WHERE.
DELETE FROM schema_test.pets 
WHERE idpets = 1;

#NUNCA OLVIDAR PONER EL WHERE O BORRAREMOS TODO!
#UNA PRUEBA PODRÍA HACERSE CON UPDATE, CON LA CONDICIÓN WHERE QUE USAREMOS, ANTES DE HACER UN DELETE. 

#Ejemplo query seleccionando 2 columnas
SELECT petname, pettype FROM schema_test.pets 
WHERE idpets = 1;

#Ejemplo query seleccionando 2 columnas y renombrando una de ellas en la tabla resultado
SELECT petname as 'columna con nombre de pet', pettype FROM schema_test.pets 
WHERE idpets = 1;



SELECT schema_test.usuarios.idusuarios as 'USER_ID', schema_test.usuarios.username as 'name_user', schema_test.pets.petname
FROM schema_test.usuarios
JOIN schema_test.pets ON schema_test.usuarios.idusuarios = schema_test.pets.usuarios_idusuarios;


#JOIN de la tabla pets y la tabla razas. Queremos el nombre y la raza 

SELECT schema_test.pets.petname as 'nombre', schema_test.razas.raza_name as 'raza'
FROM schema_test.pets
JOIN schema_test.razas ON schema_test.pets.razas_idrazas = schema_test.razas.idrazas;

#COUNT
SELECT idpets, COUNT(petname), pettype FROM schema_test.pets
GROUP BY petname
;

SELECT * FROM schema_test.pets
;

#En caso de que Workbench no nos deje hacer group bys...
#SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));

#En caso de que nos conectemos desde NodeJS a MySQL v8, hay que hacer esto la primera vez
#ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MYPASSWORD'





