-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastName` VARCHAR(255) NULL,
    `firstName` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `photo` BLOB NULL,
    `password` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `passengerId` INTEGER NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Driver` (
    `licenseNumber` VARCHAR(255) NULL,
    `carId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Driver_carId_key`(`carId`),
    UNIQUE INDEX `Driver_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `licensePlate` VARCHAR(255) NULL,
    `brand` VARCHAR(255) NULL,
    `model` VARCHAR(255) NULL,
    `numberOfSeats` INTEGER NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Car_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Passenger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `comment` TEXT NULL,
    `rating` DECIMAL(3, 1) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Badge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `photo` BLOB NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Trip` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departureLocation` VARCHAR(255) NULL,
    `arrivalLocation` VARCHAR(255) NULL,
    `appointmentDate` DATETIME(0) NULL,
    `distance` DECIMAL(10, 2) NULL,
    `fareAmount` DECIMAL(10, 2) NULL,
    `carbonEco` DECIMAL(10, 2) NULL,
    `isFinished` BOOLEAN NULL,
    `isPaid` BOOLEAN NULL,
    `comment` TEXT NULL,
    `rating` DECIMAL(3, 1) NULL,
    `passengerId` INTEGER NULL,
    `driverCarId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Driver` ADD CONSTRAINT `Driver_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Car` ADD CONSTRAINT `Car_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Badge` ADD CONSTRAINT `Badge_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trip` ADD CONSTRAINT `Trip_passengerId_fkey` FOREIGN KEY (`passengerId`) REFERENCES `Passenger`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trip` ADD CONSTRAINT `Trip_driverCarId_fkey` FOREIGN KEY (`driverCarId`) REFERENCES `Driver`(`carId`) ON DELETE SET NULL ON UPDATE CASCADE;
