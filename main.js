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