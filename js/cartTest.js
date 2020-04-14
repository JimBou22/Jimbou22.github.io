$(document).ready(function(){
  class cartItem {
    constructor(name, qty, price){
      this.name=name;
      this.qty=qty;
      this.price=price;
    }
  }
  $("#cart").click(function(){
    var name = $(this).data("name");
    var price = $(this).data("price");
    var quantity = $("#qty-1").attr("value");
    alert(name + price + quantity + " is the product");
    var x = new cartItem(name,quantity,price);
    // if(sessionStorage.getItem("myCart") ===undefined){
    //   var cart = {x};
    //   sessionStorage.setItem("myCart",JSON.stringify(cart));
    // } else {
    //   var myStuff = JSON.parse(sessionStorage.getItem("myCart"));
    //   myStuff.push(x);
    //   sessionStorage.setItem("myCart", JSON.stringify(myStuff))
    // }
    sessionStorage.setItem(name,name);
    sessionStorage.setItem("3DPrinterQuantity",quantity);
    sessionStorage.setItem("3DPrinterPrice",price);

    });

    

  $("#n1").html(sessionStorage.getItem("3DPrinter"));
  $("#q1").html(sessionStorage.getItem("3DPrinterQuantity"));
  $("#p1").html(sessionStorage.getItem("3DPrinterPrice"));

//
// function display() {
//     var cart = JSON.parse(sessionStorage.getItem("myCart"));
//     var content = document.getElementById("cartTable");
//
//     content.innerHTML = cart.map(product => {
//         return '<tr><td>' + product.name + '</td><td>' + product.price + '</td></tr>';
//     }).join('');
// }
});
