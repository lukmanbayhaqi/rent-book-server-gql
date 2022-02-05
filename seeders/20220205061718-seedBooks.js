"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Mastering Golang1",
          isbn: "1-234-5678-9101112-13",
          author: "Dr. Who",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516979843i/38209725.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Mastering Golang2",
          isbn: "1-234-5678-9101112-13",
          author: "Dr. Who",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516979843i/38209725.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Mastering Golang3",
          isbn: "1-234-5678-9101112-13",
          author: "Dr. Who",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516979843i/38209725.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Mastering Golang4",
          isbn: "1-234-5678-9101112-13",
          author: "Dr. Who",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516979843i/38209725.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
