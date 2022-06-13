window.onload = ()=> {
    let load = document.getElementsByClassName('loading')[0]
    let page = document.getElementsByClassName('page')[0]
    setTimeout(() => {
        page.style.display ="block"
        load.style.display ="none"
    }, 1000)    
}
let cartDetails = JSON.parse(sessionStorage.getItem('productPage'))
let productInfo = document.querySelector(".product-info")
let cart = cartDetails.map(function(product){
    if(product.slashedPrice ==""){
        return `
        <hr class="w-100 my-3">
    
        <h2 class="product-title">${product.product}</h2>
    
        <div class="overviewcont mb-2">
        <p class="overview-active">OVERVIEW</p>
        <p class="">Add ONS</p>
        <p class="">FAQ</p>
        </div>
    
        <div class="row gx-3">
        <div class="col-lg-8 col-md-8 col-sm-12">
        <div><img src = "${product.image}" class="img-fluid productInfoImg" alt="Responsive image"></div>
        <img src = "${product.smallImage}" class="d-none small-product-image">
         <p class="description my-2">Embark on an epic adventure full of whimsy, wonder, and high-powered weaponry!
         Roll your own multiclass hero then shoot, loot, slash, and cast on a quest to stop the Dragon Lord.</p>
        </div>
    
        <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="d-none d-md-flex justify-content-center align-items-center img-cont mb-3"><img class="thumbnail" 
            src=" ${product.logo}"></div>
            <div class="price-container mt-2 d-flex gap-2 ">
                <p class="actual-price align-self-center">${product.price}</p>
             <p class="slashed-price align-self-center d-none">${product.slashedPrice}</p>
              <div class="d-flex align-items-center"><p class="percent-off px-2 py-1 rounded d-none">${product.percent}</p></div>
            </div>
            <p class="sale-end mt-2 d-none">Sale ends on 30/6/2022 at 12pm</p>
            <div class="d-grid gap-2 col-12">
            <a href="cart.html" class="btn my-2 addCart buy-now py-2" type="button">Buy Now</a>
            <button type="button" class=" my-1 add addCart rounded py-2"><i class="fa-solid fa-cart-shopping "></i> Add to Cart</button>
            <button type="button" class=" my-1 add rounded py-2"><i class="fa-solid fa-circle-plus"></i> Add to wishlist</button>
            <div class="d-flex justify-content-between">
            <p class="Developer-text text-secondary">Developer</p>
            <p class="manufacturer">Menu & Sons</p>
            </div>
            <hr class="mt-1">
                </div>
        </div>
        </div>
        </div>
      
`
    }
    else{
        return `
        <hr class="w-100 my-3">
    
        <h2 class="product-title">${product.product}</h2>
    
        <div class="overviewcont mb-2">
        <p class="overview-active">OVERVIEW</p>
        <p class="">Add ONS</p>
        <p class="">FAQ</p>
        </div>
    
        <div class="row gx-3">
        <div class="col-lg-8 col-md-8 col-sm-12">
        <div><img src = "${product.image}" class="img-fluid productInfoImg" alt="Responsive image"></div>
        <img src = "${product.smallImage}" class="d-none small-product-image">
         <p class="description my-2">Embark on an epic adventure full of whimsy, wonder, and high-powered weaponry!
         Roll your own multiclass hero then shoot, loot, slash, and cast on a quest to stop the Dragon Lord.</p>
        </div>
    
        <div class="col-sm-12 col-md-4 col-lg-4">
            <div class="d-none d-md-flex justify-content-center align-items-center img-cont mb-3"><img class="thumbnail" 
            src=" ${product.logo}"></div>
            <div class="price-container mt-2 d-flex gap-2">
                <p class="actual-price align-self-center">${product.price}</p>
             <p class="slashed-price align-self-center">${product.slashedPrice}</p>
              <div class="d-flex align-items-center"><p class="percent-off px-2 py-1 rounded">${product.percent}</p></div>
            </div>
            <p class="sale-end mt-2">Sale ends on 30/6/2022 at 12pm</p>
            <div class="d-grid gap-2 col-12">
            <a href="cart.html" class="btn my-2 buy-now py-2 addCart" type="button">Buy Now</a>
                <button type="button" class=" my-1 add addCart rounded py-2"><i class="fa-solid fa-cart-shopping "></i> Add to Cart</button>
                <button type="button" class=" my-1 add rounded py-2"><i class="fa-solid fa-circle-plus"></i> Add to wishlist</button>
            <div class="d-flex justify-content-between">
            <p class="Developer-text text-secondary">Developer</p>
            <p class="manufacturer">Menu & Sons</p>
            </div>
            <hr class="mt-1">
                </div>
        </div>
        </div>
        </div>
      
`
 }
   
})
productInfo.innerHTML = cart.join("")



/*ADD TO CART*/
let addtoCartBtn = document.querySelectorAll(".addCart")
let cartItems = JSON.parse(sessionStorage.getItem('cartItems'));

function checkCartContent () {
    if(cartItems == null){
        cartItems = []
    } 
    else{
        return
    }
}
checkCartContent();

addtoCartBtn.forEach(item=> {
item.addEventListener('click', (event) => {
update(event.target);
})});

function update(currentProduct){
    let productCont = currentProduct.parentElement.parentElement.parentElement.parentElement
    console.log(productCont);
    let productPrice = productCont.querySelector('.actual-price').innerText
    productPrice = productPrice.replace('$', '')
    let slashedPrice = productCont.querySelector('.slashed-price').innerText
    slashedPrice = slashedPrice.replace('$', '')
    let productName = productCont.querySelector('.product-title').innerText
    let percentOff = productCont.querySelector('.percent-off').innerText
    percentOff = percentOff.replace('%', '')
    let smImageSrc = productCont.querySelector('.small-product-image').src

    if (cartItems.length == 0 || cartItems == undefined){
        cartItems.push({product : productName,  price : productPrice, image: smImageSrc, 
            inCart : 1, slashed : slashedPrice, percent: percentOff });
        }
        else {
            for (let j = 0; j < cartItems.length; j++){
            if (cartItems[j].product === productName){
                return
            }
        }
        cartItems.push({product : productName,  price : productPrice, image: smImageSrc, inCart : 1, slashed : slashedPrice, percent: percentOff});
        }
let cart = JSON.stringify(cartItems);
sessionStorage.setItem('cartItems', cart);
counter.innerText = JSON.parse(sessionStorage.getItem('cartItems')).length
}

let counter = document.querySelector('.cart-counter')
counter.innerText =  JSON.parse(sessionStorage.getItem('cartItems')).length

