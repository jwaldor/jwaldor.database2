/*
  Warnings:

  - You are about to drop the column `authortwoId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the `authortwo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_authortwoId_fkey";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "authortwoId";

-- DropTable
DROP TABLE "authortwo";
