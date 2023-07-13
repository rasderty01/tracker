CREATE TABLE `myTable` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`link` text,
	`date` timestamp DEFAULT (now())
);
