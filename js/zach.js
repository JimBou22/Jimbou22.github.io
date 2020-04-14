$(document).ready(function(){

class Product {
  constructor(name, price, image, url) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.url = url;
  }
}

myProd1 = new Product("Authentic Roman Javelin", 575.99, "../images/javelin.jpg", "javelin.html");
myProd2 = new Product("Nunchucks", 49.99, "../images/nunchucks.jpg", "nunchucks.html");
myProd3 = new Product("Rocket Powered Rollerskates", 299.99, "../images/skates.jpg", "skates.html");

var products = [myProd1, myProd2, myProd3];

products.sort(function(a, b) {
  return a.price - b.price
});

var showSorted = function () {
  $("#SGProductsStart").hide();

  var i;
  for (i = 0; i < products.length; i++){
    $("#SGprod"+(i+1)+" a").attr("href", products[i].url);
    $("#SGprod"+(i+1)+" img").attr("src", products[i].image);
    $("#SGprod"+(i+1)+" .name").html(products[i].name);
    $("#SGprod"+(i+1)+" .price").html("$" + products[i].price);
  }
};

$("#sortButton").on("click", showSorted);

  // $("#SGprod1 a").attr("href", products[0].url);
  // $("#SGprod1 img").attr("src", products[0].image);
  // $("#SGprod1 .name").html(products[0].name);
  // $("#SGprod1 .price").html("$" + products[0].price);
  //
  // $("#SGprod2 a").attr("href", products[1].url);
  // $("#SGprod2 img").attr("src", products[1].image);
  // $("#SGprod2 .name").html(products[1].name);
  // $("#SGprod2 .price").html("$" + products[1].price);
  //
  // $("#SGprod3 a").attr("href", products[2].url);
  // $("#SGprod3 img").attr("src", products[2].image);
  // $("#SGprod3 .name").html(products[2].name);
  // $("#SGprod3 .price").html("$" + products[2].price);

  // $("#SGprod1 a").attr("href", products[0].url);
  // $("#SGprod1 img").attr("src", products[0].image);
  // $("#SGprod1 .name").html(products[0].name);
  // $("#SGprod1 .price").html("$" + products[0].price);


// var showSorted = function () {
//   $("#SGprod1 a").attr("href", products[0].url);
//   $("#SGprod1 img").attr("src", products[0].image);
//   $("#SGprod1 .name").html(products[0].name);
//   $("#SGprod1 .price").html("$" + products[0].price);
// };




// document.getElementById("prod-1-name").innerHTML = products[0].name;
// document.getElementById("prod-1-price").innerHTML = "$ " + products[0].price;
//
// document.getElementById("prod-2-name").innerHTML = products[1].name;
// document.getElementById("prod-2-price").innerHTML = "$ " + products[1].price;
//
// document.getElementById("prod-3-name").innerHTML = products[2].name;
// document.getElementById("prod-3-price").innerHTML = "$ " + products[2].price;


});
