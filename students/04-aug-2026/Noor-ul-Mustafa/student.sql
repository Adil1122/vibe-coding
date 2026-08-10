# SQL Queries

## 2. Display all students

```sql
SELECT * FROM students;
```

## 3. Display only Computer Science students

```sql
SELECT *
FROM students
WHERE department = 'Computer Science';
```

## 4. Display students older than 20

```sql
SELECT *
FROM students
WHERE age > 20;
```

## 5. Display students sorted by name

```sql
SELECT *
FROM students
ORDER BY name ASC;
```

## 6. Display only name and email

```sql
SELECT name, email
FROM students;
```

## 7. Update department of student with ID = 3

```sql
UPDATE students
SET department = 'Software Engineering'
WHERE id = 3;
```

## 8. Update email of student named "Ali"

```sql
UPDATE students
SET email = 'ali123@gmail.com'
WHERE name = 'Ali';
```

## 9. Delete student with ID = 5

```sql
DELETE FROM students
WHERE id = 5;
```

## 10. Delete all students whose age is less than 18

```sql
DELETE FROM students
WHERE age < 18;
```

## 11. Count total students

```sql
SELECT COUNT(*) AS total_students
FROM students;
```

## 12. Find average age

```sql
SELECT AVG(age) AS average_age
FROM students;
```

## 13. Find maximum age

```sql
SELECT MAX(age) AS maximum_age
FROM students;
```

## 14. Find minimum age

```sql
SELECT MIN(age) AS minimum_age
FROM students;
```

## 15. Display departments with total students using GROUP BY

```sql
SELECT department, COUNT(*) AS total_students
FROM students
GROUP BY department;
```

## 16. Display departments having more than two students using HAVING

```sql
SELECT department, COUNT(*) AS total_students
FROM students
GROUP BY department
HAVING COUNT(*) > 2;
```

## 17. Search student by email

```sql
SELECT *
FROM students
WHERE email = 'ali123@gmail.com';
```

## 18. Search student whose name starts with "A"

```sql
SELECT *
FROM students
WHERE name LIKE 'A%';
```

## 19. Display students whose age is between 18 and 25

```sql
SELECT *
FROM students
WHERE age BETWEEN 18 AND 25;
```

## 20. Display students whose department is either Computer Science or Software Engineering

```sql
SELECT *
FROM students
WHERE department IN ('Computer Science', 'Software Engineering');
```
