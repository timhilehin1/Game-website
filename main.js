function loadingScreen (){
    let load = document.getElementsByClassName('loading')[0]
    let page = document.getElementsByClassName('page')[0]
    setTimeout(() => {
        page.style.display ="block"
        load.style.display ="none"
    }, 5000)    
}
loadingScreen();


let carouselImg = document.getElementsByClassName('carousel-img')
//check browser width and set appropriate Carousel image according to browser width
window.onresize = ()=>{
    if(window.innerWidth < 576){
        carouselImg[0].src ="./images/sm cyberpunk.jpg" ;
        carouselImg[1].src = "./images/sm far cry 6.webp";
        carouselImg[2].src = "./images/sm evil dead.jpg";
        carouselImg[3].src = "./images/sm sifu.jpg"
        carouselImg[4].src = "./images/sm God of war.jpg";}

    else{
        carouselImg[0].src =  "./images/cyberpunk.jpg";
        carouselImg[1].src = "./images/sifu.jpg";
        carouselImg[2].src = "./images/evil dead.jpg";
        carouselImg[3].src = "./images/sifu.jpg"
        carouselImg[4].src ="./images/God of War.jpeg";
    }
}
window.onload = () =>{
    if(window.innerWidth < 576){
        carouselImg[0].src = "./images/sm cyberpunk.jpg";
        carouselImg[1].src = "./images/sm far cry 6.webp";
        carouselImg[2].src = "./images/sm evil dead.jpg";
        carouselImg[3].src = "./images/sm sifu.jpg"
        carouselImg[4].src = "./images/sm God of war.jpg";}

    else{carouselImg[0].src = "./images/cyberpunk.jpg";
        carouselImg[1].src = "./images/far cry 6.png";
        carouselImg[2].src = "./images/evil dead.jpg";
        carouselImg[3].src = "./images/sifu.jpg"
        carouselImg[4].src ="./images/God of War.jpeg"}
}



//CAROUSEL
let carousels = document.querySelectorAll(".carousels");
let carousel = document.getElementsByClassName("carousel")[0];
let carouselIndex = 0
let prevCarouselbtn = document.getElementById("prevCarousel");
let nextCarouselbtn = document.getElementById("nextCarousel");

prevCarouselbtn.onclick = () =>{
    carouselChange("prev");
    clearInterval(id)// stops carousel autoplay
}
nextCarouselbtn.onclick = () =>{
    carouselChange("next");
    clearInterval(id)// stops carousel autoplay
}

function carouselChange(condition){
if(condition == "next"){
    if(carouselIndex == carousels.length - 1){
        carouselIndex = 0 // when carousel reaches last item sets the carousel back to the beginning
    }
    else {carouselIndex++} 
}
else{
    if(carouselIndex == 0){
    carouselIndex = carousels.length - 1 ;// if carousel is on the first item sets the carousel to the last item
    }
    else {carouselIndex--}
}

carousels.forEach(function(carousel){
carousel.classList.remove('show-item');// removes show-item class from all carousels
})
carousels[carouselIndex].classList.add('show-item')// adds show-item class to current carousel index
}


let id;
const autoplay = () => {// sets autoplay on carousel after every 7 seconds
id = setInterval(function() {
carouselChange("next");
  }, 7000);// set interval is stored in a variable id so it can be cleared
  }  
autoplay();

carousel.addEventListener('mouseenter',() =>{
    clearInterval(id)// listens for when mouse enters carousel and stops carousel autoplay
})
carousel.addEventListener('mouseleave', autoplay) // listens for when mouse leaves carousel and starts carousel autoplay


let product = document.querySelectorAll(".product-image")

let test = []
product.forEach(product => {
    product.addEventListener("click", (event)=>{
        productPage(event.target);
    })
});

function productPage(product){
let productCon = product.parentElement.parentElement
let name  = productCon.querySelector(".product-name").innerText
let logo  = productCon.querySelector(".product-logo").src
let imageSrc  = productCon.querySelector(".large-product-image").src
let smallImage  = productCon.querySelector(".small-product-image").src
let price  = productCon.querySelector(".price").innerText
let percent  = productCon.querySelector(".percent-off").innerText
let slashed = productCon.querySelector(".slashed-price").innerText
let description = productCon.querySelector(".desc").innerText

test[0] = {product: name, logo : logo, image: imageSrc, price: price, slashedPrice: slashed, percent:percent, smallImage: smallImage, desc:description}
let productPage = JSON.stringify(test);
sessionStorage.setItem('productPage', productPage);
}



// Beginning of Timi's JS; fear not, no danger here.
NewCategory_El = document.querySelector(".newCategory")
topCategory_El = document.querySelector(".topCategory")
soonCategory_El = document.querySelector(".soonCategory")
categoryLink = document.querySelectorAll(".category-link");

categoryLink.forEach( link =>{
link.addEventListener('click', (event)=>{
categoryLink.forEach(link =>{
link.classList.remove('active-category');})
event.target.classList.add("active-category")})
})


function displayNew(){
NewCategory_El.style.display = 'block'
topCategory_El.style.display = 'none'
soonCategory_El.style.display = 'none'
}

function displayTop(){
    topCategory_El.style.display = 'block'
    soonCategory_El.style.display = 'none'
    NewCategory_El.style.display = 'none'
}

function displayComing(){
    soonCategory_El.style.display = 'block'
    topCategory_El.style.display = 'none'
    NewCategory_El.style.display = 'none'
}





/*ADD TO CART*/
// Get the modal
let added = document.querySelector('.added');
let alreadyInCart = document.querySelector('.already-inCart');

// Get the <span> element that closes the modal
let closeAdded = document.querySelector('.added-close');
let closeAlready = document.querySelector('.already-inCart');

function closeModal() {
    
    added.style.display = "none";
    alreadyInCart.style.display = "none";
}



let addtoCartBtn = document.querySelectorAll(".addCart")
let counter = document.querySelector('.cart-counter')
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
    let productPrice = productCont.querySelector('.price').innerText
    productPrice = productPrice.replace('$', '')
    let slashedPrice = productCont.querySelector('.slashed-price').innerText
    slashedPrice = slashedPrice.replace('$', '')
    let productName = productCont.querySelector('.product-name').innerText
    let percentOff = productCont.querySelector('.percent-off').innerText
    percentOff = percentOff.replace('%', '')
    let smImageSrc = productCont.querySelector('.small-product-image').src

    if (cartItems.length == 0 || cartItems == undefined){
        cartItems.push({product : productName,  price : productPrice, image: smImageSrc, 
            inCart : 1, slashed : slashedPrice, percent: percentOff });
            added.style.display = "block";
            setTimeout(() => {
                closeModal();
            }, 1500)
        }
        else {
            for (let j = 0; j < cartItems.length; j++){
            if (cartItems[j].product === productName){
                alreadyInCart.style.display = "block";
                setTimeout(() => {
                    closeModal();
                }, 1500)
                return
            }
        }
        cartItems.push({product : productName,  price : productPrice, image: smImageSrc
            , inCart : 1, slashed : slashedPrice, percent: percentOff});
            added.style.display = "block";
            setTimeout(() => {
                closeModal();
            }, 2000)
        }
let cart = JSON.stringify(cartItems);
sessionStorage.setItem('cartItems', cart);
counter.innerText = JSON.parse(sessionStorage.getItem('cartItems')).length
}
counter.innerText =  JSON.parse(sessionStorage.getItem('cartItems')).length
