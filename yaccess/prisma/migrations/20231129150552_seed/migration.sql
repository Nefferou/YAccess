-- CreateTable
CREATE TABLE `User` (
    `Id` INTEGER NOT NULL,
    `LastName` VARCHAR(255) NULL,
    `FirstName` VARCHAR(255) NULL,
    `Age` INTEGER NULL,
    `Email` VARCHAR(255) NULL,
    `Photo` BLOB NULL,
    `Password` VARCHAR(255) NULL,
    `PhoneNumber` VARCHAR(255) NULL,
    `Address` VARCHAR(255) NULL,
    `BadgeList` TEXT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Badge` (
    `Id` INTEGER NOT NULL,
    `Title` VARCHAR(255) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Car` (
    `Id` INTEGER NOT NULL,
    `LicensePlate` VARCHAR(255) NULL,
    `Brand` VARCHAR(255) NULL,
    `Model` VARCHAR(255) NULL,
    `NumberOfSeats` INTEGER NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Driver` (
    `Id` INTEGER NOT NULL,
    `LicenseNumber` VARCHAR(255) NULL,
    `UserId` INTEGER NULL,

    INDEX `UserId`(`UserId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trip` (
    `Id` INTEGER NOT NULL,
    `DepartureLocation` VARCHAR(255) NULL,
    `ArrivalLocation` VARCHAR(255) NULL,
    `AppointmentDate` DATETIME(0) NULL,
    `Distance` DECIMAL(10, 2) NULL,
    `FareAmount` DECIMAL(10, 2) NULL,
    `CarbonEco` DECIMAL(10, 2) NULL,
    `IsFinished` BOOLEAN NULL,
    `IsPaid` BOOLEAN NULL,
    `Comment` TEXT NULL,
    `Rating` DECIMAL(3, 1) NULL,
    `DriverId` INTEGER NULL,

    INDEX `DriverId`(`DriverId`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ownership` (
    `UserId` INTEGER NOT NULL,
    `BadgeId` INTEGER NOT NULL,

    INDEX `BadgeId`(`BadgeId`),
    PRIMARY KEY (`UserId`, `BadgeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserCar` (
    `UserId` INTEGER NOT NULL,
    `CarId` INTEGER NOT NULL,

    INDEX `CarId`(`CarId`),
    PRIMARY KEY (`UserId`, `CarId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IsPassenger` (
    `UserId` INTEGER NOT NULL,
    `TripId` INTEGER NOT NULL,
    `Comment` TEXT NULL,
    `Rating` DECIMAL(3, 1) NULL,

    INDEX `TripId`(`TripId`),
    PRIMARY KEY (`UserId`, `TripId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User`(`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Trip` ADD CONSTRAINT `Trip_ibfk_1` FOREIGN KEY (`DriverId`) REFERENCES `Driver`(`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Ownership` ADD CONSTRAINT `Ownership_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User`(`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Ownership` ADD CONSTRAINT `Ownership_ibfk_2` FOREIGN KEY (`BadgeId`) REFERENCES `Badge`(`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `UserCar` ADD CONSTRAINT `UserCar_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User`(`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `UserCar` ADD CONSTRAINT `UserCar_ibfk_2` FOREIGN KEY (`CarId`) REFERENCES `Car`(`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `IsPassenger` ADD CONSTRAINT `IsPassenger_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User`(`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `IsPassenger` ADD CONSTRAINT `IsPassenger_ibfk_2` FOREIGN KEY (`TripId`) REFERENCES `Trip`(`Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
