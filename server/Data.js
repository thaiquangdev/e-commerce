import bcrypt from "bcryptjs";

export const users = [
  {
    fullname: "Demo User",
    email: "demo@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "1234567890",
  },
  {
    fullname: "Thai Quang",
    email: "thaiquangqt2003@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "1234567890",
  },
];

export const categories = [
  {
    name: "Smartphone",
    image:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-phone-96x96-2.png",
  },
  {
    name: "Laptop",
    image:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-laptop-96x96-1.png",
  },
  {
    name: "Table",
    image:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-tablet-96x96-1.png",
  },
  {
    name: "Smartwatch",
    image:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-smartwatch-96x96-1.png",
  },
  {
    name: "Headphone",
    image:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-phu-kien-96x96-1.png",
  },
];

export const products = [
  {
    title: "iPhone 15 Pro Max",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-1-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-2-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-3-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-4-1.jpg",
    ],
    price: "29890000",
    priceOld: "34990000",
    category: "Smartphone",
    brand: "Apple",
    description: [
      "Technology: GSM / HSPA / LTE",
      "Dimensions: 144.6 x 69.2 x 7.3 mm",
      "Weight: 129 g",
      "Display: IPS LCD 5.15 inches",
      "Resolution: 1080 x 1920",
      "OS: Android OS, v6.0 (Marshmallow)",
      "Chipset: Snapdragon 820",
      "CPU: Quad-core",
      "Internal: 32GB/64GB/128GB",
      "Camera: 16 MP, f/2.0 - 4 MP, f/2.0",
    ],
    colors: [
      "BLUE TITANIUM",
      "NATURAL TITANIUM",
      "WHITE TITANIUM",
      "BLACK TITANIUM",
    ],
    saleOffer: {
      discount: "14",
      status: false,
    },
    stock: 100,
    internal: ["256GB", "512GB", "1TB"],
    ram: ["8GB"],
  },
  {
    title: "iPhone15 Pro",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-3.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-4.jpg",
    ],
    price: "25990000",
    priceOld: "28990000",
    category: "Smartphone",
    brand: "Apple",
    description: [
      "Screen: OLED6.1 Super Retina XDR",
      "Operating system: iOS 17",
      "Rear camera: Main 48 MP & Secondary 12 MP, 12 MP",
      "Front camera: 12 MPs",
      "Chips: Apple A17 Pro 6 cores",
      "RAM: 8GB",
      "Storage capacity: 128 GB",
      "SIM: 1 Nano SIM & 1 eSIM Support 5G Rechargeable",
      "batteries: 3274 mAh20 W",
    ],
    colors: [
      "BLUE TITANIUM",
      "NATURAL TITANIUM",
      "WHITE TITANIUM",
      "BLACK TITANIUM",
    ],
    saleOffer: {
      discount: 10,
      status: false,
    },
    stock: 150,
    internal: ["128GB", "256GB", "512GB", "1TB"],
    ram: ["8GB"],
  },
  {
    title: "iPhone 15 Plus",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-xanh-thumb-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-hong-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-xanh-la-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-vang-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-xanh-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-128gb-den-2.jpg",
    ],
    price: "22990000",
    priceOld: "25990000",
    category: "Smartphone",
    brand: "Apple",
    description: [
      "Screen: OLED6.7 Super Retina XDR",
      "Operating system: iOS 17",
      "Rear camera: Main 48 MP & Secondary 12 MP",
      "Front camera: 12 MPs",
      "Chips: Apple A16 Bionic",
      "RAM: 6GB",
      "Storage capacity: 128 GB",
      "SIM: 1 Nano SIM & 1 eSIM Support 5G Rechargeable",
      "batteries: 4383 mAh20 W",
    ],
    colors: [
      "LIGHT PINK",
      "LIGHT GREEN",
      "LIGHT YELLOW",
      "LIGHT BLUE",
      "BLACK",
    ],
    saleOffer: {
      discount: 11,
      status: false,
    },
    stock: 150,
    internal: ["128GB", "256GB", "512GB"],
    ram: ["6GB"],
  },
  {
    title: "iPhone 15",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-den-thumb-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-128gb-den-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-128gb-xanh-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-128gb-hong-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-128gb-vang-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-128gb-xanh-la-2.jpg",
    ],
    price: "19790000",
    priceOld: "22990000",
    category: "Smartphone",
    brand: "Apple",
    description: [
      "Screen: OLED6.1 Super Retina XDR",
      "Operating system: iOS 17",
      "Rear camera: Main 48 MP & Secondary 12 MP",
      "Front camera: 12 MPs",
      "Chips: Apple A16 Bionic",
      "RAM: 6GB",
      "Storage capacity: 128 GB",
      "SIM: 1 Nano SIM & 1 eSIM Support 5G Rechargeable",
      "batteries: 3349 mAh20 W",
    ],
    colors: [
      "LIGHT PINK",
      "LIGHT GREEN",
      "LIGHT YELLOW",
      "LIGHT BLUE",
      "BLACK",
    ],
    saleOffer: {
      discount: 13,
      status: false,
    },
    stock: 150,
    internal: ["128GB", "256GB"],
    ram: ["6GB"],
  },
  {
    title: "Samsung Galaxy S24 5G",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-yellow-thumb-600x600.png",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-vang-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-vang-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-vang-4.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-xam-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-den-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/319665/samsung-galaxy-s24-tim-1.jpg",
    ],
    price: "22090000",
    priceOld: "22090000",
    category: "Smartphone",
    brand: "Samsung",
    description: [
      "Screen: Dynamic AMOLED 2X6.2 Full HD+",
      "Operating system: Android 14",
      "Rear camera: Main 50 MP & Secondary 12 MP, 10 MP",
      "Front camera: 12 MPs",
      "Chips: Exynos 2400",
      "RAM: 8 GB",
      "Storage capacity: 256 GB",
      "SIM: 2 Nano SIM & 2 eSIM Support 5G Rechargeable",
      "batteries: 4000 mAh, 25 W",
    ],
    colors: ["YELLOW", "GRAY", "VIOLET", "BLACK"],
    saleOffer: {
      discount: 13,
      status: false,
    },
    stock: 150,
    internal: ["256GB", "512GB"],
    ram: ["8GB"],
  },
  {
    title: "Samsung Galaxy S24+ 5G",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-tim-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-tim-4.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-bac-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-den-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-vang-1.jpg",
    ],
    price: "25790000",
    priceOld: "26990000",
    category: "Smartphone",
    brand: "Samsung",
    description: [
      "Screen: Dynamic AMOLED 2X6.7Quad HD+ (2K+)",
      "Operating system: Android 14",
      "Rear camera: Main 50 MP & Secondary 12 MP, 10 MP",
      "Front camera: 12 MPs",
      "Chips: Exynos 2400",
      "RAM: 8 GB",
      "Storage capacity: 256 GB",
      "SIM: 2 Nano SIM & 2 eSIM Support 5G Rechargeable",
      "batteries: 4900 mAh, 25 W",
    ],
    colors: ["YELLOW", "GRAY", "VIOLET", "BLACK"],
    saleOffer: {
      discount: 4,
      status: false,
    },
    stock: 150,
    internal: ["256GB", "512GB"],
    ram: ["8GB"],
  },
  {
    title: "Samsung Galaxy S24 Ultra 5G",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-4.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-tim-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-den-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-vang-1.jpg",
    ],
    price: "30990000",
    priceOld: "33990000",
    category: "Smartphone",
    brand: "Samsung",
    description: [
      "Screen: Dynamic AMOLED 2X6.7Quad HD+ (2K+)",
      "Operating system: Android 14",
      "Rear camera: Main 200 MP & Secondary 50MP, 12 MP, 10 MP",
      "Front camera: 12 MPs",
      "Chips: Snapdragon 8 Gen 3 for Galaxy",
      "RAM: 12 GB",
      "Storage capacity: 256 GB",
      "SIM: 2 Nano SIM & 2 eSIM Support 5G Rechargeable",
      "batteries: 5000 mAh, 25 W",
    ],
    colors: ["YELLOW", "GRAY", "VIOLET", "BLACK"],
    saleOffer: {
      discount: 8,
      status: false,
    },
    stock: 150,
    internal: ["256GB", "512GB", "1TB"],
    ram: ["12GB"],
  },
  {
    title: "Xiaomi Redmi Note 13 Pro",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/307172/samsung-galaxy-s24-plus-violet-thumb-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-2.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-xam-4.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-tim-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-den-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-vang-1.jpg",
    ],
    price: "30990000",
    priceOld: "33990000",
    category: "Smartphone",
    brand: "Samsung",
    description: [
      "Screen: Dynamic AMOLED 2X6.7Quad HD+ (2K+)",
      "Operating system: Android 14",
      "Rear camera: Main 200 MP & Secondary 50MP, 12 MP, 10 MP",
      "Front camera: 12 MPs",
      "Chips: Snapdragon 8 Gen 3 for Galaxy",
      "RAM: 12 GB",
      "Storage capacity: 256 GB",
      "SIM: 2 Nano SIM & 2 eSIM Support 5G Rechargeable",
      "batteries: 5000 mAh, 25 W",
    ],
    colors: ["YELLOW", "GRAY", "VIOLET", "BLACK"],
    saleOffer: {
      discount: 8,
      status: false,
    },
    stock: 150,
    internal: ["256GB", "512GB", "1TB"],
    ram: ["12GB"],
  },
  {
    title: "OPPO FIND N3 FLIP 5G",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/317981/oppo-find-n3-flip-pink-thumb-600x600.jpeg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/317981/oppo-find-n3-flip-pink-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/317981/oppo-find-n3-flip-pink-2.jpeg",
      "https://cdn.tgdd.vn/Products/Images/42/317981/oppo-find-n3-flip-pink-5.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/317981/oppo-find-n3-flip-pink-6.jpg",
    ],
    price: "22990000",
    category: "Smartphone",
    brand: "Oppo",
    description: [
      "Screen: AMOLED 6.8 & 3.26Full HD+",
      "Operating system: Android 13",
      "Rear camera: Main 50 MP & Secondary 48 MP, 32MP",
      "Front camera: 32 MPs",
      "Chips: MediaTek Dimensity 9200 5G 8 core",
      "RAM: 12GB",
      "Storage capacity: 256 GB",
      "SIM: 2 Nano SIM, Support 5G Rechargeable",
      "batteries: 4300 25W",
    ],
    colors: ["PINK", "BLACK", "YELLOW COPPER"],
    saleOffer: {
      discount: 0,
      status: false,
    },
    stock: 100,
    internal: ["256GB"],
    ram: ["12GB"],
  },
  {
    title: "XIAOMI REDMI 13C",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/316771/xiaomi-redmi-13c-xanh-la-1-2-3-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/316771/xiaomi-redmi-13c-xanh-1-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/316771/xiaomi-redmi-13c-xanh-duong-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/316771/xiaomi-redmi-13c-den-1-1.jpg",
    ],
    price: "2890000",
    category: "Smartphone",
    brand: "Xiaomi",
    description: [
      "Screen: IPS LCD6.74 HD+",
      "Operating system: Android 13",
      "Rear camera: Main 50 MP & Secondary 2 MP",
      "Front camera: 8 MPs",
      "Chips: MediaTek Helio G85",
      "RAM: 4 GB",
      "Storage capacity: 128 GB",
      "SIM: 2 Nano SIM, Support 4G Rechargeable",
      "batteries: 5000 25W",
    ],
    colors: ["PINK", "BLACK", "YELLOW COPPER"],
    saleOffer: {
      discount: 0,
      status: false,
    },
    stock: 100,
    internal: ["128GB"],
    ram: ["4GB", "6GB"],
  },
  {
    title: "VIVO V29E 5G",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/309864/vivo-v29e-black-avt-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/309864/vivo-v29e-den-glr-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/309864/vivo-v29e-xanh-glr-1.jpg",
    ],
    price: "9490000",
    category: "Smartphone",
    brand: "Vivo",
    description: [
      "Screen: AMOLED6.67 Full HD+",
      "Operating system: Android 13",
      "Rear camera: Main 64 MP & Secondary 8 MP",
      "Front camera: 50 MPs",
      "Chips: Snapdragon 695 5G",
      "RAM: 12GB, 8GB",
      "Storage capacity: 256 GB",
      "SIM: 2 Nano SIM, Support 5G Rechargeable",
      "batteries: 4800 44W",
    ],
    colors: ["BLACK", "LIGHT BLUE"],
    saleOffer: {
      discount: 0,
      status: false,
    },
    stock: 100,
    internal: ["256GB"],
    ram: ["8GB", "12GB"],
  },
  {
    title: "REALME C53",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/306785/realme-c53-gold-thumb-1-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/306785/realme-c53-gold-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/306785/realme-c53-black-2.jpg",
    ],
    price: "3890000",
    category: "Smartphone",
    brand: "Realme",
    description: [
      "Screen: IPS LCD6.74 HD+",
      "Operating system: Android 13",
      "Rear camera: Main 50 MP & Secondary 0.08 MP",
      "Front camera: 8 MPs",
      "Chips: Unisoc Tiger T612",
      "RAM: 8GB, 6GB",
      "Storage capacity: 128GB, 256GB",
      "SIM: 2 Nano SIM, Support 4G Rechargeable",
      "batteries: 5000 33W",
    ],
    colors: ["YELLOW", "BLACK"],
    saleOffer: {
      discount: 0,
      status: false,
    },
    stock: 100,
    internal: ["256GB"],
    ram: ["8GB", "12GB"],
  },
  {
    title: "IPHONE 14 PRO MAX",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-den-1-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-vang-1.jpg",
    ],
    price: "27490000",
    category: "Smartphone",
    brand: "Apple",
    description: [
      "Screen: OLED6.7 Super Retina XDR",
      "Operating system: iOS 16",
      "Rear camera: Main 48 MP & Secondary 12MP, 12MP",
      "Front camera: 12 MPs",
      "Chips: Apple A16 Bionic",
      "RAM: 6GB",
      "Storage capacity: 128GB, 256GB, 512GB, 1TB",
      "SIM: 1 Nano SIM & 1 eSIM, Support 5G Rechargeable",
      "batteries: 4323 20W",
    ],
    colors: ["YELLOW", "BLACK", "VIOLET"],
    saleOffer: {
      discount: 0,
      status: false,
    },
    stock: 100,
    internal: ["128GB", "256GB", "512GB", "1TB"],
    ram: ["6GB"],
  },
  {
    title: "SAMSUNG GALAXY A24",
    thumbs:
      "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-black-thumb-600x600.jpg",
    images: [
      "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-den-1.jpg",
      "https://cdn.tgdd.vn/Products/Images/42/274018/samsung-galaxy-a24-xanh-1.jpg",
    ],
    price: "5490000",
    category: "Smartphone",
    brand: "Samsung",
    description: [
      "Screen: Super AMOLED6.5 Full HD+",
      "Operating system: Android 13",
      "Rear camera: Main 50 MP & Secondary 5MP, 2MP",
      "Front camera: 13 MPs",
      "Chips: Apple A16 Bionic",
      "RAM: 6GB, 8GB",
      "Storage capacity: 128GB",
      "SIM: 2 Nano SIM, Support 4G Rechargeable",
      "batteries: 5000 25W",
    ],
    colors: ["BLACK", "LIGHT GREEN"],
    saleOffer: {
      discount: 0,
      status: false,
    },
    stock: 100,
    internal: ["128GB"],
    ram: ["6GB", "8GB"],
  },
];
