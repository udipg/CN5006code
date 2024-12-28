const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Books = require('./BookSchema');
const mongoDBConnected = require('./MongoDBConnect'); // Ensure this connects to your database properly

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Test output to verify BookSchema is loaded
console.log("Books Schema:", Books);

// Root endpoint
app.get('/', function (req, res) {
    res.send("Welcome to the Book Management API!");
});

// About endpoint
app.get('/about', function (req, res) {
    res.send("MongoDB Express React and Mongoose app. React runs in another application.");

    // Example count of documents
    Books.countDocuments().exec()
        .then(count => {
            console.log("Total documents Count before addition:", count);
        })
        .catch(err => {
            console.error(err);
        });
});

// Get all books
app.get('/allbooks', function (req, res) {
    Books.find(function (err, allBooks) {
        if (err) {
            console.log(err);
            res.status(500).send("Error retrieving books.");
        } else {
            res.json(allBooks);
        }
    });
});

// Get a specific book by ID
app.get('/getbook/:id', function (req, res) {
    let id = req.params.id;
    Books.findById(id, function (err, book) {
        if (err) {
            console.log(err);
            res.status(500).send("Error retrieving the book.");
        } else {
            res.json(book);
        }
    });
});

// Add a new book
app.post('/addbook', function (req, res) {
    console.log("Received Book Data:", req.body);
    let newBook = new Books(req.body);
    console.log("New Book:", newBook);

    newBook.save()
        .then(() => {
            res.status(200).json({ message: 'Book added successfully' });
        })
        .catch(err => {
            console.error(err);
            res.status(400).send('Adding book failed');
        });
});

// Update an existing book
app.post('/updatebook/:id', function (req, res) {
    let id = req.params.id;
    let updatedBook = req.body;

    Books.findByIdAndUpdate(
        id,
        {
            booktitle: updatedBook.booktitle,
            PubYear: updatedBook.PubYear,
            author: updatedBook.author,
            Topic: updatedBook.Topic,
            formate: updatedBook.formate
        },
        { new: true }, // Return the updated document
        function (err, docs) {
            if (err) {
                console.error(err);
                res.status(500).send("Error updating the book.");
            } else {
                res.status(200).json({ message: 'Book updated successfully', updatedBook: docs });
            }
        }
    );
});

// Delete a book
app.post('/deletebook/:id', function (req, res) {
    let id = req.params.id;
    console.log("Deleting Book with ID:", id);

    Books.findByIdAndRemove(id, function (err, docs) {
        if (err) {
            console.error(err);
            res.status(500).send("Error deleting the book.");
        } else {
            res.status(200).send('Book deleted successfully');
        }
    });
});

// Start the server
app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
