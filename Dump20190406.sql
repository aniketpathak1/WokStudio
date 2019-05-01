-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: wokstudio
-- ------------------------------------------------------
-- Server version	8.0.15
drop schema WokStudio;
create schema WokStudio;
use WokStudio;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cuisines`
--

DROP TABLE IF EXISTS `cuisines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cuisines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cuisineName` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

insert into cuisines values ('1', 'Chinese');
insert into cuisines values ('2', 'Italian');
insert into cuisines values ('3', 'Indian');
insert into cuisines values ('4', 'American');
insert into cuisines values ('5', 'Thai');

--
-- Dumping data for table `cuisines`
--

LOCK TABLES `cuisines` WRITE;
/*!40000 ALTER TABLE `cuisines` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuisines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `pwd` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

insert into customer values (1, 'meghna', 'mathur');
insert into customer values (2, 'rishika', 'parashar');
insert into customer values (3, 'piyush', 'khalya');
insert into customer values (4, 'aniket', 'pathak');

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discountoffers`
--

DROP TABLE IF EXISTS `discountoffers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `discountoffers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `couponint` varchar(10) DEFAULT NULL,
  `discount` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `DiscountProductId_idx` (`productId`),
  CONSTRAINT `DiscountProductId` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discountoffers`
--

LOCK TABLES `discountoffers` WRITE;
/*!40000 ALTER TABLE `discountoffers` DISABLE KEYS */;
/*!40000 ALTER TABLE `discountoffers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `favorites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FavoriteProductId_idx` (`productId`),
  KEY `FavoriteUserId_idx` (`userId`),
  CONSTRAINT `FavoriteProductId` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FavoriteUserId` FOREIGN KEY (`userId`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foodpreference`
--

DROP TABLE IF EXISTS `foodpreference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `foodpreference` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `foodPreference` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodpreference`
--

LOCK TABLES `foodpreference` WRITE;
/*!40000 ALTER TABLE `foodpreference` DISABLE KEYS */;
/*!40000 ALTER TABLE `foodpreference` ENABLE KEYS */;
UNLOCK TABLES;

insert into foodpreference values ('1', 'Vegetarian');
insert into foodpreference values ('2', 'Non-Veg');
--
-- Table structure for table `foodtype`
--

DROP TABLE IF EXISTS `foodtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `foodtype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `foodType` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodtype`
--

LOCK TABLES `foodtype` WRITE;
/*!40000 ALTER TABLE `foodtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `foodtype` ENABLE KEYS */;
UNLOCK TABLES;

