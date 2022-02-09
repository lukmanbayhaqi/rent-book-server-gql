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
        {
          title: "Tenggelamnya Kapal van der Wijck",
          author: "Prof. Dr. Hamka",
          isbn: "9786022504160",
          image_url:
            "https://i0.wp.com/mysyabab.com/wp-content/uploads/2019/01/TENGGELAMNYA-KAPAL-VAN-DER-WIJCK.jpg?fit=800%2C1227&ssl=1",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Bumi Manusia",
          author: "Pramoedya Ananta Toer",
          isbn: "9789799731234",
          image_url:
            "https://www.jtbooks.my/wp-content/uploads/2019/09/96-scaled.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Rich Dad Poor Dad",
          author: "Robert Kiyosaki and Sharon Lechter",
          isbn: "9786020333175",
          image_url:
            "https://media.karousell.com/media/photos/products/2018/07/30/rich_dad_poor_dad_by_robert_kiyosaki_1532921397_3a3704210_progressive",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Aku Ingin Pulang Meski Sudah Dirumah",
          author: "Kwon Rabin",
          isbn: "978-623-7351-82-5",
          image_url:
            "http://www.penerbitharu.com/upload/product/thumb-2021-10-11-09-17-42-aku-ingin-pulang-meski-sudah-dirumah.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Aku Bukannya Menyerah, Hanya Sedang Lelah",
          author: "Geulbaewoo",
          isbn: "978-623-7351-71-9",
          image_url:
            "http://www.penerbitharu.com/upload/product/thumb-2021-06-18-14-02-15-aku-bukannya-menyerah-hanya-sedang-lelah.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Goodbye Fairy",
          author: "Yonezawa Honobu",
          isbn: "978-623-7351-31-3",
          image_url:
            "http://www.penerbitharu.com/upload/product/thumb-2020-05-06-13-39-20-goodbye-fairy.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "I Want To Die But I Want To Eat Tteokpokki",
          author: "Baek Se Hee",
          isbn: "978-623-7351-03-0",
          image_url:
            "http://www.penerbitharu.com/upload/product/thumb-2020-03-19-11-05-13-i-want-to-die-but-i-want-to-eat-tteokpokki.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Manajemen Leha-leha",
          author: "Nishida Masaki",
          isbn: "978-623-7351-49-8",
          image_url:
            "http://www.penerbitharu.com/upload/product/thumb-2020-12-02-10-29-15-manajemen-leha-leha.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "A Game of Thrones (A Song of Ice and Fire, Book 1)",
          author: "George R. R. Martin",
          isbn: "9780553573404",
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "A Clash of Kings (A Song of Ice and Fire, Book 2)",
          author: "George R. R. Martin",
          isbn: "9780553579901",
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/3/39/AClashOfKings.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "A Storm of Swords (A Song of Ice and Fire, Book 3)",
          author: "George R. R. Martin",
          isbn: "9780553106633",
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/AStormOfSwords.jpg/220px-AStormOfSwords.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "A Feast for Crows (A Song of Ice and Fire, Book 4)",
          author: "George R. R. Martin",
          isbn: "9780553801507",
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/AFeastForCrows.jpg/220px-AFeastForCrows.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "A Dance with Dragons (A Song of Ice and Fire, Book 5)",
          author: "George R. R. Martin",
          isbn: "9780007455997",
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Self Driving",
          author: "Rhenald Kasali, Ph.D.",
          isbn: "9789794338513",
          image_url:
            "https://images.tokopedia.net/img/cache/500-square/product-1/2020/5/12/batch-upload/batch-upload_9b72a7ff-00a7-4d47-9af1-4af316e86587.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Demon Slayer: Kimetsu no Yaiba, Vol. 9",
          author: "Koyoharu Gotouge",
          isbn: " 978-1-97-470443-9",
          image_url:
            "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/8/88/Kimetsu_no_Yaiba_V9.png",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Bumi Manusia",
          author: "Pramoedya Ananta Toer",
          isbn: "9799731232",
          image_url:
            " http://assets.kompasiana.com/items/album/2021/03/03/bumi-manusia-pram-603f1e2dd541df385f49eeb5.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          isbn: "9781593279509",
          title: "Eloquent JavaScript, Third Edition",
          author: "Marijn Haverbeke",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          isbn: "9781491943533",
          title: "Practical Modern JavaScript",
          author: "Nicolás Bevacqua",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/813hbklwWBL.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          isbn: "9781593277574",
          title: "Understanding ECMAScript 6",
          author: "Nicholas C. Zakas",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/512T+d+VK6L._SX376_BO1,204,203,200_.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          isbn: "9781449365035",
          title: "Speaking JavaScript",
          author: "Axel Rauschmayer",
          image_url:
            "https://images-na.ssl-images-amazon.com/images/I/91sXL7wrjgL.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          isbn: "9781449331818",
          title: "Learning JavaScript Design Patterns",
          author: "Addy Osmani",
          image_url: "https://m.media-amazon.com/images/I/51H-31ivMTL.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          isbn: "9798602477429",
          title: "You Don't Know JS Yet",
          author: "Kyle Simpson",
          image_url: "https://m.media-amazon.com/images/I/410f-bUBR3L.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          isbn: "9781484200766",
          title: "Pro Git",
          author: "Scott Chacon and Ben Straub",
          image_url:
            "https://cf.shopee.co.id/file/be29cd5226b167e24bb225f5bf24ea41",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          isbn: "9781484242216",
          title: "Rethinking Productivity in Software Engineering",
          author: "Caitlin Sadowski, Thomas Zimmermann",
          image_url:
            "https://andre-meyer.ch/wp-content/uploads/2019/05/cover-800x624.png",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Percy Jackson and The Olympians : The Lightning Thief",
          author: "Rick Riordan",
          isbn: "978-602-385-193-5",
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Lightning_Thief_cover.jpg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Puisi, Buku, dan Kerang Laut Sepenggal Memoar Pablo Neruda",
          author: "Pablo Neruda",
          isbn: "978-602-52645-6-6",
          image_url:
            "https://mojokstore.com/wp-content/uploads/2018/11/Puisi-Buku-dan-Kerang-Laut.jpeg",
          createdAt: "NOW()",
          updatedAt: "NOW()",
        },
        {
          title: "Jalan pikiran waktu",
          author: "Abdul Karim",
          isbn: "978-602-443-419-9",
          image_url:
            "https://s4.bukalapak.com/img/4803431633/large/iklan_jalan_pikiran_waktu__2_.jpg",
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
