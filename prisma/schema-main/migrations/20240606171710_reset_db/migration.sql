/*
  Warnings:

  - You are about to drop the column `biography` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `_BookToGenre` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genre` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_isbn_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_memberId_fkey";

-- DropForeignKey
ALTER TABLE "_BookToGenre" DROP CONSTRAINT "_BookToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToGenre" DROP CONSTRAINT "_BookToGenre_B_fkey";

-- DropIndex
DROP INDEX "Book_isbn_key";

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "biography",
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "member" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "memberId",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "isbn" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "_BookToGenre";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
