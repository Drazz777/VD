function getOpacity(start, fadeIn, hold, fadeOut) {
    const t = frameNumber - start;

    if (t < 0) return 0;
    if (t < fadeIn) return t / fadeIn;                     // fade in
    if (t < fadeIn + hold) return 1;                       // hold
    if (t < fadeIn + hold + fadeOut)
        return 1 - (t - fadeIn - hold) / fadeOut;          // fade out

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
    const hold = 240;
    const fadeOut = 120;

    // TEXT 1
    let o1 = getOpacity(0, fadeIn, hold, fadeOut);
    if (o1 > 0) {
        context.fillStyle = `rgba(180,20,60,${o1})`;
        wrapText(
            "Bobooo back in 2023, on Propose Day, I asked you to marry me because when I looked at you, I didn’t just see my girlfriend, I saw my wife.",
            cx, cy, maxWidth, lineHeight
        );
    }

    // TEXT 2
    let o2 = getOpacity(600, fadeIn, hold, fadeOut);
    if (o2 > 0) {
        context.fillStyle = `rgba(180,20,60,${o2})`;
        wrapText(
            "Since then we have been through so much together. We have shared happy moments, countless hours together, fights, understanding, growth and acceptance.",
            cx, cy, maxWidth, lineHeight
        );
    }

    // TEXT 3
    let o3 = getOpacity(1200, fadeIn, hold, fadeOut);
    if (o3 > 0) {
        context.fillStyle = `rgba(180,20,60,${o3})`;
        wrapText(
            "I want us to grow together, fix what we can, accept what we can’t and always choose each other with patience and love.",
            cx, cy, maxWidth, lineHeight
        );
    }

    // TEXT 4
    let o4 = getOpacity(1800, fadeIn, hold, fadeOut);
    if (o4 > 0) {
        context.fillStyle = `rgba(180,20,60,${o4})`;
        wrapText(
            "I didn’t always dream of this life. But with you in it, I want this life more than anything.",
            cx, cy, maxWidth, lineHeight
        );
    }

    // FINAL TEXT (fade in and stay forever)
    let o5 = Math.min((frameNumber - 2400) / fadeIn, 1);
    if (o5 > 0) {
        context.fillStyle = `rgba(180,20,60,${o5})`;
        wrapText(
            "So boboo will you please be my Valentine, my best friend and my wife 🥺❤️",
            cx, cy, maxWidth, lineHeight
        );
    }

    context.shadowBlur = 0;
}
