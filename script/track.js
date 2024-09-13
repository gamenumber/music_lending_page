function initAudioVisualization(containerSelector, options = {}) {
    const {
        barCount = 50,
        barWidth = 2,
        barGap = 1,
        barColor = "#3b82f6",
        backgroundColor = "#1a202c",
        height = "16rem",
        updateInterval = 100,
    } = options;

    const container = document.querySelector(containerSelector);
    if (!container) return;

    // 컨테이너 스타일 설정
    Object.assign(container.style, {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        height: height,
        backgroundColor: backgroundColor,
        padding: "1rem",
        overflow: "hidden",
    });

    const bars = [];

    // 바 생성
    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement("div");
        Object.assign(bar.style, {
            width: `${barWidth}px`,
            backgroundColor: barColor,
            marginLeft: `${barGap}px`,
            marginRight: `${barGap}px`,
            transition: "height 0.1s ease-in-out",
        });
        container.appendChild(bar);
        bars.push(bar);
    }

    // 바 높이 업데이트 함수
    function updateBars() {
        bars.forEach((bar) => {
            const height = Math.random() * 100;
            bar.style.height = `${height}%`;
        });
    }

    // 애니메이션 시작
    const intervalId = setInterval(updateBars, updateInterval);

    // 정리 함수 반환 (필요시 애니메이션 중지에 사용)
    return () => clearInterval(intervalId);
}

// 페이지 로드 시 시각화 초기화
document.addEventListener("DOMContentLoaded", () => {
    initAudioVisualization(".track", {
        barCount: 60,
        barWidth: 3,
        barGap: 2,
        barColor: "#4ade80",
        backgroundColor: "#111827",
        height: "20rem",
        updateInterval: 80,
    });
});

// 외부에서 사용할 수 있도록 함수 노출
window.initAudioVisualization = initAudioVisualization;
