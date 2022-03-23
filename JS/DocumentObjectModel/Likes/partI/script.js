var counter = 3;

function likeAdvance() {
    counter++;
    document.querySelector(".like-counter").innerText = counter + " like(s)";
    
    // document.querySelector(".like-counter") ++;
}