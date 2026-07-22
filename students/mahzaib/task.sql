                          === Task Queries ====
--Display all columns from the customers table.
SELECT * FROM `customers`;

--Display only the name and city columns.
SELECT name,city FROM `customers`;

--Display only the country column.
SELECT country FROM `customers`;

---Display the id, name, and age of all customers.
SELECT `id`,` name`, `age` FROM `customers`;

Display all customers without showing the created_at and updated_at columns.
SELECT `id`, `name`, `city`, `country`, `age` FROM `customers`;

--Display customers whose city is Lahore.
SELECT * FROM `customers`where city = `haripur`;

--Display customers whose country is Pakistan.
SELECT * FROM `customers`where counry = `Pakistan`;

--Display customers whose age is greater than 30.
SELECT * FROM `customers`where age > 25;

--Display customers whose age is less than 25.
SELECT * FROM `customers`where age < 21;

--Display customers whose age is exactly 40
SELECT * FROM `customers`where age = 50;
-- Display all customers ordered by name (A-Z).
SELECT * FROM `customers` ORDER BY `name` ASC;

-- Display all customers ordered by name (Z-A).
SELECT * FROM `customers` ORDER BY `name` DESC;

-- Display customers ordered by age (youngest to oldest).
SELECT * FROM `customers` ORDER BY `age` ASC;

-- Display customers ordered by age (oldest to youngest).
SELECT * FROM `customers` ORDER BY `age` DESC;

-- Display customers ordered by city alphabetically.
SELECT * FROM `customers` ORDER BY `city` ASC;
