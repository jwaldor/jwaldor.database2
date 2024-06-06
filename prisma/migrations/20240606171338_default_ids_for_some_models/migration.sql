-- AlterTable
CREATE SEQUENCE authors_id_seq;
ALTER TABLE "authors" ALTER COLUMN "id" SET DEFAULT nextval('authors_id_seq');
ALTER SEQUENCE authors_id_seq OWNED BY "authors"."id";

-- AlterTable
CREATE SEQUENCE books_id_seq;
ALTER TABLE "books" ALTER COLUMN "id" SET DEFAULT nextval('books_id_seq');
ALTER SEQUENCE books_id_seq OWNED BY "books"."id";
