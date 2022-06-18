function loadingScreen (){
    let load = document.getElementsByClassName('loading')[0]
    let page = document.getElementsByClassName('page')[0]
    setTimeout(() => {
        page.style.display ="block"
        load.style.display ="none"
    }, 5000)    
}
loadingScreen();

let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
let emptyCart = document.querySelector(".empty-cart")
let cartDetails = document.querySelector(".cart-details")
let cart = document.querySelector(".all-cart-items")
let cartSize= document.querySelector('.cart-size')

function updatetotalPrice(){
if(cartItems.length < 1){
    cartDetails.style.display ="none";
    emptyCart.style.display ="block";
    return
}
else{
    emptyCart.style.display ="none";
    cartDetails.style.display ="flex";
    let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    let sumTotal = 0;
    let totalPrice = document.querySelector('.subtotal')
    cartItems.forEach(item =>{
        let price =  (parseFloat(item.price))
        let inCart = (parseFloat(item.inCart))
        sumTotal += (inCart * price);
        sumTotal = Math.round(sumTotal * 100)/ 100
    })
   
totalPrice.innerText = `$${sumTotal}`
}
cartSize.innerText =  JSON.parse(sessionStorage.getItem('cartItems')).length
}

function createCart(){
    if (cartItems == undefined){
       alert('nothing in cart');
    }
    else{
        cartItems.forEach(item => {
        if(item.slashed ==""){
            cart.innerHTML +=`<div class="w-100 d-flex p-3 outer-container mb-3 justify-content-md-between w-100 rounded flex-row">
        <div class="d-flex flex-md-row px-1 flex-column"><img src="${item.image}" class="rounded"/>
          <p class="product-name px-md-4">${item.product}</p></div>
          <div class="d-flex flex-column gap-1 px-2">
            <div class="d-flex discount w-50">
              <p class="product-price">$${item.price}</p>
            </div>
            <div class="counter d-flex ">
              <button class="quantity-btn">-</button>
              <p class="checkout-quantity mx-2 align-self-center">${item.inCart}</p>
              <button class="quantity-btn">+</button>
            </div>
              <a class="remove mt-2" href="#"> <i class=" fa-solid fa-trash-can pe-1"></i>Remove</a>
          </div>
       
      </div> `;
        }
        else{
            cart.innerHTML +=`<div class="w-100 d-flex p-3 outer-container mb-3 justify-content-between w-100 rounded flex-row">
            <div class="d-flex flex-md-row px-1 flex-column"><img src="${item.image}" class="rounded"/>
              <p class="product-name px-md-4">${item.product}</p></div>
              <div class="d-flex flex-column gap-1 px-2">
              <p class="product-price">$${item.price}</p>
                <div class="d-flex discount">
                  <p class="slashed-price align-self-center">$${item.slashed}</p>
                  <div class="align-items-center d-flex"> <p class="percent-off px-2 py-1 rounded">${item.percent}%</p></div>
                </div>
                <p class="sale-end">Sale ends on 30/6/2022 at 12pm</p>
                <div class="counter d-flex ">
                  <button class="quantity-btn">-</button>
                  <p class="checkout-quantity mx-2 align-self-center">${item.inCart}</p>
                  <button class="quantity-btn">+</button>
                </div>
                  <a class="remove mt-2" href="#"> <i class=" fa-solid fa-trash-can pe-1"></i>Remove</a>
              </div>
           
          </div> `
        }     
       ;
        })
         }
    updatetotalPrice();
}
createCart();


let quantityBtn = document.querySelectorAll(".quantity-btn");
quantityBtn.forEach(item => {
    item.addEventListener('click', (event) =>{
    if (event.target.innerText == "-"){updateQuantity(event.target, "reduce");}
    else {updateQuantity(event.target, "add");}
})
})


function updateQuantity(arg, condition){
    let productCont = arg.parentElement.parentElement.parentElement
    let quantity = productCont.querySelector('.checkout-quantity')
    let name = productCont.querySelector('.product-name').innerText
    if(condition == "add"){
        cartItems.forEach(item => {
            if (item.product === name){
                if (item.inCart == 10){return}
                else{
                item.inCart++;
                let updatedCart = JSON.stringify(cartItems);
                sessionStorage.setItem('cartItems', updatedCart);
                }
                 quantity.innerText = item.inCart
                 updatetotalPrice();
                }
        });
    }
    
    else {
        cartItems.forEach(item => {
            if (item.product === name){
            if (item.inCart == 1){return}
            else {
            item.inCart--
            let updatedCart = JSON.stringify(cartItems);
            sessionStorage.setItem('cartItems', updatedCart);
            }
             quantity.innerText = item.inCart
             updatetotalPrice()
            }
        })
    } 
}

let deleteBtn = document.querySelectorAll('.remove');
deleteBtn.forEach(item => {
item.addEventListener('click', (event) => {
deleteProduct(event.target);})
});

function deleteProduct(arg){
    let productCont = arg.parentElement.parentElement
    let name = productCont.querySelector('.product-name').innerText
    cartItems.forEach((item, index) =>{
        if(item.product === name){
            cartItems.splice(index ,1);
            productCont.remove();
            let cart = JSON.stringify(cartItems);
            sessionStorage.setItem('cartItems', cart);
        }
    })
    updatetotalPrice();
    }

    cartSize.innerText =  JSON.parse(sessionStorage.getItem('cartItems')).length










