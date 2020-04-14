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
    // alert(name + price + quantity + " is the product");
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
    sessionStorage.setItem(name + "Quantity",quantity);
    sessionStorage.setItem(name + "Price",price);
    });

var keys = Object.keys(sessionStorage);
for(var i =0; i<keys.length;i+=3){
  $("#n" + (i/3+1)).html(sessionStorage.getItem(keys[i]));
  $("#q" + (i/3+1)).html(sessionStorage.getItem(keys[i + 2]));
  $("#p" + (i/3+1)).html(sessionStorage.getItem(keys[i + 1]));
}

// alert("right before 2nd for loop");
for(var j = 1; j <=3; j++){
  var sub = parseFloat(document.getElementById("p"+ j).innerHTML.replace("$",""));
  alert(sub);
  document.getElementById("sub-total").innerHTML += sub;
}

  // $("#n2").html(sessionStorage.getItem("3DPrinter"));
  // $("#q2").html(sessionStorage.getItem("3DPrinterQuantity"));
  // $("#p2").html(sessionStorage.getItem("3DPrinterPrice"));
  // $("#n3").html(sessionStorage.getItem("3DPrinter"));
  // $("#q3").html(sessionStorage.getItem("3DPrinterQuantity"));
  // $("#p3").html(sessionStorage.getItem("3DPrinterPrice"));
  // $("#n4").html(sessionStorage.getItem("3DPrinter"));
  // $("#q4").html(sessionStorage.getItem("3DPrinterQuantity"));
  // $("#p4").html(sessionStorage.getItem("3DPrinterPrice"));
  // $("#n5").html(sessionStorage.getItem("3DPrinter"));
  // $("#q5").html(sessionStorage.getItem("3DPrinterQuantity"));
  // $("#p5").html(sessionStorage.getItem("3DPrinterPrice"));

});
