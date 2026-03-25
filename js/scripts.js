// ==========================
// Galeria filtrável + DOM
// ==========================
const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // ativa botão clicado
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        // mostra/esconde itens
        items.forEach(item => {
            item.classList.toggle(
                "hidden",
                filter !== "all" && !item.classList.contains(filter)
            );
        });
    });
});

// ==========================
// MODAL COM NAVEGAÇÃO
// ==========================
const modal = new bootstrap.Modal(document.getElementById("imageModal"));
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

// pega apenas imagens visíveis
function getVisibleImages() {
    return Array.from(document.querySelectorAll(".gallery-item:not(.hidden) .gallery-img"));
}

let currentIndex = 0;
let currentImages = [];

// abre modal
document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {

        currentImages = getVisibleImages();
        currentIndex = currentImages.indexOf(img);

        updateModal();
        modal.show();
    });
});

// atualiza modal
function updateModal() {
    const img = currentImages[currentIndex];

    modalImage.src = img.src;

    const card = img.closest(".card");
    const title = card.querySelector("h5").textContent;
    const text = card.querySelector("p").textContent;

    modalCaption.textContent = `${title} — ${text}`;
}

// navegação
function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateModal();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateModal();
}



// ==========================
// BOTÕES
// ==========================
document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);

// ==========================
// DARK MODE
// ==========================
const toggle = document.getElementById("themeToggle");
const container = document.querySelector(".leaves-container");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    container.innerHTML = "";

    // muda ícone 🌙/☀️
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ==========================
// Folha e chuva caindo #criativdade
// ==========================
function createLeaf() {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = (5 + Math.random() * 5) + "s";

    container.appendChild(leaf);
    setTimeout(() => leaf.remove(), 10000);
}

function createRain() {
    const drop = document.createElement("div");
    drop.classList.add("rain-drop");

    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = (1 + Math.random()) + "s";

    container.appendChild(drop);
    setTimeout(() => drop.remove(), 2000);
}

// Alterna automaticamente 
setInterval(() => {
    const isDark = document.body.classList.contains("dark");

    if (isDark) {
        createRain();
    } else {
        createLeaf();
    }
}, 300);