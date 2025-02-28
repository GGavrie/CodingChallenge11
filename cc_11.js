// Task 1  Creating a book class 
// Define a class called Book
class Book {
    // Constructor to initialize the properties of the Book object
    constructor(title, author, isbn, copies) {
        
        this.title = title;   // Title of the book
        this.author = author; // Author of the book
        this.isbn = isbn;     // ISBN  of the book
        this.copies = copies; // Number of copies of the book available
    }

    // Method to return a formatted string of book details
    getDetails() {
        // Returns a string with the book's title, author, ISBN, and number of copies
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    // Method to update the number of copies
    updateCopies(quantity) {
        // Updates the number of copies by adding the quantity (can be negative if borrowing)
        this.copies += quantity;
    }
}
//Test Cases:
// Create a new Book object called book1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
// Print the details of book1 to the console
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

// Update the number of copies of book1 (borrow one book)
book1.updateCopies(-1);
// Print the updated details of book1 to the console
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4



//Task 2 - Creatung a borrower class 

class Borrower {
    // Constructor to initialize the properties of the Borrower object
    constructor(name, borrowerId) {
        this.name = name; // Name of the borrower
        this.borrowerId = borrowerId; // Unique ID of the borrower
        this.borrowedBooks = []; // Array to store the titles of borrowed books
    }

    // Method to add a book to the borrowedBooks array
    borrowBook(book) {
        this.borrowedBooks.push(book); // Adds the book title to the end of the array
    }

    // Method to remove a book from the borrowedBooks array
    returnBook(book) {
        // Find the index of the book in the borrowedBooks array
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) { // If the book is found in the array
            this.borrowedBooks.splice(index, 1); // Remove the book from the array
        }
    }
}

// Test Cases:
// Create a new Borrower object called borrower1
const borrower1 = new Borrower("Alice Johnson", 201);
// Borrow "The Great Gatsby"
borrower1.borrowBook("The Great Gatsby");
// Print the borrowedBooks array to the console
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

// Return "The Great Gatsby"
borrower1.returnBook("The Great Gatsby");
// Print the borrowedBooks array to the console
console.log(borrower1.borrowedBooks);
// Expected output: []