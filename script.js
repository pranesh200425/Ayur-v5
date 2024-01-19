const viewModalBtn = document.querySelector(".view-details");
const modalClosebtn = document.querySelector(".close-btn");
const menuIcon = document.querySelector(".menu-icon");

let isModalvis = false;

const modOpenClose = () => {
    let modal = document.querySelector(".product-view-modal");/* 
    let modalContainer = document.querySelector(".modal-container"); */
    if (isModalvis === false) {
        modal.classList.add("active");/* 
        modalContainer.classList.add("modalcon"); */
        isModalvis = true;
    } else {
        modal.classList.remove("active");/* 
        modalContainer.classList.remove("modalcon"); */
        isModalvis = false;
    }
}

const openMenu = () => {
    let bars = document.querySelector(".fa-bars")
    let menu = document.querySelector(".nav .transparent .nav-items");
    menu.classList.toggle('show');
    bars.classList.toggle("fa-xmark")
    console.log("works");
}

let modalboxID;


const newModal = () => {
    const modalbox = `<div class="modal-container id="${modalboxID}">

    <div class="close-btn">
        <i class="fa-solid fa-xmark"></i>
    </div>
    <div class="modal-product-img">
        <img class="prod-modal-image" src="Assets/sebastian-unrau-sp-p7uuT0tw-unsplash.jpg" alt="image">
    </div>
    <div class="modal-details">
        <div class="title">
            <h1>Ayurvedic charcoal Face Pack</h1>
        </div>
        <div class="description">
            "The Ayur Ayurvedic Charcoal Face Pack" is more than a skincare product; it's a commitment to your
            skin's well-being, embracing the goodness of Ayurveda for a naturally glowing complexion.
        </div>
        <div class="ingredients">
            <p>Key Ingredients</p>
            <li><span>Activated Charcoal:</span>Renowned for its deep-cleansing properties, it helps draw out
                impurities, toxins, and excess oil from the skin.</li>
            <li><span>Neem and Tulsi (Holy Basil):</span> These Ayurvedic herbs are known for their
                antibacterial and anti-inflammatory qualities, promoting clear and balanced skin.
            </li>
            <li><span>Multani Mitti (Fuller's Earth):</span>This natural clay aids in absorbing excess oil,
                leaving the skin feeling refreshed and revitalized.</li>
            <li><span>Essential Oils:</span> Our formulation may include carefully selected essential oils to
                enhance the overall experience, contributing to a soothing and aromatic skincare ritual.
            </li>
        </div>
        <div class="usage-tips">
            <p>Usage Tips</p>
            <li><span>Cleansed Canvas:</span>- Apply the face pack to clean, dry skin to maximize its efficacy.
            </li>
            <li><span>Thin, Even Layer:</span>- Use a brush or your fingertips to apply a thin and even layer,
                avoiding the sensitive areas around the eyes and mouth.
            </li>
            <li><span>Relax and Rejuvenate:</span>- Allow the face pack to dry for 15-20 minutes, letting the
                powerful ingredients work their magic. Rinse off with lukewarm water, and gently pat your skin
                dry.
            </li>
        </div>
        <div class="buying-options">
            <p>&#8377;500(500ml)</p>
            <a href="">click to place order<i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>

</div>`;
}



menuIcon.addEventListener("click", openMenu)
modalClosebtn.addEventListener("click", modOpenClose);
viewModalBtn.addEventListener("click", modOpenClose);