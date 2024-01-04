/*
  Warnings:

  - The primary key for the `Badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Badge` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Badge` table. All the data in the column will be lost.
  - The primary key for the `Car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Brand` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `LicensePlate` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `Model` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `NumberOfSeats` on the `Car` table. All the data in the column will be lost.
  - The primary key for the `Driver` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Id` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `LicenseNumber` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Driver` table. All the data in the column will be lost.
  - The primary key for the `Trip` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `AppointmentDate` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `ArrivalLocation` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `CarbonEco` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `Comment` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `DepartureLocation` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `Distance` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `DriverId` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `FareAmount` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `IsFinished` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `IsPaid` on the `Trip` table. All the data in the column will be lost.
  - You are about to drop the column `Rating` on the `Trip` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `BadgeList` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Bio` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `FirstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `PhoneNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Photo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `IsPassenger` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ownership` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserCar` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Car` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[carId]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carId` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Driver` DROP FOREIGN KEY `Driver_ibfk_1`;

-- DropForeignKey
ALTER TABLE `IsPassenger` DROP FOREIGN KEY `IsPassenger_ibfk_1`;

-- DropForeignKey
ALTER TABLE `IsPassenger` DROP FOREIGN KEY `IsPassenger_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Ownership` DROP FOREIGN KEY `Ownership_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Ownership` DROP FOREIGN KEY `Ownership_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Trip` DROP FOREIGN KEY `Trip_ibfk_1`;

-- DropForeignKey
ALTER TABLE `UserCar` DROP FOREIGN KEY `UserCar_ibfk_1`;

-- DropForeignKey
ALTER TABLE `UserCar` DROP FOREIGN KEY `UserCar_ibfk_2`;

-- AlterTable
ALTER TABLE `Badge` DROP PRIMARY KEY,
    DROP COLUMN `Id`,
    DROP COLUMN `Title`,
    ADD COLUMN `description` TEXT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `ownerId` INTEGER NOT NULL,
    ADD COLUMN `photo` BLOB NULL,
    ADD COLUMN `title` VARCHAR(255) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Car` DROP PRIMARY KEY,
    DROP COLUMN `Brand`,
    DROP COLUMN `Id`,
    DROP COLUMN `LicensePlate`,
    DROP COLUMN `Model`,
    DROP COLUMN `NumberOfSeats`,
    ADD COLUMN `brand` VARCHAR(255) NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `licensePlate` VARCHAR(255) NULL,
    ADD COLUMN `model` VARCHAR(255) NULL,
    ADD COLUMN `numberOfSeats` INTEGER NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Driver` DROP PRIMARY KEY,
    DROP COLUMN `Id`,
    DROP COLUMN `LicenseNumber`,
    DROP COLUMN `UserId`,
    ADD COLUMN `carId` INTEGER NOT NULL,
    ADD COLUMN `licenseNumber` VARCHAR(255) NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Trip` DROP PRIMARY KEY,
    DROP COLUMN `AppointmentDate`,
    DROP COLUMN `ArrivalLocation`,
    DROP COLUMN `CarbonEco`,
    DROP COLUMN `Comment`,
    DROP COLUMN `DepartureLocation`,
    DROP COLUMN `Distance`,
    DROP COLUMN `DriverId`,
    DROP COLUMN `FareAmount`,
    DROP COLUMN `Id`,
    DROP COLUMN `IsFinished`,
    DROP COLUMN `IsPaid`,
    DROP COLUMN `Rating`,
    ADD COLUMN `appointmentDate` DATETIME(0) NULL,
    ADD COLUMN `arrivalLocation` VARCHAR(255) NULL,
    ADD COLUMN `carbonEco` DECIMAL(10, 2) NULL,
    ADD COLUMN `comment` TEXT NULL,
    ADD COLUMN `departureLocation` VARCHAR(255) NULL,
    ADD COLUMN `distance` DECIMAL(10, 2) NULL,
    ADD COLUMN `driverCarId` INTEGER NULL,
    ADD COLUMN `fareAmount` DECIMAL(10, 2) NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `isFinished` BOOLEAN NULL,
    ADD COLUMN `isPaid` BOOLEAN NULL,
    ADD COLUMN `passengerId` INTEGER NULL,
    ADD COLUMN `rating` DECIMAL(3, 1) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `Address`,
    DROP COLUMN `Age`,
    DROP COLUMN `BadgeList`,
    DROP COLUMN `Bio`,
    DROP COLUMN `Email`,
    DROP COLUMN `FirstName`,
    DROP COLUMN `Id`,
    DROP COLUMN `LastName`,
    DROP COLUMN `Password`,
    DROP COLUMN `PhoneNumber`,
    DROP COLUMN `Photo`,
    ADD COLUMN `address` VARCHAR(255) NULL,
    ADD COLUMN `bio` VARCHAR(255) NULL,
    ADD COLUMN `email` VARCHAR(255) NOT NULL,
    ADD COLUMN `firstName` VARCHAR(255) NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `lastName` VARCHAR(255) NULL,
    ADD COLUMN `passengerId` INTEGER NULL,
    ADD COLUMN `password` VARCHAR(255) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(255) NULL,
    ADD COLUMN `photo` BLOB NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `IsPassenger`;

-- DropTable
DROP TABLE `Ownership`;

-- DropTable
DROP TABLE `UserCar`;

-- CreateTable
CREATE TABLE `Passenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `comment` TEXT NULL,
    `rating` DECIMAL(3, 1) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Badge_ownerId_fkey` ON `Badge`(`ownerId`);

-- CreateIndex
CREATE UNIQUE INDEX `Car_userId_key` ON `Car`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `Driver_carId_key` ON `Driver`(`carId`);

-- CreateIndex
CREATE UNIQUE INDEX `Driver_userId_key` ON `Driver`(`userId`);

-- CreateIndex
CREATE INDEX `Trip_driverCarId_fkey` ON `Trip`(`driverCarId`);

-- CreateIndex
CREATE INDEX `Trip_passengerId_fkey` ON `Trip`(`passengerId`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- CreateIndex
CREATE INDEX `User_passengerId_fkey` ON `User`(`passengerId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Badge` ADD CONSTRAINT `Badge_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trip` ADD CONSTRAINT `Trip_driverCarId_fkey` FOREIGN KEY (`driverCarId`) REFERENCES `Driver`(`carId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trip` ADD CONSTRAINT `Trip_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
