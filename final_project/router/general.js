const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const bookArray = Object.values(books) 

public_users.post("/register", (req,res) => {
  const uName = req.body.username
  const pass = req.body.password
  return res.status(200).json( "User successfully registred. Now you can login");
  if(uName && pass){
    return res.status(200).json( "User successfully registred. Now you can login");
  }else {
      return res.status(300).json({message: "Credentials are not provided"});
  }
});

// Get the book list available in the shop
 public_users.get('/', async function (req, res) {
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
    myPromise.then(()=>{
        return res.status(200).json(books);
    }).catch(()=>{return res.status(300)})
  //Write your code here
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbnC = req.params.isbn
  let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
    myPromise.then(()=>{
        return res.status(300).json(books[isbnC]);
    }).catch(()=>{return res.status(300)})
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const authC = req.params.author
      let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
    myPromise.then(()=>{
    return res.status(300).json(bookArray.filter(book=> book.author==authC));
    }).catch(()=>{return res.status(300)})
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const tittleC = req.params.title
    let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
    myPromise.then(()=>{
      return res.status(300).json(bookArray.filter(book => book.title == tittleC));
    }).catch(()=>{return res.status(300)})

});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbnC = req.params.isbn
  return res.status(300).json(books[isbnC].reviews);
});

module.exports.general = public_users;
