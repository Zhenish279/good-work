// const products = [
//     {
//         id: 1,
//         title: "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350 ",
//         cotegory: "laptop",
//         price: 19950,
//         img:
//         "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
//         desc: "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть",
//     },
//     {
//         id: 2,
//         title: "xioami mi 11 lite",
//         cotegory: "smart",
//         price: 2000000,
//         img:
//         "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
//     desc: "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: AnCdroid 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г",
//     },
//     {
//         id: 3,
//         titel: "hello",
//         cotegory: "tv",
//         price: 60000,
//         img:
//         "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
//     desc: "bla bla bla",
//     },
// ];

// // const productsInner = document.querySelector(".products__inner");

// const btnAll = document.querySelector(".all");
// const btnLaptop = document.querySelector(".Laptop");
// const btnSmart = document.querySelector(".smart");
// const btnTv = document.querySelector(".tv");
// const productsInner = document.querySelector(".products__inner");

// window.addEventListener("load", function () {
//     displayProductsItems ("products");
// });


// function displayProductsItems(products)   {
//     let displayProducts = products.map(function(item) {
//         return `<article key="${item.id}" class="products__item">
//         <img
//           class="products__item-photo"
//           src="${item.img}"
//           alt=""
//           />
//           <div class="products__item-info">
//           <header>
//           <h3>${item.titel} </h3>
//           <span clss="product__item-price">${item.price}com</span>
//           </header>
//           <p class="products__item-text">
//           ${item.desc}
//           </p>
//           </div>
//         </article>`;
//     });

//     displayProducts = displayProducts.join("");

//     productsInner.innerHTML = displayProducts;
//     return displayProducts;

// };

//  btnAll.addEventListener ("click" , () => {
//  displayProductsItems(products);
//  });

//  btnLaptop.addEventListener ("click" , () => {
//      const laptopView = products.filter ((word) => word.cotegory === "laptop");
//  displayProductsItems(laptopView);
//  });


//  btnSmart.addEventListener ("click" , () => {
//      const smartView = products.filter((word) => word.cotegory === "smart"
//      );
//  displayProductsItems(smartView);
//  });


//  btnTv.addEventListener ("click" , () => {
//      const tvView = products.filter((word) => word.cotegory === "tv");
//      displayProductsItems (tvView);
//  });

 



const products = [
    {
      id: 1,
      title: "Xiaomi Mi 11 Lite",
      category: "smart",
      price: 28700,
      img: "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
      desc: "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г",
    },
    {
      id: 2,
      title: "Телевизор LG OLED65CXRLA",
      category: "tv",
      price: 219980,
      img: "https://www.kivano.kg/images/product/92929/full/1621780991_50190300.jpg",
      desc: "разрешение: 4K UHD (3840x2160), HDR диагональ экрана: 65 частота обновления экрана: 100 Гц формат HDR: Dolby Vision, HDR 10 Pro мощность звука: 40 Вт (2х10 + 2х10 Вт) платформа Smart TV: webOS",
    },
    {
      id: 3,
      title: "Телевизор LG OLED65CXRLA",
      category: "laptop",
      price: 219980,
      img: "https://user-life.com/uploads/posts/2020-06/1591251738_kak-ustanovit-drayver-na-veb-kameru-noutbuka-asus1.jpg",
      desc: "разрешение: 4K UHD (3840x2160), HDR диагональ экрана: 65 частота обновления экрана: 100 Гц формат HDR: Dolby Vision, HDR 10 Pro мощность звука: 40 Вт (2х10 + 2х10 Вт) платформа Smart TV: webOS",
    },
  ];
  
  window.addEventListener("load", function () {
    const productsInner = document.querySelector(".products__inner");
    const filterBtns = document.querySelectorAll(".products__filters-btn");
  
    displayProductsItems(products);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.cat;
  
        const productCategory = products.filter(function (item) {
          if (item.category === category) {
            return item;
          }
        });
  
        if (category === "all") {
          displayProductsItems(products);
        } else {
          displayProductsItems(productCategory);
        }
      });
    });
  
    function displayProductsItems(products) {
      let displayProducts = products.map(function (item) {
        return `<article key="${item.id}" class="products__item">
        <img
          class="products__item-photo"
          src="${item.img}"
          alt=""
        />
        <div class="products__item-info">
          <header>
            <h3>${item.title}</h3>
            <span class="products__item-price">${item.price}сом</span>
          </header>
          <p class="products__item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
      });
  
      displayProducts = displayProducts.join("");
      productsInner.innerHTML = displayProducts;
    }
  });
  







