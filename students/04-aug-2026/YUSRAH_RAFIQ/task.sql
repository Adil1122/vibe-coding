INSERT INTO Students(name,age,email,gender,department,address,created_at)
VALUES('aliyan','25','aliyan@gmail.com','male','computerscience','Main bazar haripur','2026-08-09 14:52:00'),
('ali','20','ali@email.com','male','engenerring','haripur postalcode 22620','2026-08-10 12:37:37'),
('sheeza','19','sheeza@email.com','female','mathematics','tokyo 150-0001','2026-08-02 19:25:00'),
('laiba','30','laiba@email.com','female','ecnomics','75008 paris','2026-08-03 02:34:00'),
('savera','17','savera@email.com','female','computerscience','toronto on m4b 1b3','2026-08-01 14:52:00');

SELECT * FROM students 

SELECT * FROM students
WHERE department='computerscience';

SELECT * FROM students WHERE age>20;

SELECT * FROM students
ORDER BY name ASC;

SELECT name,email  FROM students 


UPDATE students
SET department='finance'
WHERE id='3';


UPDATE students
SET email='ali@gmail.com'
WHERE name='ali';


DELETE FROM students WHERE id=5;


DELETE FROM students WHERE age<18;


SELECT COUNT(*) AS students_name FROM students;


SELECT AVG(age)
FROM students;


SELECT MIN(age)
FROM students;


SELECT MAX(age)
FROM students;


SELECT department,COUNT(name) AS total_students
FROM students
GROUP BY department;


SELECT department,COUNT(name) AS total_students
FROM students
GROUP BY department
HAVING COUNT(name)>2;


SELECT * FROM students WHERE email='ali@gmail.com';


SELECT * FROM students WHERE name LIKE 'a%';


SELECT * FROM students WHERe age BETWEEN 18 and 25;


SELECT * FROM students WHERE department='computerscience' OR department='engenering';