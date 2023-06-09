
/**
 * Image Slider
 */

let counter = 0;
slideImages();

function slideImages(){
    try{
        let allImages = document.getElementsByClassName('slides')[0].getElementsByTagName('div');
        for (let i=0;i < allImages.length;i += 2){
            allImages[i].style.display = "none";
            if (allImages[i+1]) {
            allImages[i+1].style.display = "none";
            }
        }
        counter += 1;
        if (counter > allImages.length/2) {
            counter = 1;
        }
        allImages[2*counter-2].style.display = "block";
        if (allImages[2*counter-1]) {
            allImages[2*counter-1].style.display = "block";
        }
        if (counter === 1){
            document.getElementById('previous').style.color = 'grey';
            document.getElementById('previous-btn').style.border = '2px solid grey';
            document.getElementById('previous-btn').style.cursor = 'not-allowed';
        }else{
            document.getElementById('previous').style.color = '#fff';
            document.getElementById('previous-btn').style.border = '2px solid #fff';
            document.getElementById('previous-btn').style.cursor = 'pointer';
        }
    }catch(e){
        console.log()
    }
}

try{
    document.getElementById('next').addEventListener("click", () => {
        slideImages();
    });
}catch(e){
    console.log()
}

try{
    document.getElementById('previous').addEventListener("click", () => {
        counter -= 2;
        if (counter < 1) {
            counter = Math.ceil(document.getElementsByClassName("slides")[0].getElementsByTagName("div").length/2);
        }
        slideImages();
    });
}catch(e){
    console.log()
}

/**
 * Image Slider Ends
 */


/**
 * Scroll top button visibility
 */
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        document.getElementById('scroll_top').style.display = 'block';
    } else {
        document.getElementById('scroll_top').style.display = 'none';
    }
});

/**
 * Animate on scroll top button clicked
 */

document.getElementById('scroll_top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    return false;
});