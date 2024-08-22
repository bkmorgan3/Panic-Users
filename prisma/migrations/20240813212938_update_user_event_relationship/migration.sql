/*
  Warnings:

  - You are about to drop the column `State` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Event` table. All the data in the column will be lost.
  - Added the required column `state` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_userId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "State",
DROP COLUMN "userId",
ADD COLUMN     "state" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UsersOnEvents" (
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UsersOnEvents_pkey" PRIMARY KEY ("eventId","userId")
);

-- AddForeignKey
ALTER TABLE "UsersOnEvents" ADD CONSTRAINT "UsersOnEvents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnEvents" ADD CONSTRAINT "UsersOnEvents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
