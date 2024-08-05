// // come up with a script that seeds a database.

// import { PrismaClient } from "@prisma/client";


// // const comment = await prisma.posts.findFirst()

// const create_book = "INSERT INTO users (id, fullName, email, password, bio, username) VALUES ('7f93880a-a8c3-4d4f-b3b3-369aa89a73fa', 'John Doe', 'john@yahoo.com', 'johndoe', 'Im a software developer', 'johndoe')"





import { AvailableGenres,  Authors, Books, Members, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

type AuthorType = {name:string,biography:string}
async function add_author(author:AuthorType){
    const created_author = await prisma.authors.create({data:author})
    return created_author
}

type GenreType = {genre:string}
async function add_genre(genre:GenreType){
    const created_genre = await prisma.availableGenres.create({data:genre})
    return created_genre
}

type BookType = {title:string, ISBN: string, authorId: string}
async function add_book(book:BookType){
    //create book
    const created_book = await prisma.books.create({data:book})

    //associate book with genre
    return created_book
}

type BookGenreType = {genreId:string,bookId:string}
async function link_genre(bookgenre:BookGenreType){
    const created_link = await prisma.bookGenres.create({data:bookgenre})
    return created_link
}

type MemberType = {name:string,email:string,address:string}  
async function add_member(bookgenre:MemberType){
    const member = await prisma.members.create({data:bookgenre})
    return member
}


console.log("test")

const simple_author = {name:"Bob",biography:"I am an author"}
const simple_genre = {genre:"Science Fiction"}

// const genre_id = await add_genre(simple_genre).then(response => response.id)
// console.log("genre_id",genre_id)

async function run_script(){
    const author_id = await add_author(simple_author).then(response => response.id)
    console.log("author_id",author_id)
    const simple_book = {title:"how to be an SWE", ISBN:"483402752",authorId: author_id}
    const new_book = await add_book(simple_book).then(response => response.id)
    const the_genre = "6e78d818-8e96-4def-ae15-30c98c85f317"
    console.log("new_book",new_book)
    const linked_genre = await link_genre({bookId: new_book,genreId: the_genre}).then(response => response.id)
    console.log("linked_genre",linked_genre)

}



async function view_book_and_genre(){
    const book_id = "373465c3-c296-466a-806d-06bede77c84f"
    const genre_id = "954e9875-c69a-4b37-966d-248643762cda"
    const all_books = await prisma.books.findMany()
    const all_genres = await prisma.bookGenres.findMany()
    console.log(all_books)
    console.log(all_genres)

}
// run_script()
// view_book_and_genre()
const simple_member = {name:"Jacob",email:"jacob@jacob.com",address: "300 Lake Ave"}

async function add_member_script(){
    const new_member = await add_member(simple_member).then(response => response.id)
    console.log(new_member)
}
// add_member_script()

const new_member = "ebb8a540-5667-4986-9250-a62f807805bc"
console.log('here')
async function borrow_book(){
    console.log("borrowing")
    prisma.books.update({where:{id:"373465c3-c296-466a-806d-06bede77c84f"},data:{borrowerId:new_member}}).then(response => console.log(response))
}

borrow_book()
// const genre_book = 