insert into foodtype values ('1', 'Starters');
insert into foodtype values ('2', 'Beverages');
insert into foodtype values ('3', 'Salad');
insert into foodtype values ('4', 'Meal');
insert into foodtype values ('5', 'Dessert');

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `orderDate` date DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `OrderProductId_idx` (`productId`),
  KEY `OrderUserId_idx` (`userId`),
  CONSTRAINT `OrderProductId` FOREIGN KEY (`productId`) REFERENCES `product` (`id`),
  CONSTRAINT `OrderUserId` FOREIGN KEY (`userId`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

insert into orders values (1, 3, 'meghna', '2019-04-23', '15.50', 'delivered');
--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `cuisineId` int(11) DEFAULT NULL,
  `foodPrefId` int(11) DEFAULT NULL,
  `protienId` int(11) DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `princeRange` varchar(10) DEFAULT NULL,
  `avgRating` int(11) DEFAULT NULL,
  `stockQty` int(11) DEFAULT NULL,
  `timeOfDay` varchar(10) DEFAULT NULL,
  `filePath` longtext DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ProductCuisineId_idx` (`cuisineId`),
  KEY `ProductFoodPrefId_idx` (`foodPrefId`),
  KEY `ProductProteinId_idx` (`protienId`),
  KEY `ProductTypeId_idx` (`typeId`),
  CONSTRAINT `ProductCuisineId` FOREIGN KEY (`cuisineId`) REFERENCES `cuisines` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `ProductFoodPrefId` FOREIGN KEY (`foodPrefId`) REFERENCES `foodpreference` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `ProductProteinId` FOREIGN KEY (`protienId`) REFERENCES `protein` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `ProductTypeId` FOREIGN KEY (`typeId`) REFERENCES `foodtype` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

insert into product values (1, 'Pasta e fagioli', 2, 1, 10, 4, 8.50, 'low', 3.9, 20, 'Lun-Din','..\images\1.jpg' );
insert into product values (2, 'Risotto', 2, 1, 10, 4, 9.50, 'low', 4.8, 20, 'Lun-Din','..\images\2.jpg' );
insert into product values (3, 'Pizza marinara', 2, 1, 10, 4, 8.50, 'low', 4.0, 20, 'Lun-Din','..\images\3.jpg' );
insert into product values (4, 'Cheese Lasagna', 2, 2, 5, 4, 11, 'medium', 4.9, 20, 'Lun-Din','..\images\4.jpg' );
insert into product values (5, 'Chicken Ravioli Alfredo Sauce', 2, 2, 2, 4, 10.50, 'medium', 4.0, 20, 'Lun-Din','..\images\5.jpg' );
insert into product values (6, 'Spinach Pesto Ravioli', 2, 1, 10, 4, 8.50, 'low', 4.0, 20, 'Lun-Din','..\images\6.jpg' );
insert into product values (7, 'Cacciucco', 2, 2, 7, 4, 14.50, 'high', 4.7, 20, 'Lun-Din','..\images\7.jpg' );
insert into product values (8, 'Cotoletta with potatoes', 2, 2, 2, 4, 12, 'medium', 3.8, 20, 'Lun-Din','..\images\8.jpg' );
insert into product values (9, 'Cioppino soup', 2, 2, 9, 1, 12, 'medium', 4.5, 20, 'Lun-Din','..\images\9.jpg' );
insert into product values (10, 'Garlic herb cheese breadsticks', 2, 1, 10, 1, 4.50, 'cheap', 4.5, 20, 'Lun-Din','..\images\10.jpg' );
insert into product values (11, 'Fish fingers', 2, 2, 6, 1, 6.50, 'low', 3.9, 20, 'Lun-Din','..\images\11.jpg' );

insert into product values (12, 'Sweet and Sour Pork', 1, 1, 10, 4, 14.50, 'high', 3.9, 20, 'Lun-Din','..\images\1.jpg' );
insert into product values (13, 'Kung Pao Chicken', 1, 1, 10, 4, 11.50, 'medium', 4.8, 20, 'Lun-Din','..\images\2.jpg' );
insert into product values (14, 'Ma Po Tofu', 1, 1, 10, 4, 10.50, 'medium', 4.0, 20, 'Lun-Din','..\images\3.jpg' );
insert into product values (15, 'Wontons', 1, 2, 5, 1, 11, 'medium', 4.9, 20, 'Lun-Din','..\images\4.jpg' );
insert into product values (16, 'Dumplings', 1, 2, 2, 1, 7.50, 'low', 4.0, 20, 'Breakfast','..\images\5.jpg' );
insert into product values (17, 'Chow Mein', 1, 1, 10, 4, 8.50, 'low', 4.0, 20, 'Lun-Din','..\images\6.jpg' );
insert into product values (18, 'Spring Rolls', 1, 2, 7, 1, 5, 'low', 4.7, 20, 'Lun-Din','..\images\7.jpg' );
insert into product values (19, 'Lettuce wraps', 1, 2, 2, 4, 8.50, 'low', 3.8, 20, 'Lun-Din','..\images\8.jpg' );
insert into product values (20, 'Hot and sour soup', 1, 2, 9, 1, 12, 'medium', 4.5, 20, 'Lun-Din','..\images\9.jpg' );
insert into product values (21, 'Chicken fried rice', 1, 1, 10, 1, 4.50, 'cheap', 4.5, 20, 'Lun-Din','..\images\10.jpg' );
insert into product values (22, 'Pork chop suey', 1, 2, 6, 1, 6.50, 'low', 3.9, 20, 'Lun-Din','..\images\11.jpg' );
insert into product values (23, 'Chicken chow mein', 1, 2, 2, 4, 12, 'medium', 3.8, 20, 'Lun-Din','..\images\12.jpg' );
insert into product values (24, 'Chicken chop suey', 1, 1, 10, 1, 4.50, 'cheap', 4.5, 20, 'Lun-Din','..\images\13.jpg' );
insert into product values (25, 'Vegetable fried rice', 1, 2, 6, 1, 6.50, 'low', 3.9, 20, 'Lun-Din','..\images\14.jpg' );


--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productimage`
--

--
-- Table structure for table `protein`
--

DROP TABLE IF EXISTS `protein`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `protein` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proteinName` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protein`
--

LOCK TABLES `protein` WRITE;
/*!40000 ALTER TABLE `protein` DISABLE KEYS */;
/*!40000 ALTER TABLE `protein` ENABLE KEYS */;
UNLOCK TABLES;

insert into protein values ('1', 'Egg');
insert into protein values ('2', 'Chicken');
insert into protein values ('3', 'Tofu');
insert into protein values ('4', 'Pork');
insert into protein values ('5', 'Beef');
insert into protein values ('6', 'Fish');
insert into protein values ('7', 'Prawns');
insert into protein values ('8', 'Lamb');
insert into protein values ('9', 'Crab');
insert into protein values ('10', 'Veggies');



--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ratings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rating` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `RatingProductId_idx` (`productId`),
  CONSTRAINT `RatingProductId` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `review` longtext,
  PRIMARY KEY (`id`),
  KEY `ReviewProductId_idx` (`productId`),
  KEY `ReviewUserId_idx` (`userId`),
  CONSTRAINT `ReviewProductId` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ReviewUserId` FOREIGN KEY (`userId`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useradmin`
--

DROP TABLE IF EXISTS `useradmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `useradmin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `pwd` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useradmin`
--

LOCK TABLES `useradmin` WRITE;
/*!40000 ALTER TABLE `useradmin` DISABLE KEYS */;
/*!40000 ALTER TABLE `useradmin` ENABLE KEYS */;
UNLOCK TABLES;

insert into useradmin values ('1256', 'meghna', 'mathur');
insert into useradmin values ('1257', 'rishika', 'parashar');
insert into useradmin values ('1258', 'piyush', 'khalya');
insert into useradmin values ('1259', 'aniket', 'pathak');

--
-- Table structure for table `userprofile`
--

DROP TABLE IF EXISTS `userprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `userprofile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `emailAddress` varchar(50) NOT NULL,
  `address` longtext,
  `phoneint` bigint(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ProfileUserId_idx` (`userId`),
  CONSTRAINT `ProfileUserId` FOREIGN KEY (`userId`) REFERENCES `customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userprofile`
--

LOCK TABLES `userprofile` WRITE;
/*!40000 ALTER TABLE `userprofile` DISABLE KEYS */;
/*!40000 ALTER TABLE `userprofile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-06 14:29:59

insert into userprofile values (1, 1, 'Meghna', 'Mathur', 'mxm180022@utdallas.edu', 'Estates of Frankford', 5555555555);
insert into userprofile values (2, 2, 'Rishika', 'Parashar', 'rxp180022@utdallas.edu', 'Ashwood Apartments', 6666666666);
insert into userprofile values (3, 3, 'Piyush', 'Khalya', 'prk180002@utdallas.edu', 'Pearl on Frankford', 7777777777);
insert into userprofile values (4, 4, 'Aniket', 'Pathak', 'adp170003@utdallas.edu', 'Chatham Courts', 8888888888);

