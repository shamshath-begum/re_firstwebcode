let inputEl = document.getElementById("searchInput")
let btnEl = document.getElementById("btn")
let mainEl = document.getElementById("main")

const charUrl="https://www.anapioficeandfire.com/api/characters"
const url = "https://www.anapioficeandfire.com/api/books";
const searchUrl = "https://www.anapioficeandfire.com/api/";

getBooks(url)
async function getBooks(url) {
  try {
    let res = await fetch(url)
    let books = await res.json();
    console.log(books)
    showBooksDetails(books)
    // getCharacters(charUrl)
    
  } catch (error) {
    console.log(error)
  }
}


function showBooksDetails(books) {
  
  console.log(books)
  mainEl.innerHTML = ""
  books.forEach(books => {
    const { name, isbn, numberOfPages, authors, publisher, released,characters} = books

    let booksEl = document.createElement("div")
    booksEl.classList.add("books")
    booksEl.innerHTML = `<div><u>Name</u>:${name}</div>
        <div><u>ISBN</u>:${isbn}</div>
        <div><u>No.Of Pages</u>:${numberOfPages}</div>
        <div><u>Author</u>:${authors}</div>
        <div><u>Publisher Name</u>:${publisher}</div>
        <div><u> Realesed Date</u>:${released}</div>
        <div> <u>Character</u>:${characters.slice(0,5).join("<br>")}</div>`

    main.append(booksEl)
  })
}

btnEl.addEventListener("click", () => {
  let searchTerm = inputEl.value;
  if (searchTerm) {
    getBooks(searchUrl + "books?name=" + searchTerm)
  } else {
    getBooks(url)
  }
})
// let arr=[]
// async function getCharacters(charUrl){
//   try {
//     let res=await fetch(charUrl)
//     let characters=await res.json()
//     console.log(characters)

//     for(let i=0;i<5;i++){
//    arr.push(characters[i].aliases)   
//     }
// //     characters.forEach(characters=>{
// // arr.push(characters.aliases)
// console.log(arr.toString())
// let character=arr.toString()
// console.log(character)
// // showBooksDetails(books,character)
// document.getElementById("character").textContent=character
  
//   } catch (error) {
//     console.log("error")
//   }
// }


