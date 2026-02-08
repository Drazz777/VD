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
    if (button.textContent === "Please say Yes ❤") {
        button.textContent = "Thank You!!!";
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
            "Bobooo back in 2023, on Propose Day, I asked you to marry me because when I looked at you, I didn’t just see my girlfriend, I saw my wife. That feeling hasn’t changed. If anything, it has only become more real.",
            canvas.width / 2,
            canvas.height / 2
        );
        opacity += 0.01;
    }

    if (frameNumber >= 250 && frameNumber < 500) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;
        context.fillText(
            "Bobooo back in 2023, on Propose Day, I asked you to marry me because when I looked at you, I didn’t just see my girlfriend, I saw my wife. That feeling hasn’t changed. If anything, it has only become more real.",
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
                ["Since then we have been through so much together. We have shared so many happy moments, spent countless hours side by side and we have had lots of fights too. We have seen each other's good and bad side. There are parts of each other we don’t always love and that’s okay. There is no perfect relationship, but there is always scope to be better."],
                canvas.width / 2,
                canvas.height / 2,
                fontSize,
                lineHeight
            );
        } else {
            context.fillText(
                "Since then we have been through so much together. We have shared so many happy moments, spent countless hours side by side and we have had lots of fights too. We have seen each other's good and bad side. There are parts of each other we don’t always love and that’s okay. There is no perfect relationship, but there is always scope to be better.",
                canvas.width / 2,
                canvas.height / 2
            );
        }
        opacity += 0.01;
    }

    if (frameNumber >= 750 && frameNumber < 1000) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(
                ["Since then we have been through so much together. We have shared so many happy moments, spent countless hours side by side and we have had lots of fights too. We have seen each other's good and bad side. There are parts of each other we don’t always love and that’s okay. There is no perfect relationship, but there is always scope to be better."],
                canvas.width / 2,
                canvas.height / 2,
                fontSize,
                lineHeight
            );
        } else {
            context.fillText(
                "Since then we have been through so much together. We have shared so many happy moments, spent countless hours side by side and we have had lots of fights too. We have seen each other's good and bad side. There are parts of each other we don’t always love and that’s okay. There is no perfect relationship, but there is always scope to be better.",
                canvas.width / 2,
                canvas.height / 2
            );
        }
        opacity -= 0.01;
    }

    if (frameNumber === 1000) opacity = 0;

    if (frameNumber > 1000 && frameNumber < 1250) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;
        context.fillText(
            "I want us to grow together, fix what we can, accept what we can’t and always be with each other with patience and love.",
            canvas.width / 2,
            canvas.height / 2
        );
        opacity += 0.01;
    }

    if (frameNumber >= 1250 && frameNumber < 1500) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;
        context.fillText(
            "I want us to grow together, fix what we can, accept what we can’t and always be with each other with patience and love.",
            canvas.width / 2,
            canvas.height / 2
        );
        opacity -= 0.01;
    }

    if (frameNumber === 1500) opacity = 0;

    if (frameNumber > 1500 && frameNumber < 1750) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;
        context.fillText(
            "I want us to grow together, fix what we can, accept what we can’t and always be with each other with patience and love.",
            canvas.width / 2,
            canvas.height / 2
        );
        opacity += 0.01;
    }

    if (frameNumber >= 1750 && frameNumber < 2000) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;
        context.fillText(
            "I want us to grow together, fix what we can, accept what we can’t and always be with each other with patience and love.",
            canvas.width / 2,
            canvas.height / 2
        );
        opacity -= 0.01;
    }

    if (frameNumber === 2000) opacity = 0;

    if (frameNumber > 2000 && frameNumber < 2250) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(
                ["I didn’t always dream of this life. But with you in it, I want this life more than anything."],
                canvas.width / 2,
                canvas.height / 2,
                fontSize,
                lineHeight
            );
        } else {
            context.fillText(
                "I didn’t always dream of this life. But with you in it, I want this life more than anything.",
                canvas.width / 2,
                canvas.height / 2
            );
        }
        opacity += 0.01;
    }

    if (frameNumber >= 2250 && frameNumber < 2500) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(
                ["I didn’t always dream of this life. But with you in it, I want this life more than anything."],
                canvas.width / 2,
                canvas.height / 2,
                fontSize,
                lineHeight
            );
        } else {
            context.fillText(
                "I didn’t always dream of this life. But with you in it, I want this life more than anything.",
                canvas.width / 2,
                canvas.height / 2
            );
        }
        opacity -= 0.01;
    }

    if (frameNumber === 2500) opacity = 0;

    if (frameNumber > 2500) {
        context.fillStyle = `rgba(220, 20, 60, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(
                ["I love you so much {name}, more than", "all the time and space in the universe can contain"],
                canvas.width / 2,
                canvas.height / 2,
                fontSize,
                lineHeight
            );
        } else {
            context.fillText(
                "I love you so much {name}, more than all the time and space in the universe can contain",
                canvas.width / 2,
                canvas.height / 2
            );
        }
        opacity += 0.01;
    }

    if (frameNumber >= 2750) {
        context.fillStyle = `rgba(220, 20, 60, ${secondOpacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(
                ["and I can't wait to spend all the time in", "the world to share that love with you!"],
                canvas.width / 2,
                canvas.height / 2 + 60,
                fontSize,
                lineHeight
            );
        } else {
            context.fillText(
                "and I can't wait to spend all the time in the world to share that love with you!",
                canvas.width / 2,
                canvas.height / 2 + 50
            );
        }
        secondOpacity += 0.01;
    }

    if (frameNumber >= 3000) {
        context.fillStyle = `rgba(220, 20, 60, ${thirdOpacity})`;
        context.fillText(
            "Happy Valentine's Day <3",
            canvas.width / 2,
            canvas.height / 2 + 120
        );
        thirdOpacity += 0.01;
        button.style.display = "block";
    }

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
}

function draw() {
    // Warm romantic background fade
    context.fillStyle = "rgba(20, 0, 10, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawStars();
    updateStars();
    drawText();

    frameNumber++;
    requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

requestAnimationFrame(draw);
