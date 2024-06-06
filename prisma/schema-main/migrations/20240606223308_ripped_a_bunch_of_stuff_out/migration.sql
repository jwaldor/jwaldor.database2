/*
  Warnings:

  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookToGenre` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `memberId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- DropForeignKey
ALTER TABLE "_BookToGenre" DROP CONSTRAINT "_BookToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToGenre" DROP CONSTRAINT "_BookToGenre_B_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "memberId" INTEGER NOT NULL,
DROP COLUMN "isbn",
ADD COLUMN     "isbn" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Member";

-- DropTable
DROP TABLE "_BookToGenre";
