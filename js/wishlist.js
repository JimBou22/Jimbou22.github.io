var cart = [
  {
    item:
}
]

var jsonStr = JSON.stringify( cart );
sessionStorage.setItem( "cart", jsonStr );
// now the cart is {"item":"Product 1","price":35.50,"qty":2}
var cartValue = sessionStorage.getItem( "cart" );
var cartObj = JSON.parse( cartValue );
// original object

var Item = function(name,price,quantity){
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

function addItemToCart(name,price,quantity){
  var item = new Item(name,price,quantity);
  cart.push(item);
}
