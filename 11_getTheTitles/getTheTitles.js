const getTheTitles = function(library) {
    let bookTitle = library.map((book) => {
         return book.title; 
        });
    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
