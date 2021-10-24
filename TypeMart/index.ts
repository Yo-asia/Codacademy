import products from './products';

const productName : string = "beanie";
const shippingAddress : string = "New York";

let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;

const product = products.filter(product => product.name === productName)[0];
if (product.preOrder === true) {
  console.log("This is a pre-order item. You will be notified within an email when the package is sent.")
}

if (product.price>= 25) {
  shipping = 0;
  console.log("Your product is over $25, you get a free shipping!");
} else {
   shipping = 5;
   console.log(`You need to spend ${25-product.price} more to get free shipping`);
}

if (shippingAddress.includes('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log(`Thanks for buying at TypeMart!
Product: ${product.name}
Address: ${shippingAddress}
Price: $${product.price}
Tax: $${taxTotal}
Shipping: $${shipping}
TOTAL: $${total}`);
