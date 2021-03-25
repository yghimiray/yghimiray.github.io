"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {findTitles,findAuthors,findIDs,addBook }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

// console.log(library);

/**
 * Event handler to display library books.
 * @returns {undefined}
 */
function showBooks(){
    let textArea = document.getElementById("displayArea"); 
   let allBooks;
   for(const element of library){
       allBooks = element.title;
       textArea.innerHTML = allBooks;   
   }  
   
// return allBooks;
}

// console.log(showBooks());

/**
 * 
 * @param {string} title name of book
 * @param {string} author name of author
 * @param {number} libraryID Library Id number of the book
 * @returns {object} a book
 */
function makeBook(title, author, libraryID) {
    return {
        title,
        author,
        libraryID,
    };
}

/**
 * 
 *  @param {object} book a book
 * @returns {object} the added book.
 */
function addBook(book) {
    library.push(book);
    return book;
}

/**
 * 
 *  @param {string} title name of book
 * @param {string} author name of author
 * @param {number} libraryID Library Id number of the book
 * @returns {object} the added book.
 */
function addBookBrowser() {
    const titleBox = document.getElementById("title");
    const authorBox = document.getElementById("author");
    const IDBox = document.getElementById("id");
    const title = titleBox.value;
    const author = authorBox.value;
    const libraryID = IDBox.value;
    const book = makeBook(title, author, libraryID);
    addBook(book);
    return;
}

// console.log(addBook("aa","bbb",5555));
// console.log(library);


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    // titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titlesArr = [];
    for (const element of library) {
        let titles = element.title;
        titlesArr.push(titles);
    }
    titlesArr.sort();
    return titlesArr;
}

// console.log(findTitles());


/**
 * 
 * @returns {Array} an array of authors
 */
function findAuthors() {
    let authorsArr = [];
    for (const element of library) {
        let authors = element.author;
        authorsArr.push(authors);
    }
    authorsArr.sort();
    return authorsArr;
}
// console.log(findAuthors());

/**
 * 
 * @returns {object} an array of library IDs.
 */
function findIDs() {
    let IDsArr = [];
    for (const element of library) {
        let IDs = element.libraryID;
        IDsArr.push(IDs);
    }
    IDsArr.sort();
    return IDsArr;
}
// console.log(findIDs());