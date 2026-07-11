// Hide loading screen after 2 seconds
window.onload = function () {
    setTimeout(() => {
        const loading = document.getElementById("loading");
        if (loading) loading.style.display = "none";
    }, 2000);
};

// Hide all sections except home
function hideAllPages() {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.add("hidden"));

    const home = document.getElementById("home");
    if (home) home.classList.remove("hidden");
}

// Open Gift → Story
function openGift() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("story").classList.remove("hidden");

    const music = document.getElementById("music");
    if (music) {
        music.play().catch(() => {
            console.log("Music will play after user interaction.");
        });
    }
}

// Story → Gallery
function showGallery() {
    document.getElementById("story").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");
}

// Gallery → Quiz
function showQuiz() {
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
}

// Quiz → Letter
function showLetter() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
}

// Letter → Final
function finalPage() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");

    launchFireworks();
}

// Quiz score
let score = 0;

function correct(btn) {
    if (!btn.disabled) {
        score++;
        btn.style.background = "#00c853";
        btn.style.color = "white";
    }
    disableButtons(btn.parentElement);
}

function wrong(btn) {
    btn.style.background = "#d50000";
    btn.style.color = "white";
    disableButtons(btn.parentElement);
}

function disableButtons(parent) {
    const buttons = parent.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Simple Fireworks
function launchFireworks() {

    const final = document.getElementById("fireworks");

    for (let i = 0; i < 40; i++) {

        const spark = document.createElement("div");

        spark.style.position = "fixed";
        spark.style.width = "8px";
        spark.style.height = "8px";
        spark.style.borderRadius = "50%";
        spark.style.background = "gold";
        spark.style.left = Math.random() * window.innerWidth + "px";
        spark.style.top = Math.random() * window.innerHeight + "px";
        spark.style.opacity = "1";
        spark.style.transition = "all 2s ease";

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.style.transform =
                `translate(${Math.random()*300-150}px,${Math.random()*300-150}px)`;
            spark.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            spark.remove();
        }, 2200);
    }

    if (final) {
        final.innerHTML =
            `<h2 style="color:gold;margin-top:20px;">
            🎉 Congratulations! 🎉<br>
            You completed the surprise!<br><br>
            ❤️ Happy Birthday Hero ❤️<br>
            I Love You Forever 💖
            </h2>`;
    }
}

// Initialize
hideAllPages();