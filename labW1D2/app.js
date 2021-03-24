"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors, addBook,findIDs }; 
//add all of your function names here that you need for the node mocha tests

let library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 3245 },
  { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 4264 }
];
 
const scramble = function(){

  let textArea = document.getElementById("displayArea");
  //textArea.innerHTML
};

/*
o findIDs, which will find all the libraryIDs in libraryBooks and return them in an
// alphabetically ordered array.
*/
/**
 * @returns{*} array of ordered ids
 */
function findIDs() {
  let idArray = [];
  for (const book of library) {
    const bookID = book.libraryID;
    idArray.push(bookID);
  }
  return idArray;
}
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

  /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

  const titles = findTitles();

  /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
  titles.sort();
  const titleString = titles.join("\n");

  let textArea = document.getElementById("displayArea");
  textArea.innerHTML = titleString;
}

/**
 * @returns{*} array of sorted authors
 */
function showAuthors() {
  const authors = findAuthors();
  authors.sort();
  const authorString = authors.join("\n");

  let authorArea = document.getElementById("showAuthorArea");
  //its a text area so use innerHTML
  //innerHTML is similar to textContent but only returns text itself
  //while innerHTML returns everything including the html tags
  authorArea.innerHTML = authorString;
}

/**
 * 
 * @returns {*} array of sorted id's to html
 */
function showLibraryId() {

  let libraryIds = findIDs();

  libraryIds.sort((a, b) => a - b);
  //get text area and assign libraryIds array to it
  //use .innerHTML for text areas
  let libraryIdArea = document.getElementById("showLibraryIdArea");

  libraryIdArea.innerHTML = libraryIds;
}

/**
 * @returns {undefined}
 */
function addBrowserBook() {
  const authorTxtbox = document.getElementById("title");
  const author = authorTxtbox.value;
  const newBrowserBook = { author: author, title: "foo", bookID: "123" };
  addBook(newBrowserBook);
  return;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
  let titles = [];
  for (const book of library) {
    titles.push(book.title);
  }
  titles.sort();
  // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
  // implement this and other functions
  return titles;
}

/**
 * @returns {Array} of all the authors in library
 */
function findAuthors() {
  const authors = [];
  for (const book of library) {
    authors.push(book.author);
  }
  return authors;
}

/**{
 * 
 * @param {Object} book with author title and id
 * @returns {Object} the same book that added
 */
function addBook(book) {
  library.push(book);
  return book;
}
/**
 * 
 * @param {string} author is book author
 * @param {string} title is book title
 * @param {string} bookId  is book title
 * @returns {Object} the new book
 */
function makeBook(author, title, bookId) {
  const newBook = {
    author: author,
    title: title,
    bookId: bookId
  };
  addBook(newBook);
  return newBook;
}


// document.getElementById("titlesBtn").addEventListener("click", function(){
//   showTitles() });