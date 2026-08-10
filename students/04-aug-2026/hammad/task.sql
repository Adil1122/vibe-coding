  1. Insert five students.
INSERT INTO students (name, age, email, gender, department, address)
VALUES
  ('Ayesha Khan', 21, 'ayesha.khan@example.com', 'Female', 'Computer Science', 'Lahore'),
  ('aliyan', 22, 'aliyan.ahmed@example.com', 'Male', 'Information Technology', 'Quetta'),
  ('usairam', 20, 'usairam.malik@example.com', 'male', 'Computer Science', 'ISlambad'),
  ('Omar', 23, 'omar.abbas@example.com', 'Male', 'Software Engineering', 'Haripur'),
  ('Ali', 19, 'ali@example.com', 'Male', 'Business', '90 Park Drive');

-- 2. Display all students.
SELECT * FROM students;

-- 3. Display only Computer Science students.
SELECT * FROM students
WHERE department = 'Computer Science';

-- 4. Display students older than 20.
SELECT * FROM students
WHERE age > 20;

-- 5. Display students sorted by name.
SELECT * FROM students
ORDER BY name;

-- 6. Display only name and email.
SELECT name, email FROM students;

-- 7. Update department of student with ID = 5.
UPDATE students
SET department = 'Computer Science'
WHERE id = 5;

-- 8. Update email of student named "Ali".
UPDATE students
SET email = 'ali.updated@example.com'
WHERE name = 'Ali';

-- 9. Delete student with ID = 5.
DELETE FROM students
WHERE id = 5;

-- 10. Delete all students whose age is less than 18.
DELETE FROM students
WHERE age < 18;

-- 11. Count total students.
SELECT COUNT(*) AS total_students FROM students;

-- 12. Find average age.
SELECT AVG(age) AS average_age FROM students;

-- 13. Find maximum age.
SELECT MAX(age) AS max_age FROM students;

-- 14. Find minimum age.
SELECT MIN(age) AS min_age FROM students;

-- 15. Display departments with total students using GROUP BY.
SELECT department, COUNT(*) AS student_count
FROM students
GROUP BY department;

-- 16. Display departments having more than two students using HAVING.
SELECT department, COUNT(*) AS student_count
FROM students
GROUP BY department
HAVING COUNT(*) > 2;

-- 17. Search student by email.
SELECT * FROM students
WHERE email = 'ali@example.com';

-- 18. Search student whose name starts with "A".
SELECT * FROM students
WHERE name LIKE 'A%';

-- 19. Display students whose age is between 18 and 25.
SELECT * FROM students
WHERE age BETWEEN 18 AND 25;

-- 20. Display students whose department is either Computer Science or Software Engineering.
SELECT * FROM students
WHERE department IN ('Computer Science', 'Software Engineering');
