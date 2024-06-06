/*
  Warnings:

  - You are about to drop the column `genre` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `member` on the `Author` table. All the data in the column will be lost.
  - Added the required column `biography` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "genre",
DROP COLUMN "member",
ADD COLUMN     "biography" TEXT NOT NULL;
