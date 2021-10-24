"use strict";
exports.__esModule = true;
var restaurants_1 = require("./restaurants");
var orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(bracket) {
    switch (bracket) {
        case 0:
            return 10;
        case 1:
            return 20;
        case 2:
            return 30;
        default:
            return 0;
    }
}
;
/// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [];
    orders.forEach(function (restaurant) {
        var result = restaurant.filter(function (order) { return order.price <= getMaxPrice(price); });
        filteredOrders.push(result);
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, orders) {
    restaurants.forEach(function (restaurant, index) {
        if (orders[index].length > 0) {
            console.log(restaurant.name);
            orders[index].forEach(function (order) {
                console.log("  -" + order.name + " : $" + order.price);
            });
        }
        ;
    });
}
/// Main
var elligibleOrders = getOrders(orders_1.PriceBracket.Medium, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
