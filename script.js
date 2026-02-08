var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;

// White + Red + Pink palette
var colorrange = [0, 330, 0];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);

        // White stars have zero saturation, red/pink retain saturation
        context.fillStyle =
            "hsla(" +
            star.hue +
            ", " +
            (star.hue === 0 ? 0 : star.sat) +
            "%, 95%, " +
            star.opacity +
            ")";

        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
    if (button.textContent === "Click Me! ❤") {
        button.textContent = "loading...";
        fetch("send_mail.php")
            .then((response) => {
                if (response.ok) {
                    button.textContent = "Check Your Email 🙃";
                } else {
                    button.textContent = "Error 😞";
                }
            })
            .catch(() => {
                button.textContent = "Error 😞";
            });
    }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";

    // Romantic pink glow
    context.shadowColor = "rgba(255, 105, 180, 0.9)";
    context.shadowBlur = 12;

    if (frameNumber < 250) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;
        context.fillText(
            "everyday day I cannot believe how lucky I am",
            canvas.width / 2,
            canvas.height / 2
        );
        opacity += 0.01;
    }

    if (frameNumber >= 250 && frameNumber < 500) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;
        context.fillText(
            "everyday day I cannot believe how lucky I am",
            canvas.width / 2,
            canvas.height / 2
        );
        opacity -= 0.01;
    }

    if (frameNumber === 500) opacity = 0;

    if (frameNumber > 500 && frameNumber < 750) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(
                ["amongst trillions and trillions of stars,", "over billions of years"],
                canvas.width / 2,
                canvas.height / 2,
                fontSize,
                lineHeight
            );
        } else {
            context.fillText(
                "amongst trillions and trillions of stars, over billions of years",
                canvas.width / 2,
