$(function(){var a=(function(){var
k="jcart",b=$("#jcart"),e=$("[name=jcartToken]").val(),i=$("#jcart-tooltip");var
d=(function(){var
l=null;$.ajax({url:k+"/config-loader.php",data:{ajax:"true"},dataType:"json",async:false,success:function(m){l=m},error:function(){alert("Ajax
error: Edit the path in jcart.js to fix.")}});return l}());var
f=(function(){if(d.tooltip===true){i.text(d.text.itemAdded);$(".jcart
[type=submit]").mouseenter(function(m){var
l=m.pageY+25,n=m.pageX+-10;$("body").append(i);i.css({top:n+"px",left:l+"px"})}).mousemove(function(m){var
n=m.pageY+25,l=m.pageX+-10;i.css({top:n+"px",left:l+"px"})}).mouseleave(function(){i.hide()})}$("#jcart-buttons").remove();$.ajaxSetup({type:"POST",url:k+"/relay.php",success:function(l){b.html(l);$("#jcart-buttons").remove()},error:function(n,p){var
o=n.status,l="Ajax error: ";if(o===0){l+="Check your network
connection."}if(o===404||o===500){l+=o}if(p==="parsererror"||p==="timeout"){l+=p}alert(l)}})}());var
c=$("#jcart-is-checkout").val();function j(n){var
m=n.find("[name="+d.item.qty+"]"),l=n.find("[name="+d.item.add+"]");$.ajax({data:n.serialize()+"&"+d.item.add+"="+l.val(),success:function(o){if(m.val()>0&&i.css("display")==="none"){i.fadeIn("100").delay("400").fadeOut("100")}b.html(o);$("#jcart-buttons").remove()}})}function
g(l){var o=l.parent().find('[name="jcartItemId[]"]').val();var
n=l.val();if(n){var
m=window.setTimeout(function(){$.ajax({data:{jcartUpdate:1,itemId:o,itemQty:n,jcartIsCheckout:c,jcartToken:e}})},1000)}l.keydown(function(p){if(p.which!==9){window.clearTimeout(m)}})}function
h(m){var n=m.attr("href");n=n.split("=");var
l=n[1];$.ajax({type:"GET",data:{jcartRemove:l,jcartIsCheckout:c}})}$(".jcart").submit(function(l){j($(this));l.preventDefault()});b.keydown(function(l){if(l.which===13){l.preventDefault()}});b.delegate('[name="jcartItemQty[]"]',"keyup",function(){g($(this))});b.delegate(".jcart-remove","click",function(l){h($(this));l.preventDefault()})}())});
