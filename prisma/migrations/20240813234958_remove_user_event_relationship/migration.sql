/*
  Warnings:

  - You are about to drop the `UsersOnEvents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsersOnEvents" DROP CONSTRAINT "UsersOnEvents_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnEvents" DROP CONSTRAINT "UsersOnEvents_userId_fkey";

-- DropTable
DROP TABLE "UsersOnEvents";
