const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for( let card of cards) {
    card.addEventListener("click", function(){
        const infoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${infoId}`;
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})