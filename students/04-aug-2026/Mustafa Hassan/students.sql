query no 1
INSERT INTO students (name, age, email, gender, department, address)
VALUES
('student 1', 20, 'std1@gmail.com', 'Male', 'Computer Science', 'Haripur'),
('student 2', 22, 'std2@gmail.com', 'Male', 'Software Engineering', 'Islamabad'),
('student 3', 19, 'std3@gmail.com', 'Female', 'Computer Science', 'Abbottabad'),
('student 4', 21, 'std4@gmail.com', 'Female', 'Information Technology', 'Wah Cantt'),
('student 5', 17, 'std5@gmail.com', 'Male', 'Computer Science', 'Rawalpindi');


query 2
SELECT * FROM students;

query 3
SELECT * FROM students
WHERE department = 'Computer Science';

query 4
SELECT * FROM students
WHERE age > 20;

query 5
SELECT * FROM students
ORDER BY name;

query 6
SELECT name, email FROM students;

query 7
UPDATE students
SET department = 'Software Engineering'
WHERE id = 3;

query 8
UPDATE students
SET email = 'std 11@gmail.com'
WHERE name = 'Student 1';

query 9
DELETE FROM students
WHERE id = 5;

query 10
DELETE FROM students
WHERE age < 18;

query 11
SELECT COUNT(*) FROM students;

query 12
SELECT AVG(age) FROM students;

query 13
SELECT MAX(age) FROM students;

query 14
SELECT MIN(age) FROM students;

query 15
SELECT department, COUNT(*) AS total_students
FROM students
GROUP BY department;

query 16
SELECT department, COUNT(*) AS total_students
FROM students
GROUP BY department
HAVING COUNT(*) > 2;

query 17
SELECT * FROM students
WHERE email = 'std1@gmail.com';

query 18
SELECT * FROM students
WHERE name LIKE 'A%';

query 19
SELECT * FROM students
WHERE age BETWEEN 18 AND 25;

query 20
SELECT * FROM students
WHERE department IN ('Computer Science', 'Software Engineering');

