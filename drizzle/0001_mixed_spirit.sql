CREATE TABLE `branches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`address` longtext NOT NULL,
	`phone` varchar(20) NOT NULL,
	`email` varchar(320) NOT NULL,
	`description` longtext,
	`image` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `branches_id` PRIMARY KEY(`id`),
	CONSTRAINT `branches_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `courseFees` (
	`id` int AUTO_INCREMENT NOT NULL,
	`courseId` int NOT NULL,
	`feeType` varchar(100) NOT NULL,
	`amount` decimal(10,2) NOT NULL,
	`description` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `courseFees_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `courses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`description` longtext,
	`shortDescription` text,
	`category` enum('navodaya','sainik','military','sports','regular') NOT NULL,
	`duration` varchar(100),
	`ageGroup` varchar(100),
	`admissionDetails` longtext,
	`facilities` longtext,
	`image` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `courses_id` PRIMARY KEY(`id`),
	CONSTRAINT `courses_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `enquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`message` longtext NOT NULL,
	`status` enum('new','read','resolved') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `enquiries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `faculty` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`designation` varchar(255) NOT NULL,
	`category` enum('school','hostel','coaching') NOT NULL,
	`qualification` varchar(255),
	`experience` varchar(100),
	`email` varchar(320),
	`phone` varchar(20),
	`image` varchar(500),
	`bio` longtext,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `faculty_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `galleryImages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`category` enum('campus','classroom','hostel','sports','faculty') NOT NULL,
	`imageUrl` varchar(500) NOT NULL,
	`description` text,
	`order` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `galleryImages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `results` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`category` enum('navodaya','military','sainik','class5','class8','class10') NOT NULL,
	`year` int NOT NULL,
	`passPercentage` decimal(5,2),
	`totalStudents` int,
	`toppers` longtext,
	`resultUrl` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `results_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `scholarshipRegistrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`studentName` varchar(255) NOT NULL,
	`fatherName` varchar(255) NOT NULL,
	`motherName` varchar(255) NOT NULL,
	`dateOfBirth` varchar(20) NOT NULL,
	`class` varchar(50) NOT NULL,
	`previousSchool` varchar(255) NOT NULL,
	`address` longtext NOT NULL,
	`mobileNumber` varchar(20) NOT NULL,
	`photoUrl` varchar(500),
	`admitCardUrl` varchar(500),
	`admitCardNumber` varchar(100),
	`status` enum('registered','admitted','rejected') NOT NULL DEFAULT 'registered',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `scholarshipRegistrations_id` PRIMARY KEY(`id`),
	CONSTRAINT `scholarshipRegistrations_admitCardNumber_unique` UNIQUE(`admitCardNumber`)
);
