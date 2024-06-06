/*
  Warnings:

  - Added the required column `memberId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "memberId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
