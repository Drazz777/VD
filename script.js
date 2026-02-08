document.addEventListener("DOMContentLoaded", () => {

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
        if (context.measureText(testLine).width > maxWidth && i > 0) {
            context.fillText(line, x, y + offsetY);
            line = words[i] + " ";
            offsetY += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y + offsetY);
}

/* ---------------- TEXT ANIMATION ---------------- */

let frameNumber = 0;

function getOpacity(start, fadeIn, hold, fadeOut) {
    const t = frameNumber - start;

    if (t < 0) return 0;
    if (t < fadeIn) return t / fadeIn;
    if (t < fadeIn + hold) return 1;
    if (t < fadeIn + hold + fadeOut)
        return 1 - (t - fadeIn - hold) / fadeOut;

    return 0;
}

function drawText() {
    const fontSize = Math.min(28, canvas.width / 18);
    const lineHeight = fontSize + 6;
    const maxWidth = canvas.width * 0.75;

    context.font = `${fontSize}px Comic Sans MS`;
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.shadowColor = "rgba(255, 150, 180, 0.3)";
    context.shadowBlur = 5;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const fadeIn = 120;
    // const hold = 900;   // long holds for long paragraphs
    const fadeOut = 120;

    // TEXT 1
    let o1 = getOpacity(0, fadeIn, 1000, fadeOut);
    if (o1 > 0) {
        context.fillStyle = `rgba(180,20,60,${o1})`;
        wrapText(
            "Bobooo back in 2023, on Propose Day, I asked you to marry me because when I looked at you, I didn’t just see my girlfriend, I saw my wife.",
            cx, cy, maxWidth, lineHeight
        );
    }

    let o11 = getOpacity(1300, fadeIn, 700, fadeOut);
    if (o11 > 0) {
        context.fillStyle = `rgba(180,20,60,${o11})`;
        wrapText(
            "That feeling hasn’t changed. If anything, it has only become more real.",
            cx, cy, maxWidth, lineHeight
        );
    }

    // TEXT 2
    let o2 = getOpacity(2100, fadeIn, 1000, fadeOut);
    if (o2 > 0) {
        context.fillStyle = `rgba(180,20,60,${o2})`;
        wrapText(
            "Since then we have been through so much together. We have shared so many happy moments, spent countless hours side by side and we have had lots of fights too.",
            cx, cy, maxWidth, lineHeight
        );
    }

    let o21 = getOpacity(3600, fadeIn, 500, fadeOut);
    if (o21 > 0) {
        context.fillStyle = `rgba(180,20,60,${o21})`;
        wrapText(
            "We have seen each other's good and bad side.",
            cx, cy, maxWidth, lineHeight
        );
    }

    let o22 = getOpacity(4400, fadeIn, 1000, fadeOut);
    if (o22 > 0) {
        context.fillStyle = `rgba(180,20,60,${o22})`;
        wrapText(
            "There are parts of each other we don’t always love and that’s okay. There is no perfect relationship, but there is always scope to be better.",
            cx, cy, maxWidth, lineHeight
        );
    }

    let o23 = getOpacity(5800, fadeIn, 1200, fadeOut);
    if (o23 > 0) {
        context.fillStyle = `rgba(180,20,60,${o23})`;
        wrapText(
            "We will learn, adjust, and become better for each other. I want us to grow together, fix what we can, accept what we can’t and always be with each other with patience and love.",
            cx, cy, maxWidth, lineHeight
        );
    }

    // TEXT 3
    let o3 = getOpacity(7300, fadeIn, 700, fadeOut);
    if (o3 > 0) {
        context.fillStyle = `rgba(180,20,60,${o3})`;
        wrapText(
            "I didn’t always dream of this life. But with you in it, I want this life more than anything.",
            cx, cy, maxWidth, lineHeight
        );
    }

    // TEXT 4
    let o4 = getOpacity(8300, fadeIn, 1000, fadeOut);
    if (o4 > 0) {
        context.fillStyle = `rgba(180,20,60,${o4})`;
        wrapText(
            "So today, I’m not asking something new. I’m asking you to choose me again. And I want us to keep choosing each other through everything no matter what.",
            cx, cy, maxWidth, lineHeight
        );
    }

    // FINAL TEXT (fade in and stay)
    let o5 = Math.min((frameNumber - 9600) / fadeIn, 1);
    if (o5 > 0) {
        context.fillStyle = `rgba(180,20,60,${o5})`;
        wrapText(
            "So boboo will you please be my Valentine, my best friend and my wife 🥺❤️",
            cx, cy, maxWidth, lineHeight
        );
    }

    context.shadowBlur = 0;
}

/* ---------------- MAIN LOOP ---------------- */

function draw() {
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

});
