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
    name: "Cardigan",
    image:
      "https://eteft.com/cdn/shop/collections/117536526_2469879156635354_4199906877222128673_o.jpg?v=1693029648&width=1070",
  },
  {
    name: "T-Shirt",
    image:
      "https://eteft.com/cdn/shop/collections/117536526_2469879156635354_4199906877222128673_o.jpg?v=1693029648&width=1070",
  },
  {
    name: "Hoodie",
    image:
      "https://eteft.com/cdn/shop/collections/z1801321789473_2ec0fab8f5144910af8c859f06dc2b5c.jpg?v=1598545210&width=1070",
  },
  {
    name: "Polo",
    image:
      "https://eteft.com/cdn/shop/collections/z2013464292745_c811ae4bf17bf6c1a5f1355964e7dd0b.jpg?v=1663866134&width=1070",
  },
  {
    name: "Jacket",
    image:
      "https://eteft.com/cdn/shop/collections/117536526_2469879156635354_4199906877222128673_o.jpg?v=1693029648&width=1070",
  },
  {
    name: "Shirt",
    image:
      "https://eteft.com/cdn/shop/collections/z1980466350862_333fa578a92930dbfd1ffc90898a9694.jpg?v=1598546009&width=1070",
  },
  {
    name: "Short",
    image:
      "https://eteft.com/cdn/shop/collections/5605121quan-short-thom-browne-striped-detail-chuan-authentic-jpeg.jpg?v=1624262061",
  },
  {
    name: "Suit",
    image:
      "https://eteft.com/cdn/shop/collections/117536526_2469879156635354_4199906877222128673_o.jpg?v=1693029648&width=1070",
  },
  {
    name: "Pant",
    image:
      "https://eteft.com/cdn/shop/collections/117536526_2469879156635354_4199906877222128673_o.jpg?v=1693029648&width=1070",
  },
];
