CREATE DATABASE IF NOT EXISTS student_management;
USE student_management;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    gender VARCHAR(20) NOT NULL,
    department VARCHAR(100) NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO students (name, age, email, gender, department, address) VALUES
('Ali Khan', 22, 'ali.khan@university.edu', 'Male', 'Computer Science', '123 Street, Islamabad'),
('Fatima Ahmed', 21, 'fatima.ahmed@university.edu', 'Female', 'Software Engineering', '456 Avenue, Lahore'),
('Hassan Raza', 26, 'hassan.raza@university.edu', 'Male', 'Computer Science', '789 Road, Karachi'),
('Amina Malik', 19, 'amina.malik@university.edu', 'Female', 'Business Administration', '321 Lane, Rawalpindi'),
('Bilal Sheikh', 23, 'bilal.sheikh@university.edu', 'Male', 'Software Engineering', '654 Boulevard, Multan');


SELECT * FROM students;

SELECT * FROM students WHERE department = 'Computer Science';


SELECT * FROM students WHERE age > 20;

SELECT * FROM students ORDER BY name ASC;


SELECT name, email FROM students;


UPDATE students SET department = 'Data Science' WHERE id = 3;

UPDATE students SET email = 'ali.new@university.edu' WHERE name = 'Ali Khan';


DELETE FROM students WHERE id = 5;


DELETE FROM students WHERE age < 18;

SELECT COUNT(*) AS total_students FROM students;

SELECT AVG(age) AS average_age FROM students;


SELECT MAX(age) AS maximum_age FROM students;


SELECT MIN(age) AS minimum_age FROM students;

SELECT department, COUNT(*) AS total_students FROM students GROUP BY department;

SELECT department, COUNT(*) AS total_students FROM students 
GROUP BY department HAVING COUNT(*) > 2;

SELECT * FROM students WHERE email = 'ali.khan@university.edu';

SELECT * FROM students WHERE name LIKE 'A%';

SELECT * FROM students WHERE age BETWEEN 18 AND 25;

SELECT * FROM students WHERE department IN ('Computer Science', 'Software Engineering');
