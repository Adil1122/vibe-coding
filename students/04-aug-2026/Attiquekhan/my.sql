Display all students.
SELECT * FROM `students` WHERE 1
Display only Computer Science students.
SELECT * FROM students
WHERE department = 'Computer Science';
Display students older than 20.
SELECT * FROM students WHERE age > 20;
Display student sorted by name.
SELECT * FROM students ORDER BY name;
Display only name and email.
SELECT name,email FROM students;
 Update department of student with ID = 3.
 UPDATE students SET department = 'Computer Science' WHERE ID = 3;
  Update email of student named "khan".
  UPDATE students SET email = 'khan@gmail.com' WHERE name = 'khan';
  Delete student with ID = 5.
  DELETE FROM students WHERE id = 5;
  Delete all students whose age is less than 18.
  DELETE FROM students WHERE age<18;
  Count total students.
SELECT COUNT(*) FROM students;
 Find average age.
 SELECT MIN(age) AS Smallestage FROM students;
 Find maximum age.
 SELECT MAX(age) AS highestage FROM students;
 Display departments with total students using GROUP BY.
 SELECT department, COUNT(ID) AS "Number of students" FROM students GROUP BY department;
 SELECT department, COUNT(ID) AS "Number of students" FROM students GROUP BY department HAVING COUNT(ID) > 2;
  Search student by email.
  SELECT * FROM `students` WHERE email = 'khan@gmail.com';
  Search student whose name starts with "A".
  SELECT * FROM students WHERE name LIKE 'k%';
   Display students whose age is between 18 and 25.
   SELECT * FROM `students` WHERE age BETWEEN '18' and '21';
    Display students whose department is bs english or Software Engineering.
    SELECT * FROM `students` WHERE department ='Software Engineering';