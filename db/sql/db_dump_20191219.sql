-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 19, 2019 at 07:34 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `sweet_corner`
--
CREATE DATABASE IF NOT EXISTS `sweet_corner` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sweet_corner`;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` char(36) NOT NULL,
  `statusId` int(10) UNSIGNED NOT NULL,
  `userId` int(10) UNSIGNED DEFAULT NULL,
  `lastInteraction` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `pid`, `statusId`, `userId`, `lastInteraction`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'd0fa83b7-17e6-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-05 21:11:10', '2019-12-05 21:11:10', '2019-12-05 21:11:10', NULL),
(2, '2c559d6d-1bd1-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-10 20:46:19', '2019-12-10 20:46:19', '2019-12-10 20:46:19', NULL),
(3, 'dab4323a-1bd1-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-10 20:51:11', '2019-12-10 20:51:11', '2019-12-10 20:51:11', NULL),
(4, '4763edc6-1bd2-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-10 20:54:14', '2019-12-10 20:54:14', '2019-12-10 20:54:14', NULL),
(5, '6a1f29b6-1bd2-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-10 20:55:12', '2019-12-10 20:55:12', '2019-12-10 20:55:12', NULL),
(6, '5ccff71f-1d59-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 19:33:43', '2019-12-12 19:33:43', '2019-12-12 19:33:43', NULL),
(7, 'a54d988d-1d5b-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 19:50:04', '2019-12-12 19:50:04', '2019-12-12 19:50:04', NULL),
(8, '56f3b967-1d60-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:23:40', '2019-12-12 20:23:40', '2019-12-12 20:23:40', NULL),
(9, '6152110a-1d60-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:23:57', '2019-12-12 20:23:57', '2019-12-12 20:23:57', NULL),
(10, '8180ab17-1d60-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:24:51', '2019-12-12 20:24:51', '2019-12-12 20:24:51', NULL),
(11, '9b1665b8-1d60-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:25:34', '2019-12-12 20:25:34', '2019-12-12 20:25:34', NULL),
(12, 'a921b380-1d60-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:25:57', '2019-12-12 20:25:57', '2019-12-12 20:25:57', NULL),
(13, '523bc5c0-1d63-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:45:00', '2019-12-12 20:45:00', '2019-12-12 20:45:00', NULL),
(14, '78a49a9f-1d63-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:46:05', '2019-12-12 20:46:05', '2019-12-12 20:46:05', NULL),
(15, '9e6651bf-1d63-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:47:08', '2019-12-12 20:47:08', '2019-12-12 20:47:08', NULL),
(16, 'c87d8fda-1d63-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:48:19', '2019-12-12 20:48:19', '2019-12-12 20:48:19', NULL),
(17, 'd52beee1-1d63-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:48:40', '2019-12-12 20:48:40', '2019-12-12 20:48:40', NULL),
(18, '295f2079-1d65-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-12 20:58:11', '2019-12-12 20:58:11', '2019-12-12 20:58:11', NULL),
(19, '19250552-1ebe-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-14 14:07:20', '2019-12-14 14:07:20', '2019-12-14 14:07:20', NULL),
(20, '80a9d89f-1ebe-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-14 14:10:13', '2019-12-14 14:10:13', '2019-12-14 14:10:13', NULL),
(21, 'c58b47b4-1ebe-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-14 14:12:09', '2019-12-14 14:12:09', '2019-12-14 14:12:09', NULL),
(22, 'f4e5eb9e-1ec2-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-14 14:42:06', '2019-12-14 14:42:06', '2019-12-14 14:42:06', NULL),
(23, '9c4f4437-1ec3-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-14 14:46:47', '2019-12-14 14:46:47', '2019-12-14 14:46:47', NULL),
(24, 'b5156526-2152-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-17 20:56:09', '2019-12-17 20:56:09', '2019-12-17 20:56:09', NULL),
(25, '063f402b-22d9-11ea-81f0-d8fc934a2184', 2, NULL, '2019-12-19 19:30:09', '2019-12-19 19:30:09', '2019-12-19 19:30:09', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` char(36) NOT NULL,
  `cartId` int(10) UNSIGNED NOT NULL,
  `productId` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `pid`, `cartId`, `productId`, `quantity`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '2c656337-1bd1-11ea-81f0-d8fc934a2184', 2, 1, 1, '2019-12-10 20:46:19', '2019-12-10 20:46:19', NULL),
(2, 'dac461fb-1bd1-11ea-81f0-d8fc934a2184', 3, 1, 1, '2019-12-10 20:51:12', '2019-12-10 20:51:12', NULL),
(3, '476c57d4-1bd2-11ea-81f0-d8fc934a2184', 4, 1, 1, '2019-12-10 20:54:14', '2019-12-10 20:54:14', NULL),
(4, '6a2d6098-1bd2-11ea-81f0-d8fc934a2184', 5, 1, 1, '2019-12-10 20:55:12', '2019-12-10 20:55:12', NULL),
(5, '5d626cf2-1d59-11ea-81f0-d8fc934a2184', 6, 1, 1, '2019-12-12 19:33:44', '2019-12-12 19:33:44', NULL),
(6, 'a59016f2-1d5b-11ea-81f0-d8fc934a2184', 7, 7, 1, '2019-12-12 19:50:04', '2019-12-12 19:50:04', NULL),
(7, '57513b86-1d60-11ea-81f0-d8fc934a2184', 8, 7, 1, '2019-12-12 20:23:40', '2019-12-12 20:23:40', NULL),
(8, '6156af9c-1d60-11ea-81f0-d8fc934a2184', 9, 7, 1, '2019-12-12 20:23:57', '2019-12-12 20:23:57', NULL),
(9, '81a3e832-1d60-11ea-81f0-d8fc934a2184', 10, 7, 1, '2019-12-12 20:24:51', '2019-12-12 20:24:51', NULL),
(10, '9b1d6f01-1d60-11ea-81f0-d8fc934a2184', 11, 7, 1, '2019-12-12 20:25:34', '2019-12-12 20:25:34', NULL),
(11, 'a9307cf9-1d60-11ea-81f0-d8fc934a2184', 12, 7, 1, '2019-12-12 20:25:58', '2019-12-12 20:25:58', NULL),
(12, '524f1668-1d63-11ea-81f0-d8fc934a2184', 13, 1, 1, '2019-12-12 20:45:00', '2019-12-12 20:45:00', NULL),
(13, '78acc08e-1d63-11ea-81f0-d8fc934a2184', 14, 1, 1, '2019-12-12 20:46:05', '2019-12-12 20:46:05', NULL),
(14, '9e955826-1d63-11ea-81f0-d8fc934a2184', 15, 1, 1, '2019-12-12 20:47:08', '2019-12-12 20:47:08', NULL),
(15, 'c88aacbb-1d63-11ea-81f0-d8fc934a2184', 16, 9, 1, '2019-12-12 20:48:19', '2019-12-12 20:48:19', NULL),
(16, 'd5f9de37-1d63-11ea-81f0-d8fc934a2184', 17, 9, 1, '2019-12-12 20:48:41', '2019-12-12 20:48:41', NULL),
(17, '2975102a-1d65-11ea-81f0-d8fc934a2184', 18, 9, 1, '2019-12-12 20:58:11', '2019-12-12 20:58:11', NULL),
(18, '192bc527-1ebe-11ea-81f0-d8fc934a2184', 19, 9, 1, '2019-12-14 14:07:20', '2019-12-14 14:07:20', NULL),
(19, '80b0dcfe-1ebe-11ea-81f0-d8fc934a2184', 20, 9, 1, '2019-12-14 14:10:13', '2019-12-14 14:10:13', NULL),
(20, 'c58d82c7-1ebe-11ea-81f0-d8fc934a2184', 21, 9, 3, '2019-12-14 14:12:09', '2019-12-14 14:12:09', NULL),
(21, 'f4eb3085-1ec2-11ea-81f0-d8fc934a2184', 22, 4, 3, '2019-12-14 14:42:06', '2019-12-14 14:42:06', NULL),
(22, '9c55eb2f-1ec3-11ea-81f0-d8fc934a2184', 23, 4, 6, '2019-12-14 14:46:47', '2019-12-14 14:47:52', NULL),
(23, 'e2f4461f-1ec3-11ea-81f0-d8fc934a2184', 23, 9, 3, '2019-12-14 14:48:46', '2019-12-14 14:48:46', NULL),
(24, '15509416-1ec4-11ea-81f0-d8fc934a2184', 23, 7, 21, '2019-12-14 14:50:10', '2019-12-14 16:03:33', NULL),
(25, 'b51dbf29-2152-11ea-81f0-d8fc934a2184', 24, 7, 1, '2019-12-17 20:56:09', '2019-12-17 20:56:09', NULL),
(26, 'd4cb9ddd-2152-11ea-81f0-d8fc934a2184', 24, 5, 1, '2019-12-17 20:57:02', '2019-12-17 20:57:02', NULL),
(27, '0644f584-22d9-11ea-81f0-d8fc934a2184', 25, 3, 4, '2019-12-19 19:30:09', '2019-12-19 19:30:09', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cartStatuses`
--

CREATE TABLE `cartStatuses` (
  `id` int(10) UNSIGNED NOT NULL,
  `mid` varchar(39) NOT NULL,
  `name` varchar(63) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartStatuses`
--

INSERT INTO `cartStatuses` (`id`, `mid`, `name`, `description`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'new', 'New', 'Cart is new and empty', '2019-12-05 20:40:56', '2019-12-05 20:40:56', NULL),
(2, 'active', 'Active', 'Cart has items but the order has not been completed', '2019-12-05 20:40:56', '2019-12-05 20:40:56', NULL),
(3, 'closed', 'Closed', 'The order has been completed and the cart is closed', '2019-12-05 20:40:56', '2019-12-05 20:40:56', NULL),
(4, 'canceled', 'Canceled', 'The order has been canceled and the cart is closed', '2019-12-05 20:40:56', '2019-12-05 20:40:56', NULL),
(5, 'inactive', 'Inactive', 'Cart is no longer the currently active cart, but can be reactivated', '2019-12-05 20:40:56', '2019-12-05 20:40:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` char(36) NOT NULL,
  `productId` int(10) UNSIGNED NOT NULL,
  `createdById` int(10) UNSIGNED NOT NULL,
  `altText` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `type` enum('full_image','thumbnail') NOT NULL DEFAULT 'full_image',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `pid`, `productId`, `createdById`, `altText`, `name`, `file`, `type`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '6704df63-13cc-11ea-81f0-d8fc934a2184', 1, 1, 'Strawberry cupcake', 'Strawberry Delight', 'cupcake_sq_1.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(2, '6704eaa0-13cc-11ea-81f0-d8fc934a2184', 1, 1, 'Strawberry cupcake', 'Strawberry Delight', 'cupcake_sq_1.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(3, '6704ecca-13cc-11ea-81f0-d8fc934a2184', 2, 1, 'Berry cupcake', 'Purple Dream', 'cupcake_sq_2.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(4, '6704edcf-13cc-11ea-81f0-d8fc934a2184', 2, 1, 'Berry cupcake', 'Purple Dream', 'cupcake_sq_2.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(5, '6704eeac-13cc-11ea-81f0-d8fc934a2184', 3, 1, 'Mini strawberry cupcake', 'Mini Berry', 'cupcake_sq_3.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(6, '6704ef85-13cc-11ea-81f0-d8fc934a2184', 3, 1, 'Mini strawberry cupcake', 'Mini Berry', 'cupcake_sq_3.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(7, '6704f068-13cc-11ea-81f0-d8fc934a2184', 4, 1, 'Unicorn tear sparkling cupcake', 'Unicorn Tear', 'cupcake_sq_4.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(8, '6704f180-13cc-11ea-81f0-d8fc934a2184', 4, 1, 'Unicorn tear sparkling cupcake', 'Unicorn Tear', 'cupcake_sq_4.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(9, '6704f31a-13cc-11ea-81f0-d8fc934a2184', 5, 1, 'Red and yellow vanilla cupcake', 'Pearl Rose', 'cupcake_sq_5.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(10, '6704f403-13cc-11ea-81f0-d8fc934a2184', 5, 1, 'Red and yellow vanilla cupcake', 'Pearl Rose', 'cupcake_sq_5.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(11, '6704f4d0-13cc-11ea-81f0-d8fc934a2184', 6, 1, 'Silky red cupcake loaded with frosting', 'Red Silk', 'cupcake_sq_6.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(12, '6704f5a1-13cc-11ea-81f0-d8fc934a2184', 6, 1, 'Silky red cupcake loaded with frosting', 'Red Silk', 'cupcake_sq_6.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(13, '6704f67c-13cc-11ea-81f0-d8fc934a2184', 7, 1, 'Vanilla cupcake with vanilla frosting', 'Vanilla Stack Cake', 'cupcake_sq_7.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(14, '6704f74c-13cc-11ea-81f0-d8fc934a2184', 7, 1, 'Vanilla cupcake with vanilla frosting', 'Vanilla Stack Cake', 'cupcake_sq_7.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(15, '6704f82b-13cc-11ea-81f0-d8fc934a2184', 8, 1, 'Blueberry cupcake piled high with toppings', 'Blueberry Malt Cake', 'cupcake_sq_8.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(16, '6704f902-13cc-11ea-81f0-d8fc934a2184', 8, 1, 'Blueberry cupcake piled high with toppings', 'Blueberry Malt Cake', 'cupcake_sq_8.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(17, '6704f9dd-13cc-11ea-81f0-d8fc934a2184', 9, 1, 'Lemon cupcake with piled high lemon frosting', 'Double Lemon', 'cupcake_sq_9.jpg', 'full_image', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL),
(18, '6704fabb-13cc-11ea-81f0-d8fc934a2184', 9, 1, 'Lemon cupcake with piled high lemon frosting', 'Double Lemon', 'cupcake_sq_9.jpg', 'thumbnail', '2019-11-30 15:52:01', '2019-11-30 15:52:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` char(36) NOT NULL,
  `createdById` int(10) UNSIGNED NOT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `cost` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `pid`, `createdById`, `caption`, `cost`, `description`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '618fccdf-13cb-11ea-81f0-d8fc934a2184', 1, 'Delicious Strawberry Cupcake', 350, 'These strawberry delights will satisfy both your sweet tooth and those strawberry cravings.', 'Strawberry Delight', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL),
(2, '618fd9cd-13cb-11ea-81f0-d8fc934a2184', 1, 'Sweet Berry Cupcake', 200, 'This is the berry cupcake of your dreams, they may be small but pack huge flavor.', 'Purple Dream', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL),
(3, '618fdbf9-13cb-11ea-81f0-d8fc934a2184', 1, 'Mini Strawberry Cupcake', 225, 'These are a miniature version of our famous Strawberry Delight cupcakes, all the flavor, half the guilt.', 'Mini Berry', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL),
(4, '618fdd01-13cb-11ea-81f0-d8fc934a2184', 1, 'Unicorn Tear Sparkling Cupcake', 650, 'What do unicorn tears taste like? We don\'t know, but we do know these cupcakes taste better!', 'Unicorn Tear', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL),
(5, '618fdde3-13cb-11ea-81f0-d8fc934a2184', 1, 'Red and Yellow Rose Vanilla Cupcake', 575, 'Delightful vanilla cupcakes with rose frosting piled high on top.', 'Pearl Rose', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL),
(6, '618fdedc-13cb-11ea-81f0-d8fc934a2184', 1, 'Silky Red Cupcake Loaded with Frosting', 350, 'A vanilla cupcake with strawberry silk frosting eloquently piled high with a peach topping.', 'Red Silk', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL),
(7, '618fdfd8-13cb-11ea-81f0-d8fc934a2184', 1, 'Vanilla Cupcake Piled with Vanilla Frosting', 600, 'Not just another vanilla cupcake. Our Vanilla Stack Cake cupcake is stacked with three scoops of vanilla frosting and topped with drizzled vanilla and a delicious cherry.', 'Vanilla Stack Cake', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL),
(8, '618fe0dd-13cb-11ea-81f0-d8fc934a2184', 1, 'Blueberry Cupcake Piled High with Toppings', 775, 'A large blueberry cupcake topped with blueberry frosting, chocolate syrup, whip cream, and a sweet cherry. Looks and taste like your favorite blueberry malt.', 'Blueberry Malt Cake', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL),
(9, '618fe206-13cb-11ea-81f0-d8fc934a2184', 1, 'Lemon Cupcake with Piled High Lemon Frosting', 450, 'Lemon, lemon, and more lemon! Love lemon? So do we and our Double Lemon cupcake proves it!', 'Double Lemon', '2019-11-30 15:44:42', '2019-11-30 15:44:42', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartStatuses`
--
ALTER TABLE `cartStatuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `cartStatuses`
--
ALTER TABLE `cartStatuses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;