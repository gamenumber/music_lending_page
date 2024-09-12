const tabContent = document.querySelector(".tab-content");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const tabCount = 5; // 탭의 총 개수
let currentTab = 0;

function slide(direction) {
    currentTab += direction;
    if (currentTab < 0) currentTab = tabCount - 1;
    if (currentTab >= tabCount) currentTab = 0;
    tabContent.style.transform = `translateX(${-currentTab * 300}px)`;
}

prevBtn.addEventListener("click", () => slide(-1));
nextBtn.addEventListener("click", () => slide(1));
