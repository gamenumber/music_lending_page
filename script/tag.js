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
];

const hashtagContainer = document.getElementById("hashtag-container");

function displayHashtags() {
    hashtagContainer.innerHTML = "";
    hashtags.forEach((tag, index) => {
        const span = document.createElement("span");
        const color = getRandomColor(); // 랜덤 색상 생성
        span.textContent = tag;
        span.classList.add("hashtag");
        span.style.zIndex = index; // 각 태그의 z-index 설정
        span.style.backgroundColor = color; // 랜덤 배경색 적용
        span.style.color = "white"; // 기본 텍스트 색상은 흰색

        // 호버 시에만 네온 및 glow 효과 적용 + 텍스트 색상 변경
        span.addEventListener("mouseover", function () {
            span.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
            span.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`;
            // span.style.color = `0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`;
            span.style.backgroundColor = "#FFFFFF"; // 배경색을 흰색으로 변경
        });

        // 호버가 끝났을 때 네온 효과와 색상 원래대로 복구
        span.addEventListener("mouseout", function () {
            span.style.textShadow = "";
            span.style.boxShadow = "";
            span.style.color = "white"; // 기본 텍스트 색상으로 복구
            span.style.backgroundColor = color; // 랜덤 배경색으로 복구
        });

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

function animateTag(tag) {
    const containerWidth = hashtagContainer.clientWidth;
    const containerHeight = hashtagContainer.clientHeight;
    let x = Math.random() * containerWidth; // Initial x position
    let y = Math.random() * containerHeight; // Initial y position
    let speedX = Math.random() * 8 + 2; // Increased speed
    let speedY = Math.random() * 8 + 2; // Increased speed

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
