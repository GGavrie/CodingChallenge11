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

//Task 3 - Creting a library class 
class Library {
    constructor() {
      this.books = []; // Array to store Book instances
      this.borrowers = [];
    }
  // Method to add a new book to the library
    // Method to add a new book to the library
    addBook(book) {
      this.books.push(book);
    }
  
    // Method to list all books in the library
    listBooks() {
      this.books.forEach(book => {
        console.log(book); 
      });
    }
    // Method to add a new borrower to the library
    addBorrower(borrower) {
        this.borrowers[borrower.id] = borrower;
      }
    
    // Method to lend a book to a borrower
    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers[borrowerId];
    
        if (book && book.copies > 0 && borrower) {
          book.copies -= 1;
          borrower.borrowedBooks.push(book.title);
        } else {
          console.log("Cannot lend book: Either book is unavailable or borrower not found.");
        }
      }
      // Method to return a book to the library
      returnBook(borrowerId, isbn) {
        // Find the book by ISBN
        const book = this.books.find(b => b.isbn === isbn);
        // Find the borrower by ID
        const borrower = this.borrowers[borrowerId];
    
        // Check if the book and borrower exist
        if (book && borrower) {
          // Find the index of the book in the borrower's borrowedBooks array
          const bookIndex = borrower.borrowedBooks.indexOf(book.title);
          // If the book is found in the borrower's borrowedBooks array
          if (bookIndex !== -1) {
            // Increase the number of copies of the book in the library
            book.copies += 1;
            // Remove the book from the borrower's borrowedBooks array
            borrower.borrowedBooks.splice(bookIndex, 1);
          } else {
            // If the book is not found in the borrower's borrowedBooks array, log a message
            console.log("Borrower does not have this book.");
          }
        } else {
          // If the book or borrower is not found, log a message
          console.log("Cannot return book: Either book or borrower not found.");
        }
      }
    }
    

  
  // Test case
  const library = new Library();
  const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456", 4);
  library.addBook(book1);
  library.listBooks();
  library.addBook(book1);
  library.addBorrower(borrower1);
  library.lendBook(201, "123456");
  console.log(book1.getDetails()); // Expected: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
  console.log(borrower1.borrowedBooks); // Expected: ["The Great Gatsby"]
  library.returnBook(201, "123456");
console.log(book1.getDetails()); // Expected: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks); // Expected: []
  //Task 4 is in task 3 , i added the borrower method 

  //Task 5 is in task 3 , I added the return method 