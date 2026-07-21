-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2026 at 11:25 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `created at` timestamp NULL DEFAULT NULL,
  `updated at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `city`, `country`, `age`, `created at`, `updated at`) VALUES
(0, 'mahzaib', 'abbotabad', 'pakistan', 17, '2026-07-15 08:52:26', '2026-07-21 08:52:26'),
(1, 'hoorain', 'delhi', 'india', 15, '2026-07-08 08:52:26', '2026-07-19 08:52:26'),
(2, 'mahnoor', 'haripur', 'usa', 18, '2026-07-10 08:58:07', '2026-07-03 08:58:07'),
(3, 'anaya', 'lahore', 'turky', 20, '2026-07-25 08:58:07', '2026-07-06 08:58:07');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

query 
SELECT age.city FROM `cstomers`where age > 18;
SELECT age.city FROM `ctomers`ORDER BY age DESC;
