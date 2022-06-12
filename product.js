let cartDetails = JSON.parse(sessionStorage.getItem('send'))
console.log(cartDetails)
let productInfo = document.querySelector(".product-info")

let cart = cartDetails.map(function(product){
    return `
    <hr class="w-100 my-3">

    <h2 class="Game-title">`+product.prod_name+`</h2>

    <div class="overviewcont mb-2">
    <p class="overview-active">OVERVIEW</p>
    <p class="">Add ONS</p>
    <p class="">FAQ</p>
    </div>

    <div class="row gx-3">
    <div class="col-lg-8 col-md-8 col-sm-12">
     <img src = "`+product.prod_img+`" class="img-fluid productInfoImg" alt="Responsive image">
     <p class="description my-2">Embark on an epic adventure full of whimsy, wonder, and high-powered weaponry! Roll your own multiclass hero then shoot, loot, slash, and cast on a quest to stop the Dragon Lord.</p>
    </div>

    <div class="col-sm-12 col-md-4 col-lg-4">
        <img class="thumbnail d-none d-md-block " src="`+product.prod_logo+`">
        <div class="price-container mt-2 d-flex gap-2">
            <p class="actual-price align-self-center">`+product.prod_price+`</p>
         <p class="slashed-price align-self-center">$42.99</p>
          <div class="d-flex align-items-center"><p class="percent-off px-2 py-1 rounded">-17%</p></div>
        </div>
        <p class="sale-end mt-2 ">Sale ends on 30/6/2022 at 12pm</p>
        <div class="d-grid gap-2 col-12">
            <button class="btn my-2 buy-now py-2" type="button">Buy Now</button>
            <button type="button" class="btn my-1 addCart rounded py-2"><i class="fa-solid fa-cart-shopping "></i> Add to Cart</button>
            <button type="button" class="btn my-1 add rounded py-2"><i class="fa-solid fa-circle-plus"></i> Add to wishlist</button>
        <div class="d-flex justify-content-between">
        <p class="Developer-text text-secondary">Developer</p>
        <p class="manufacturer">Menu & Sons</p>
        </div>
        <hr class="mt-1">
            </div>
    </div>
    </div>
    `
})
productInfo.innerHTML = cart.join("")
