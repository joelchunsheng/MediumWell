var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    //hide all 3 slides 
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // if slide number becomes 4, it will change it back to 1
    for (i = 0; i < dots.length; i++) {   // make all 3 dots not active 
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //display current slide and dots
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds and runs again from the top , now slide index will be 1.....
}