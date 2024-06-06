import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const author = await prisma.author.create({

        data: {
        
            name: "benjamin button",
            Bio: "writes  books"
        },
    
      })

      const author2 = await prisma.author.create({

        data: {
        
            name: "joe mama",
            Bio: "writes books for fun"
        },
    
      })

    const member = await prisma.member.create({

        data:{

            name: "Member 1",
            email: "member@member.com",
            address: "address,street,zip",
            booksRented: {

               

            },

        }

    })

    const member3 = await prisma.member.create({

        data:{

            name: "Member 1",
            email: "member@member.com",
            address: "address,street,zip",
            booksRented: {
               

            },


        }

    })

  const book = await prisma.book.create({

    data: {
        title: "Percy jackson", 
        ISBN: Math.floor(Math.random() * 1000), 
        Author: {
            connect: author
        }, 
        Member: {

            connect: member

        },
    },

  })

  const member2 = await prisma.member.create({

    data:{

        name: "Member 1",
        email: "member@member.com",
        address: "address,street,zip",
        booksRented: {

            connect: book

        },


    }

})
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })