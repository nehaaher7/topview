var Total=0;
var item={
    "products": [
      {
        "id": 1,
        "name": "Adult Male Bike",
        "price": 20.50,
        "image": "./img/bike6.jpg",//"http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
        "product_type": "bike"
      },
      {
        "id": 2,
        "name": "Adult Female Bike",
        "price": 20.50,
        "image": "./img/bike4.jpg",// "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
        "product_type": "bike"
      },
      {
        "id": 3,
        "name": "Kids Unisex Bike",
        "price": 12.75,
        "image": "./img/bike5.jpg",//"http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
        "product_type": "bike"
      },
      {
        "id": 4,
        "name": "Adult Unisex Helmet",
        "price": 4.00,
        "image": "./img/bike5.jpg",//"http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
        "product_type": "accessory"
      },
      {
        "id": 5,
        "name": "Kids Unisex Helmet",
        "price": 3.50,
        "image": "./img/bike5.jpg",//"http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
        "product_type": "accessory"
      },
      {
        "id": 6,
        "name": "Insurance",
        "price": 9.99,
        "image": "./img/bike5.jpg",//"http://via.placeholder.com/250x250?text=Insurance",
        "product_type": "addon"
      }
    ]
  }

var output="";
  $( document ).ready(function() {
  for (var element = 0; element < item.products.length; element++) {
    output += '<div class="col-sm-2"><img src="'+ item.products[element].image+'" class="btnContainer">'+
    '<h5 class="nameText">'+item.products[element].name+'</h5><h3 class="priceText">$'+item.products[element].price+'</h3>'
    +'<div class="quantity"><button class="plus-btn" type="button" name="button"><img src="./img/plus.svg" alt="" /></button>'
    +'<input type="text" name="name" value="0">'+
    '<button class="minus-btn" type="button" name="button"><img src="./img/minus.svg" alt="" /></button></div></div>'
  }
document.getElementById("container").innerHTML=output;
  });


  function openNav() {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })
    
  }
  $( document ).ready(function() {
  $('.minus-btn').on('click', function(e) {
      console.log("dfgdsgsgs")
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var $pr = $(this).parent().siblings(".priceText");
    var value = parseFloat($input.val());
 
    if (value >1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
  calculateSub($pr.text());
 
});
 
$('.plus-btn').on('click', function(e) {
    console.log("dfgdsgsgs")
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseFloat($input.val());
    var $pr = $(this).parent().siblings(".priceText");
    calculateAdd($pr.text());
    if (value <100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});

function calculateAdd(str){
    Total+=parseFloat(str.split("$")[1]);
    console.log(Total)
    $("#myNav").text(" CHECKOUT $"+Total);
}
function calculateSub(str){
    Total = Total<=0 ? 0:Total-parseFloat(str.split("$")[1]);
    console.log(Total);
    $("#myNav").text(" CHECKOUT $"+Total);
}

  });