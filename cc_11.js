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