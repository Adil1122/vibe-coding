              task 

### SELECT Queries

--1. Write a query to display all records from the `customers` table.
     SELECT * FROM `customers` 
--2. Write a query to display the `name` and `city` of customers whose age is greater than 25.
     SELECT  `name`, `city` FROM `customers` WHERE age>25;
--3. Write a query to display all customers from Pakistan.
     SELECT * FROM `customers`WHERE `country`= 'Pakistan';
### INSERT Queries

4. Write a query to insert a new customer:

 --  * Name: Ali
 --  * City: Lahore
 --  * Country: Pakistan
 --  * Age: 28

   INSERT INTO `customers`(`id`, `name`, `city`, `country`, `age`) 
VALUES ('Ali','Lahore','Pakistan','28');


5. Write a query to insert a new order:

  -- * Customer ID: 2
   --* Product: Laptop
   --* Quantity: 1
  -- * Total Price: 120000

  INSERT INTO `orders`(`customer_Id`, `product`, `quantity`, `total_price`) VALUES ('2','laptop','1','1200000');

### UPDATE Queries

6. Write a query to update the city of the customer with ID 3 to **Islamabad**.
UPDATE `customers` SET 
`city`='Islamabad' WHERE `id`='3'

7. Write a query to increase the quantity of the order with ID 5 to **3**.

### DELETE Queries

8. Write a query to delete the customer whose ID is 7.
DELETE FROM `customers` WHERE `id`='7';

9. Write a query to delete all orders where the quantity is 0.
DELETE FROM `orders` WHERE `quantity`='0';
### INNER JOIN Query

10. Write a query using **INNER JOIN** to display:

SELECT customers.name ,orders.product,orders.quantity,orders.quantity
FROM orders
INNER JOIN customers ON orders.customer_Id= customers.id;



These questions progress from basic to intermediate level and are suitable for beginner MySQL assignments or quizzes.
