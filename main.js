
let carouselImg = document.getElementsByClassName('carousel-img')
//check browser width and set appropriate Carousel image according to browser width
window.onresize = ()=>{
    if(window.innerWidth < 576){
        carouselImg[0].src = "./images/sm hitman.jpg" ;
        carouselImg[1].src = "./images/sm far cry 6.webp";
        carouselImg[2].src = "./images/sm evil dead.jpg";
        carouselImg[3].src = "./images/sm spider-man.jpg";
        carouselImg[4].src = "./images/sm God of war.jpg";}

    else{
        carouselImg[0].src = "./images/hitman.jpg";
        carouselImg[1].src = "./images/far cry 6.png";
        carouselImg[2].src = "./images/evil dead.jpg";
        carouselImg[3].src = "./images/spider-man.jpg";
        carouselImg[4].src ="./images/God of War.jpeg";
    }
}
window.onload = () =>{
    if(window.innerWidth < 576){
        carouselImg[0].src = "./images/sm hitman.jpg";
        carouselImg[1].src = "./images/sm far cry 6.webp";
        carouselImg[2].src = "./images/sm evil dead.jpg";
        carouselImg[3].src = "./images/sm spider-man.jpg";
        carouselImg[4].src = "./images/sm God of war.jpg";}

    else{carouselImg[0].src = "./images/hitman.jpg";
        carouselImg[1].src = "./images/far cry 6.png";
        carouselImg[2].src = "./images/evil dead.jpg";
        carouselImg[3].src = "./images/spider-man.jpg";
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
console.log(carouselIndex);
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
/*
let product = document.querySelectorAll(".product-image")
let test = []
console.log(product)
product.forEach(product => {
    product.addEventListener("click", (event)=>{
        productPage(event.target);
    })
});
function productPage(product){
let productCon = product.parentElement.parentElement
let name = productCon.getElementsByClassName('product-name')[0].innerText;
test[0] = name;
let send = JSON.stringify(test);
localStorage.setItem("product-page", send)
}
*/

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