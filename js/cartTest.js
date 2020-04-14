var cart = [];

var Item = function(name,price,quantity){
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

function addItemToCart(name,price,quantity){
  var item = new Item(name,price,quantity);
  cart.push(item);
}
