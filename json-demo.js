const book = new Object(
    { 
        title : "1984",
        author : "George Orwell"    
    })

console.log("\n ---------")
console.log(typeof book)
console.log(book)

const myBooks = [
    new Object({title: "1984", author: "George Orwell" }),
    new Object({title: "Becoming", author: "Michelle Obama"}),
    new Object({title: "Snow Crash", author: "Neal Stephenson"})
]

console.log("\n ---------")
console.log(typeof myBooks)
console.log(myBooks)

// JSON.stringify - object input
console.log("\n -------- ")
let bookJSON = JSON.stringify(book)
console.log(typeof bookJSON)
console.log(bookJSON)

// JSON.stringify - collection input
console.log("\n --------")
let myBooksJSON = JSON.stringify(myBooks)
console.log(myBooksJSON)

// JSON.parse - string input
let data = bookJSON
let parsed = JSON.parse(data)
console.log("\n -------")
console.log(parsed)
console.log(Array.isArray(parsed))
console.log("Num items: "+parsed.length)

// JSON.parse - string input
data = myBooksJSON
parsed = JSON.parse(data)
console.log("\n --------")
console.log(parsed)
console.log(Array.isArray(parsed))
console.log("Num items: "+parsed.length)
console.log("Author of 2nd book: "+parsed[1].author)