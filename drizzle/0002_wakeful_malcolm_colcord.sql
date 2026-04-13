CREATE TABLE `admissionForms` (
	`id` int AUTO_INCREMENT NOT NULL,
	`studentName` varchar(255) NOT NULL,
	`fatherName` varchar(255) NOT NULL,
	`motherName` varchar(255) NOT NULL,
	`dateOfBirth` varchar(20) NOT NULL,
	`gender` varchar(20) NOT NULL,
	`class` varchar(50) NOT NULL,
	`previousSchool` varchar(255) NOT NULL,
	`address` longtext NOT NULL,
	`mobileNumber` varchar(20) NOT NULL,
	`email` varchar(320) NOT NULL,
	`photoUrl` varchar(500),
	`fatherOccupation` varchar(255),
	`motherOccupation` varchar(255),
	`annualIncome` varchar(100),
	`status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
	`admissionNumber` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `admissionForms_id` PRIMARY KEY(`id`),
	CONSTRAINT `admissionForms_admissionNumber_unique` UNIQUE(`admissionNumber`)
);
--> statement-breakpoint
CREATE TABLE `contactForms` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`message` longtext NOT NULL,
	`status` enum('new','read','resolved') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contactForms_id` PRIMARY KEY(`id`)
);
