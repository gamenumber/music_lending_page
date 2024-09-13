// 오디오 요소와 버튼 선택
const audioElement = document.querySelector(".track2 audio");
const playButton = document.querySelector(".track2 .play");
const stopButton = document.querySelector(".track2 .stop");
const tremoloButton = document.querySelector(".track2 .tremolo");

// Web Audio API 설정
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const source = audioContext.createMediaElementSource(audioElement);
const gainNode = audioContext.createGain();

source.connect(gainNode);
gainNode.connect(audioContext.destination);

let tremoloInterval;

// 트레몰로 효과 함수
function applyTremolo(element, frequency, depth) {
    let time = audioContext.currentTime;

    gainNode.gain.setValueAtTime(1, time);

    tremoloInterval = setInterval(() => {
        time += 0.1;
        gainNode.gain.linearRampToValueAtTime(1 - depth, time);
        time += 0.1;
        gainNode.gain.linearRampToValueAtTime(1, time);
    }, 1000 / frequency);
}

// 트레몰로 효과 중지 함수
function stopTremolo() {
    clearInterval(tremoloInterval);
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
}

// 재생 버튼 이벤트 리스너
playButton.addEventListener("click", () => {
    audioContext.resume().then(() => {
        audioElement.play();
    });
});

// 정지 버튼 이벤트 리스너
stopButton.addEventListener("click", () => {
    audioElement.pause();
    audioElement.currentTime = 0;
    stopTremolo();
});

// 트레몰로 버튼 이벤트 리스너
tremoloButton.addEventListener("click", () => {
    if (tremoloInterval) {
        stopTremolo();
        tremoloButton.textContent = "트레몰로 시작";
    } else {
        applyTremolo(audioElement, 4, 0.5); // 주파수 4Hz, 깊이 0.5
        tremoloButton.textContent = "트레몰로 중지";
    }
});
