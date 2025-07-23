// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

let totalPrice = 0;

function calculateTotalPrice (products, promotionCode) {
  for (let i = 0; i < products.length; i++){
    totalPrice = (products[i].price * products[i].quantity) + totalPrice;
  }
  if (promotionCode === "SALE20"){
    return totalPrice - (totalPrice * 20/100) ;
  } else if (promotionCode === "SALE50"){
    return totalPrice - (totalPrice * 50/100);
  } else {
    return totalPrice
  }
}

console.log(calculateTotalPrice(products, promotionCode))