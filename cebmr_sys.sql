-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 01, 2023 at 09:17 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cebmr_sys`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
CREATE TABLE IF NOT EXISTS `account` (
  `accno` int(20) NOT NULL,
  `cname` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`accno`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`accno`, `cname`) VALUES
(10000001, 'Patty O’Furniture'),
(10000002, 'Paddy O’Furniture'),
(10000003, 'Olive Yew'),
(10000004, 'Aida Bugg'),
(10000005, 'Maureen Biologist'),
(10000006, 'Teri Dactyl'),
(10000007, 'Peg Legge'),
(10000008, 'Allie Grater'),
(10000009, 'Liz Erd'),
(10000010, 'A. Mused'),
(10000011, 'Constance Noring'),
(10000012, 'Lois Di Nominator'),
(10000013, 'Minnie Van Ryder'),
(10000014, 'Lynn O’Leeum'),
(10000015, 'P. Ann O’Recital'),
(10000016, 'Ray O’Sun'),
(10000017, 'Lee A. Sun'),
(10000018, 'Ray Sin'),
(10000019, 'Isabelle Ringing'),
(10000020, 'Eileen Sideways'),
(10000021, 'Rita Book'),
(10000022, 'Paige Turner'),
(10000023, 'Rhoda Report'),
(10000024, 'Augusta Wind'),
(10000025, 'Chris Anthemum'),
(10000026, 'Anne Teak'),
(10000027, 'U.R. Nice'),
(10000028, 'Anita Bath'),
(10000029, 'Harriet Upp'),
(10000030, 'I.M. Tired'),
(10000031, 'I. Missy Ewe'),
(10000032, 'Ivana B. Withew'),
(10000033, 'Anita Letterback'),
(10000034, 'Hope Furaletter'),
(10000035, 'B. Homesoon'),
(10000036, 'Bea Mine'),
(10000037, 'Bess Twishes'),
(10000038, 'C. Yasoon'),
(10000039, 'Audie Yose'),
(10000040, 'Dee End'),
(10000041, 'Amanda Hug'),
(10000042, 'Ben Dover'),
(10000043, 'Eileen Dover'),
(10000044, 'Willie Makit'),
(10000045, 'Willie Findit'),
(10000046, 'Skye Blue'),
(10000047, 'Staum Clowd'),
(10000048, 'Addie Minstra'),
(10000049, 'Anne Ortha'),
(10000050, 'Dave Allippa'),
(10000051, 'Dee Zynah'),
(10000052, 'Hugh Mannerizorsa'),
(10000053, 'Loco Lyzayta'),
(10000054, 'Manny Jah'),
(10000055, 'Mark Ateer'),
(10000056, 'Reeve Ewer'),
(10000057, 'Tex Ryta'),
(10000058, 'Theresa Green'),
(10000059, 'Barry Kade'),
(10000060, 'Stan Dupp'),
(10000061, 'Neil Down'),
(10000062, 'Con Trariweis'),
(10000063, 'Don Messwidme'),
(10000064, 'Al Annon'),
(10000065, 'Anna Domino'),
(10000066, 'Clyde Stale'),
(10000067, 'Anna Logwatch'),
(10000068, 'Anna Littlical'),
(10000069, 'Norma Leigh Absent'),
(10000070, 'Sly Meebuggah'),
(10000071, 'Saul Goodmate'),
(10000072, 'Faye Clether'),
(10000073, 'Sarah Moanees'),
(10000074, 'Ty Ayelloribbin'),
(10000075, 'Hugo First'),
(10000076, 'Percy Vere'),
(10000077, 'Jack Aranda'),
(10000078, 'Olive Tree'),
(10000079, 'Fran G. Pani'),
(10000080, 'John Quil'),
(10000081, 'Ev R. Lasting'),
(10000082, 'Anne Thurium'),
(10000083, 'Cherry Blossom'),
(10000084, 'Glad I. Oli'),
(10000085, 'Ginger Plant'),
(10000086, 'Del Phineum'),
(10000087, 'Rose Bush'),
(10000088, 'Perry Scope'),
(10000089, 'Frank N. Stein'),
(10000090, 'Roy L. Commishun'),
(10000091, 'Pat Thettick'),
(10000092, 'Percy Kewshun'),
(10000093, 'Rod Knee'),
(10000094, 'Hank R. Cheef'),
(10000095, 'Bridget Theriveaquai'),
(10000096, 'Pat N. Toffis'),
(10000097, 'Karen Onnabit'),
(10000098, 'Col Fays'),
(10000099, 'Fay Daway'),
(10000100, 'Joe V. Awl'),
(10000101, 'Wes Yabinlatelee'),
(10000102, 'Colin Sik'),
(10000103, 'Greg Arias'),
(10000104, 'Toi Story'),
(10000105, 'Gene Eva Convenshun'),
(10000106, 'Jen Tile'),
(10000107, 'Simon Sais'),
(10000108, 'Peter Owt'),
(10000109, 'Hugh N. Cry'),
(10000110, 'Lee Nonmi'),
(10000111, 'Lynne Gwafranca'),
(10000112, 'Art Decco'),
(10000113, 'Lynne Gwistic'),
(10000114, 'Polly Ester Undawair'),
(10000115, 'Oscar Nommanee'),
(10000116, 'Laura Biding'),
(10000117, 'Laura Norda'),
(10000118, 'Des Ignayshun'),
(10000119, 'Mike Rowe-Soft'),
(10000120, 'Anne T. Kwayted'),
(10000121, 'Wayde N. Thabalanz'),
(10000122, 'Dee Mandingboss'),
(10000123, 'Sly Meedentalfloss'),
(10000124, 'Stanley Knife'),
(10000125, 'Wynn Dozeaplikayshun'),
(10000126, 'Mal Ajusted'),
(10000127, 'Penny Black'),
(10000128, 'Mal Nurrisht'),
(10000129, 'Polly Pipe'),
(10000130, 'Polly Wannakrakouer'),
(10000131, 'Con Staninterupshuns'),
(10000132, 'Fran Tick'),
(10000133, 'Santi Argo'),
(10000134, 'Carmen Goh'),
(10000135, 'Carmen Sayid'),
(10000136, 'Norma Stitts'),
(10000137, 'Ester La Vista'),
(10000138, 'Manuel Labor'),
(10000139, 'Ivan Itchinos'),
(10000140, 'Ivan Notheridiya'),
(10000141, 'Mustafa Leek'),
(10000142, 'Emma Grate'),
(10000143, 'Annie Versaree'),
(10000144, 'Tim Midsaylesman'),
(10000145, 'Mary Krismass'),
(10000146, 'Tim “Buck” Too'),
(10000147, 'Lana Lynne Creem'),
(10000148, 'Wiley Waites'),
(10000149, 'Ty R. Leeva'),
(10000150, 'Ed U. Cayshun'),
(10000151, 'Anne T. Dote'),
(10000152, 'Claude Strophobia'),
(10000153, 'Anne Gloindian'),
(10000154, 'Dulcie Veeta'),
(10000155, 'Abby Normal');

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
CREATE TABLE IF NOT EXISTS `bills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accno` int(20) NOT NULL,
  `rby` int(20) DEFAULT NULL,
  `units` int(20) DEFAULT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`,`date`,`accno`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `accno`, `rby`, `units`, `date`) VALUES
