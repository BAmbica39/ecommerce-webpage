const { sequelize, Item } = require("./models");

async function seed() {
  try {
    await sequelize.sync({ force: true });

    await Item.bulkCreate([
      // Original 8
      {
        name: "Wireless Headphones",
        description: "Noise cancelling over-ear headphones with 30h battery life.",
        price: 99.99,
        imageUrl: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
      },
      {
        name: "Smartphone",
        description: "Latest Android smartphone with amazing camera.",
        price: 499.99,
        imageUrl: "https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_SL1500_.jpg",
      },
      {
        name: "Running Shoes",
        description: "Lightweight and comfortable sports shoes.",
        price: 79.99,
        imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8d73cd25-91cc-48fe-9514-7a41daccb7ef/NIKE+VOMERO+PLUS.png",
      },
      {
        name: "Smartwatch",
        description: "Track your fitness and notifications on the go.",
        price: 149.99,
        imageUrl: "https://gourban.in/cdn/shop/files/SumoWebTools_1698039707-1698039711_236d9ae4-7378-40f5-8f9b-0b7447f8f3fd.webp?v=1705564100&width=1280",
      },
      {
        name: "Gaming Laptop",
        description: "High performance laptop with RTX graphics and SSD storage.",
        price: 1299.99,
        imageUrl: "https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_SL1500_.jpg",
      },
      {
        name: "Bluetooth Speaker",
        description: "Portable waterproof speaker with deep bass.",
        price: 59.99,
        imageUrl: "https://www.theaudiostore.in/cdn/shop/files/sony-ult-field-1-wireless-portable-speaker-black-43933713563903.png?v=1744393287&width=1200",
      },
      {
        name: "DSLR Camera",
        description: "Professional DSLR with 24MP lens and 4K video support.",
        price: 899.99,
        imageUrl: "https://cameraclub.in/cdn/shop/files/1_2_98332be7-61ca-420f-a62c-8900d9a96cf1.png?v=1713272662",
      },
      {
        name: "Backpack",
        description: "Stylish and durable backpack with multiple compartments.",
        price: 39.99,
        imageUrl: "https://img.tatacliq.com/images/i20//658Wx734H/MP000000023888044_658Wx734H_202409282031101.jpeg",
      },

      // Extra ~20 items
      {
        name: "Tablet",
        description: "10-inch tablet with HD display and long battery life.",
        price: 299.99,
        imageUrl: "https://media.wired.com/photos/682cf7f8b7951ee9a5122b7f/4:3/w_960,c_limit/Surface-Pro_1.png",
      },
      {
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with adjustable DPI.",
        price: 19.99,
        imageUrl: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with blue switches.",
        price: 89.99,
        imageUrl: "https://computechstore.in/wp-content/uploads/2023/06/Rapoo-V500PRO-Mechanical-Gaming-Keyboard-White-and-Blue-3.jpg",
      },
      {
        name: "4K Monitor",
        description: "27-inch 4K UHD monitor with HDR support.",
        price: 349.99,
        imageUrl: "https://alogic.in/cdn/shop/files/ClarityMax32_UHD4KMonitorwith65WPowerDelivery_v1_1.webp?v=1723102737&width=2048",
      },
      {
        name: "Fitness Tracker",
        description: "Slim fitness band with heart-rate and sleep tracking.",
        price: 49.99,
        imageUrl: "https://istarmax.com/wp-content/uploads/2022/01/s5-black.jpg",
      },
      {
        name: "Portable Charger",
        description: "20,000mAh fast charging power bank.",
        price: 39.99,
        imageUrl: "https://d57avc95tvxyg.cloudfront.net/images/thumbnails/1594/1594/detailed/897/5200mah-power-bank-portable-charger-for-iball-prince-1-8g-maxbhi-4-9-1.jpg?t=1731826724",
      },
      {
        name: "Drone",
        description: "Camera drone with 4K video recording.",
        price: 699.99,
        imageUrl: "https://m.media-amazon.com/images/I/51Lwr0PbKrL.jpg",
      },
      {
        name: "Coffee Maker",
        description: "Automatic coffee machine with grinder.",
        price: 129.99,
        imageUrl: "https://m.media-amazon.com/images/I/71LB1AbsorL.jpg",
      },
      {
        name: "Microwave Oven",
        description: "20L microwave oven with smart features.",
        price: 149.99,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOjQw509BfmkRwjMmRotUvG9lrjUcCF9AMQ&s",
      },
      {
        name: "Gaming Chair",
        description: "Ergonomic gaming chair with adjustable height.",
        price: 199.99,
        imageUrl: "https://m.media-amazon.com/images/I/71DlNwhYT1L._UF894,1000_QL80_.jpg",
      },
      {
        name: "External Hard Drive",
        description: "2TB USB 3.0 portable external hard drive.",
        price: 89.99,
        imageUrl: "https://m.media-amazon.com/images/I/61IBBVJvSDL._AC_SL1500_.jpg",
      },
      {
        name: "Smart TV",
        description: "55-inch 4K Ultra HD Smart TV.",
        price: 599.99,
        imageUrl: "https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_SL1500_.jpg",
      },
      {
        name: "Electric Kettle",
        description: "1.7L stainless steel electric kettle.",
        price: 29.99,
        imageUrl: "https://m.media-amazon.com/images/I/61Ch8E6qcZL._UF894,1000_QL80_.jpg",
      },
      {
        name: "Air Fryer",
        description: "Digital air fryer with 5.5L capacity.",
        price: 139.99,
        imageUrl: "https://m.media-amazon.com/images/I/513r-ytcqDL._UF894,1000_QL80_.jpg",
      },
      {
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness.",
        price: 24.99,
        imageUrl: "https://m.media-amazon.com/images/I/61Ckk6bdzwL.jpg",
      },
      {
        name: "Smart Home Speaker",
        description: "Voice-controlled smart home assistant.",
        price: 99.99,
        imageUrl: "https://m.media-amazon.com/images/I/41JKiHYvtnL._UF1000,1000_QL80_.jpg",
      },
      {
        name: "VR Headset",
        description: "Virtual reality headset with motion controllers.",
        price: 399.99,
        imageUrl: "https://images-cdn.ubuy.co.in/633b6838cd07b561033d0133-oculus-quest-all-in-one-vr-gaming.jpg",
      },
      {
        name: "Electric Toothbrush",
        description: "Rechargeable electric toothbrush with multiple modes.",
        price: 49.99,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXzngrM-yvrymf63j_7bUB9vKgSK-iXnq7A&s",
      },
      {
        name: "Gaming Console",
        description: "Latest generation gaming console with wireless controller.",
        price: 499.99,
        imageUrl: "https://rukminim2.flixcart.com/image/356/352/xif0q/gamingconsole/d/t/z/visual-2000-gb-internal-storage-ultra-fast-ssd-sony-ps5-pro-2-tb-original-imahbfgcppjhexme.jpeg?q=90&crop=false",
      },
    ]);

    console.log("✅ Database seeded successfully with 28 items!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
}

seed();
