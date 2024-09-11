const hashtags = [
    "#Rock",
    "#Jazz",
    "#Classical",
    "#HipHop",
    "#Electronic",
    "#Pop",
    "#Reggae",
    "#Blues",
    "#Country",
    "#Folk",
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
    "#Blues",
    "#Country",
    "#Folk",
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
    "#Blues",
    "#Country",
    "#Folk",
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
    "#Blues",
    "#Country",
    "#Folk",
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
    "#Blues",
    "#Country",
    "#Folk",
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

function animateTag(tag) {
    const containerWidth = hashtagContainer.clientWidth;
    const containerHeight = hashtagContainer.clientHeight;
    let x = Math.random() * containerWidth * 0.1; // 왼쪽 대각선 위에서 생성되도록 x 초기값 조정
    let y = Math.random() * containerHeight * 0.1; // 왼쪽 대각선 위에서 생성되도록 y 초기값 조정
    let speedX = Math.random() * 2 + 1;
    let speedY = Math.random() * 2 + 1;

    function move() {
        x += speedX;
        y += speedY;

        if (x < 0 || x + tag.clientWidth > containerWidth) {
            speedX = -speedX;
            x = Math.max(0, Math.min(x, containerWidth - tag.clientWidth));
        }
        if (y < 0 || y + tag.clientHeight > containerHeight) {
            speedY = -speedY;
            y = Math.max(0, Math.min(y, containerHeight - tag.clientHeight));
        }

        tag.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(move);
    }

    move();
}

displayHashtags();
