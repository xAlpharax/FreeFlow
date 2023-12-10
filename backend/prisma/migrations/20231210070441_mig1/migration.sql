-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_data_id` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_user_data_id_key`(`user_data_id`),
    UNIQUE INDEX `user_email_key`(`email`),
    UNIQUE INDEX `user_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tag_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `author_id` INTEGER NOT NULL,
    `tags` JSON NOT NULL,

    UNIQUE INDEX `course_title_key`(`title`),
    UNIQUE INDEX `course_description_key`(`description`),
    UNIQUE INDEX `course_author_id_key`(`author_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total_seconds` INTEGER NOT NULL,
    `total_articles` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_data` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total_readers` INTEGER NOT NULL,
    `courseId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_feedback` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `feedback_value` INTEGER NOT NULL,
    `feedback_text` VARCHAR(191) NOT NULL,
    `course_id` INTEGER NOT NULL,
    `author_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_user_data_id_fkey` FOREIGN KEY (`user_data_id`) REFERENCES `user_data`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `course_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_data` ADD CONSTRAINT `course_data_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_feedback` ADD CONSTRAINT `course_feedback_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_feedback` ADD CONSTRAINT `course_feedback_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
