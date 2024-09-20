-- AlterTable
ALTER TABLE "User" ADD COLUMN     "eventId" TEXT NOT NULL DEFAULT 'clztbhmg30002taeh3gcppq3m';

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
