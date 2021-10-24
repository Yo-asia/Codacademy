"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var productName = "beanie";
var shippingAddress = "New York";
var shipping;
var taxPercent;
var taxTotal;
var total;
/*const product = products.find((prod) => {
  if (prod.name===productName){
    return prod;
  }
  return false;
})*/
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
if (product.preOrder === true) {
    console.log("This is a pre-order item. You will be notified within an email when the package is sent.");
}
if (product.price >= 25) {
    shipping = 0;
    console.log("Your product is over $25, you get a free shipping!");
}
else {
    shipping = 5;
    console.log("You need to spend " + (25 - product.price) + " more to get free shipping");
}
if (shippingAddress.includes('New York')) {
    //if (shippingAddress.match(/New York/g)){
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log("Thanks for buying at TypeMart!\nProduct: " + product.name + "\nAddress: " + shippingAddress + "\nPrice: $" + product.price + "\nTax: $" + taxTotal + "\nShipping: $" + shipping + "\nTOTAL: $" + total);
