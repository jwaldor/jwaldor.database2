/*
  Warnings:

  - Made the column `memberId` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_memberId_fkey";

-- AlterTable
ALTER TABLE "books" ALTER COLUMN "memberId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
