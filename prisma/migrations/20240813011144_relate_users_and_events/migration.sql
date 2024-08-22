/*
  Warnings:

  - Added the required column `State` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "State" TEXT NOT NULL,
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "address2" TEXT,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phone" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
