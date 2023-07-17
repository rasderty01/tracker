CREATE TABLE `Users` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`userid` text,
	`fileKey` text,
	`link` text,
	`date` timestamp DEFAULT (now())
);
