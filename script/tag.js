const hashtags = [
    "#R&B",
    "#Rock",
    "#Jazz",
    "#Classical",
    "#HipHop",
    "#Electronic",
    "#Pop",
    "#Metal",
    "#Punk",
    "#Soul",
    "#R&B",
    "#Rock",
    "#Jazz",
    "#Classical",
    "#HipHop",
    "#Electronic",
    "#Pop",
    "#Reggae",
    "#R&B",
    "#Rock",
    "#Jazz",
    "#Classical",
    "#HipHop",
    "#Electronic",
    "#Pop",
    "#Metal",
    "#Punk",
    "#Soul",
    "#R&B",
    "#Rock",
    "#Jazz",
    "#Classical",
    "#HipHop",
    "#Electronic",
    "#Pop",
    "#Reggae",
];

const hashtagContainer = document.getElementById("hashtag-container");

function displayHashtags() {
    hashtagContainer.innerHTML = "";
    hashtags.forEach((tag, index) => {
        const span = document.createElement("span");
        span.textContent = tag;
        span.classList.add("hashtag");
        span.style.zIndex = index; // 각 태그의 z-index 설정
        hashtagContainer.appendChild(span);
        animateTag(span);
    });
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function displayHashtags() {
    hashtagContainer.innerHTML = "";
    hashtags.forEach((tag, index) => {
        const span = document.createElement("span");
        span.textContent = tag;
        span.classList.add("hashtag");
        span.style.zIndex = index; // 각 태그의 z-index 설정
        span.style.backgroundColor = getRandomColor(); // 랜덤 색상 설정
        hashtagContainer.appendChild(span);
        animateTag(span);
    });
}

function animateTag(tag) {
    const containerWidth = hashtagContainer.clientWidth;
    const containerHeight = hashtagContainer.clientHeight;
    let x = Math.random() * containerWidth; // Initial x position
    let y = Math.random() * containerHeight; // Initial y position
    let speedX = Math.random() * 4 + 2; // Increased speed
    let speedY = Math.random() * 4 + 2; // Increased speed

    function move() {
        x += speedX;
        y += speedY;

        // Check for collision with container boundaries
        if (x < 0) {
            x = 0;
            speedX = -speedX;
        } else if (x + tag.clientWidth > containerWidth) {
            x = containerWidth - tag.clientWidth;
            speedX = -speedX;
        }

        if (y < 0) {
            y = 0;
            speedY = -speedY;
        } else if (y + tag.clientHeight > containerHeight) {
            y = containerHeight - tag.clientHeight;
            speedY = -speedY;
        }

        tag.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(move);
    }

    move();
}

displayHashtags();
