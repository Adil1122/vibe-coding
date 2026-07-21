-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2026 at 11:30 AM
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
-- Database: `customers record`
--

-- --------------------------------------------------------

--
-- Table structure for table `custmers`
--

CREATE TABLE `custmers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `created at` timestamp NULL DEFAULT NULL,
  `updated at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `custmers`
--

INSERT INTO `custmers` (`id`, `name`, `city`, `country`, `age`, `created at`, `updated at`) VALUES
(1, 'zimal', 'Karachi', 'Pakistan', 20, '2026-07-09 09:06:43', '2026-07-22 09:06:43'),
(2, 'ALI', 'Lahore', 'Pakistan', 19, '2026-07-05 09:06:43', '2026-07-11 09:06:43'),
(3, 'Abeera', 'Islamabad', 'Pakisan', 21, '2026-07-02 09:10:27', '2026-07-06 09:10:27'),
(4, 'Meerab', 'Abbottabad', 'Pakistan', 23, '2026-07-07 09:10:27', '2026-07-09 09:10:27'),
(5, 'Eman', 'Haripur', 'Pakistan', 16, '2026-07-09 09:12:51', '2026-07-18 09:12:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `custmers`
--
ALTER TABLE `custmers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `custmers`
--
ALTER TABLE `custmers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

 query 

 SELECT age.city FROM `custmers`where age > 18;
SELECT age.city FROM `custmers`ORDER BY age DESC;
