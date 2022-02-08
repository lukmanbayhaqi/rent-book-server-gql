"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Mastering Golang",
          isbn: "1-234-5678-9101112-13",
          author: "Dr. Who",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516979843i/38209725.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Think and Grow Rich",
          author: "Napoleon Hill",
          isbn: "9781640952492",
          image_url:
            "https://ebooks.gramedia.com/ebook-covers/47982/image_highres/ID_TGR2019MTH06TGR.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "How to Win Friends & Influence People",
          author: "Dale Carnegie",
          isbn: "9781982171452",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/619Gn-+VNQL.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Talk Like Ted",
          author: "Carmine Gallo",
          isbn: "9781529068658",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/41i9paOh1gL._SX327_BO1,204,203,200_.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "The 100: A Ranking of the Most Influential People in History",
          author: "Michael H. Hart",
          isbn: "9780806513508",
          image_url: "https://bit.ly/3rAbgY7",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "A Mind for Numbers",
          author: "Barbara Oakley",
          isbn: "9780399165245",
          image_url: "https://bit.ly/3sqKzE9",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Go Global",
          author: "Handi Kurniawan",
          isbn: "978-6020303796",
          image_url: "https://bit.ly/3B6uNlY",
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
