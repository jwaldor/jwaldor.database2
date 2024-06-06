import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.book.create({
  //   data: {
  //     title: "HEY",
  //     author: {
  //       create: {
  //         name: "Jake",
  //         biography: "Jake's boio",
  //       },
  //     },
  //   },
  // });

  // await prisma.book.update({
  //   data: {
  //     Genres: {
  //       create: [
  //         {
  //           name: "Horror",
  //         },
  //         {
  //           name: "Banana",
  //         },
  //         {
  //           name: "Biography",
  //         },
  //         {
  //           name: "Adventure",
  //         },
  //       ],
  //     },
  //   },
  //   where: {
  //     id: 1,
  //   },
  // });

  const booksWithGenres = await prisma.book.findFirst({
    include: {
      Genres: {
        select: {
          name: true,
        },
      },
    },
  });

  console.log(booksWithGenres);

  // Create new author
  // await prisma.author.create({
  //   data: {
  //     name: "authorname3",
  //     biography: "somehting about this author",
  //   },
  // });

  // Create new member
  // await prisma.member.create({
  //   data: {
  //     name: "member4name",
  //     email: "somehting ab@hor.com",
  //     address: "123 theirhouse ave",
  //   },
  // });

  const allBooks = await prisma.member.findMany();
  console.log(allBooks);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
