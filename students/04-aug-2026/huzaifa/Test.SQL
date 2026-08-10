INSERT INTO students(name,age,email,gender,department,address,created_at)
VALUES('huzaifa','25','huzaifarafiq@gmail.com','male','physics','karachi','2026-05-06 04:35:00'),
('samad','29','samadhafiz@gmail.com','male','chemical eng','lahore','2026-05-06 04:35:00'),
('ibrahim','49','ibrahimkhan@gmail.com','male','aerospace','haripur','2026-05-06 04:35:00'),
('ghost rider','39','ghostrider@gmail.com','male','chemistry','florida','2026-05-06 04:35:00'),
('farid','35','faridshah@gmail.com','male','chemistry','faislabad','2026-05-06 04:35:00');


SELECT * FROM `students`;


SELECT * FROM `students` WHERE department='computerscience';

SELECT * FROM `students` WHERE age>20;

SELECT * FROM `students`
ORDER BY name ASC;

SELECT name,email FROM `students`;

UPDATE students
SET email='huzaifa@gmail.com'
WHERE name='huzaifa';

DELETE FROM students WHERE id=3;

DELETE FROM students WHERE age < 30;

Select count(*) AS students_name FROM students;

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


SELECT * FROM students WHERE email='ghostrider@gmail.com';


SELECT * FROM students WHERE name LIKE 'h%';


SELECT * FROM students WHERe age BETWEEN 25 and 40;


SELECT * FROM students WHERE department='chemistry' OR department='physics';