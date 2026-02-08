const canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

/* ---------------- HEART BACKGROUND ---------------- */

const heartsCount = 120;
const hearts = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < heartsCount; i++) {
    hearts.push({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        size: random(6, 14),
        speed: random(0.2, 0.6),
        opacity: random(0.2, 0.5)
    });
}

function drawHeart(x, y, size, opacity) {
    context.save();
    context.translate(x, y);
    context.scale(size / 20, size / 20);
    context.beginPath();
    context.moveTo(0, 0);
    context.bezierCurveTo(-10, -10, -20, 10, 0, 20);
    context.bezierCurveTo(20, 10, 10, -10, 0, 0);
    context.closePath();
    context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
    context.fill();
    context.restore();
}

function updateHearts() {
    hearts.forEach(h => {
        h.y -= h.speed;
        if (h.y < -20) {
            h.y = canvas.height + 20;
            h.x = random(0, canvas.width);
        }
    });
}

function drawHearts() {
    hearts.forEach(h => drawHeart(h.x, h.y, h.size, h.opacity));
}

/* ---------------- TEXT HELPERS ---------------- */

function wrapText(text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    let offsetY = 0;

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        const metrics = context.measureText(testLine);
        if (metrics.width > maxWidth && i > 0) {
            context.fillText(line, x, y + offsetY);
            line = words[i] + " ";
            offsetY += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y + offsetY);
}

/* ---------------- BUTTON ---------------- */

const button = document.getElementById("valentinesButton");
button.addEventListener("click", () => {
    if (button.textContent === "Please say Yes ❤") {
        button.textContent = "Thank You!!!";
    }
});

/* ---------------- TEXT ANIMATION ---------------- */

let frameNumber = 0;
let opacity = 0;
let secondOpacity = 0;
let thirdOpacity = 0;

function drawText() {
    const fontSize = Math.min(28, canvas.width / 18);
    const lineHeight = fontSize + 6;
    const maxWidth = canvas.width * 0.75;

    context.font = `${fontSize}px Comic Sans MS`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Softer glow
    context.shadowColor = "rgba(255, 150, 180, 0.4)";
    context.shadowBlur = 6;
    context.fillStyle = `rgba(180, 20, 60, ${opacity})`;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    if (frameNumber < 250) {
        wrapText(
            "Bobooo back in 2023, on Propose Day, I asked you to marry me because when I looked at you, I didn’t just see my girlfriend, I saw my wife.",
            cx,
            cy,
            maxWidth,
            lineHeight
        );
        opacity += 0.01;
    }

    if (frameNumber >= 250 && frameNumber < 500) opacity -= 0.01;
    if (frameNumber === 500) opacity = 0;

    if (frameNumber > 500 && frameNumber < 900) {
        wrapText(
            "Since then we have been through so much together. We have shared happy moments, countless hours together, fights, understanding, growth and acceptance.",
            cx,
            cy,
            maxWidth,
            lineHeight
        );
        opacity += 0.01;
    }

    if (frameNumber >= 900 && frameNumber < 1200) opacity -= 0.01;
    if (frameNumber === 1200) opacity = 0;

    if (frameNumber > 1200 && frameNumber < 1500) {
        wrapText(
            "I want us to grow together, fix what we can, accept what we can’t and always choose each other with patience and love.",
            cx,
            cy,
            maxWidth,
            lineHeight
        );
        opacity += 0.01;
    }

    if (frameNumber >= 1500 && frameNumber < 1800) opacity -= 0.01;
    if (frameNumber === 1800) opacity = 0;

    if (frameNumber > 1800 && frameNumber < 2100) {
        wrapText(
            "I didn’t always dream of this life. But with you in it, I want this life more than anything.",
            cx,
            cy,
            maxWidth,
            lineHeight
        );
        opacity += 0.01;
    }

    if (frameNumber >= 2100 && frameNumber < 2400) opacity -= 0.01;
    if (frameNumber === 2400) opacity = 0;

    if (frameNumber > 2400) {
        wrapText(
            "I love you so much {name}, more than all the time and space in the universe can contain.",
            cx,
            cy,
            maxWidth,
            lineHeight
        );
        opacity += 0.01;
    }

    if (frameNumber > 2700) {
        context.fillStyle = `rgba(180, 20, 60, ${secondOpacity})`;
        context.fillText(
            "Happy Valentine's Day ❤",
            cx,
            cy + 120
        );
        secondOpacity += 0.01;
        button.style.display = "block";
    }

    context.shadowBlur = 0;
}

/* ---------------- MAIN LOOP ---------------- */

function draw() {
    // White background
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawHearts();
    updateHearts();
    drawText();

    frameNumber++;
    requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

requestAnimationFrame(draw);
