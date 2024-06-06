import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.book.update({
    where: { id: 2 },
    data: {
      memberId: 3,
    },
  });

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

  const allBooks = await prisma.book.findMany();
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
