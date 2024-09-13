function animateGradientWithAudio() {
    const track = document.querySelector(".track2");

    // 그라데이션 색상 배열
    const colors = [
        [62, 35, 255], // 파란색
        [60, 255, 60], // 녹색
        [255, 35, 98], // 빨간색
        [45, 175, 230], // 하늘색
        [255, 0, 255], // 마젠타
        [255, 128, 0], // 주황색
    ];

    let currentIndex = 0;
    let nextIndex = 1;
    let progress = 0;

    // 색상 전환 속도 (값이 작을수록 느려짐)
    const transitionSpeed = 0.001;

    // 오디오 요소 생성
    const audio = new Audio();
    let isPlaying = false;
    let audioLoaded = false;

    // 오디오 로딩
    function loadAudio() {
        audio.src = "../audio/nana.mp3";
        audio.load();
        audio.addEventListener("canplaythrough", () => {
            audioLoaded = true;
            console.log("Audio loaded successfully");
        });
        audio.addEventListener("error", (e) => {
            console.error("Error loading audio:", e);
            alert(
                "오디오 파일을 로드하는 데 문제가 발생했습니다. 콘솔에서 자세한 오류를 확인하세요."
            );
        });
    }

    function updateGradient() {
        const currentColor = colors[currentIndex];
        const nextColor = colors[nextIndex];

        // 부드러운 색상 전환을 위한 보간
        const r = Math.round(
            currentColor[0] * (1 - progress) + nextColor[0] * progress
        );
        const g = Math.round(
            currentColor[1] * (1 - progress) + nextColor[1] * progress
        );
        const b = Math.round(
            currentColor[2] * (1 - progress) + nextColor[2] * progress
        );

        // 그라데이션 적용
        track.style.background = `linear-gradient(45deg, 
            rgb(${r}, ${g}, ${b}), 
            rgb(${b}, ${r}, ${g}))`;

        // 진행 상태 업데이트
        progress += transitionSpeed;

        // 다음 색상으로 전환
        if (progress >= 1) {
            currentIndex = (currentIndex + 1) % colors.length;
            nextIndex = (nextIndex + 1) % colors.length;
            progress = 0;
        }

        requestAnimationFrame(updateGradient);
    }

    // 클릭 이벤트 처리
    track.addEventListener("click", () => {
        if (!audioLoaded) {
            alert(
                "오디오 파일을 아직 로딩 중입니다. 잠시 후 다시 시도해주세요."
            );
            return;
        }

        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
        } else {
            audio.play().catch((e) => {
                console.error("Audio play failed:", e);
                alert(
                    "오디오 재생에 실패했습니다. 콘솔에서 자세한 오류를 확인하세요."
                );
            });
            isPlaying = true;
        }
    });

    loadAudio();
    updateGradient();
}

// 페이지 로드 시 애니메이션 시작
window.addEventListener("load", animateGradientWithAudio);
