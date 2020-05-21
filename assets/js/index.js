const gallery_DOM = document.querySelector(".gallery");
const overlay_DOM = document.querySelector(".overlay");

function randomGenerator(limit){
    return Math.floor(Math.random() * limit) + 1;
}


function createImageHtml([h,v]){
    let ImageHtml = `
        <div class="image-item h${h} v${v}">
            <img class="image" src="./assets/media/${randomGenerator(18)}.jpg">
            <div class="image-item-overlay">
                <button class="view">View</button>
            </div>
        </div>
    `;
    return ImageHtml;
}

const spans = Array.from({length:50},() => [randomGenerator(4),randomGenerator(4)]).concat(Array(20).fill([1,1]));

const galleryHtml = spans.map(createImageHtml).join("");
gallery_DOM.innerHTML = galleryHtml;

const viewButton = document.querySelectorAll(".view");
viewButton.forEach(btn => btn.addEventListener("click",function(event){
    overlay_DOM.querySelector(".modal-image").src = event.currentTarget.parentElement.parentElement.querySelector(".image").src;
    overlay_DOM.style.display = "block";
})) 

document.querySelector(".close").addEventListener("click",function(e){
       overlay_DOM.style.display = "none";
})

overlay_DOM.addEventListener("click",function(e){
    if(event.target.closest(".overlay-inner"))return;
    overlay_DOM.style.display = "none";
})