(1, 10000011, 1, 13, '2023-04-13'),
(2, 10000011, 1, 13, '2023-04-13'),
(3, 10000011, 1, 13, '2023-04-13'),
(4, 10000011, 1, 13, '2023-04-13'),
(5, 10000013, 1, 13, '2023-04-13'),
(6, 10000013, 1, 13, '2023-04-13'),
(7, 10000013, 1, 13, '2023-04-13'),
(8, 10000012, 1, 13, '2023-04-13'),
(9, 10000012, 1, 13, '2023-04-13'),
(10, 10000012, 1, 13, '2023-04-13'),
(11, 10000012, 1, 13, '2023-04-13'),
(12, 10000010, 1, 13, '2023-04-13'),
(13, 10000031, 2, 2, '2023-04-29'),
(14, 10000001, 2, 10, '2023-04-29'),
(15, 10000001, 2, 1, '2023-04-28'),
(16, 10000002, 2, 3, '2023-04-28'),
(17, 10000002, 2, 48, '2023-04-04'),
(18, 10000001, 1, 5, '2023-04-04'),
(19, 10000003, 1, 80, '2023-03-29'),
(20, 10000012, 1, 4, '2023-04-29'),
(21, 10000004, 1, 5, '2023-04-30'),
(22, 10000051, 1, 32, '2023-04-30'),
(23, 10000041, 1, 52, '2023-04-23'),
(24, 10000005, 1, 25, '2023-04-25'),
(25, 10000008, 1, 50, '2023-04-06'),
(26, 10000003, 1, 52, '2023-05-01'),
(27, 10000002, 1, 1, '2023-05-01'),
(28, 10000002, 1, 34, '2023-05-01'),
(29, 10000002, 1, 47, '2023-05-02'),
(30, 10000002, 1, 91, '2023-04-18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `psw` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `psw`) VALUES
(1, 'Janith', 'bkjanith@gmail.com', '1234'),
(2, 'Kamal', 'kamal@gmail.com', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
