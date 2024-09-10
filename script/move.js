const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Ellipse {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }

    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.PI / 2);
        ctx.ellipse(0, 0, this.radius, this.radius, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update() {
        // this.speed = 10;
        this.x += this.speed;
        if (this.speed > 0 && this.x > canvas.width) {
            this.x = 0;
        } else if (this.speed < 0 && this.x < 0) {
            this.x = canvas.width;
        }
    }
}

const ellipses = [];
const ellipseRadius = 20; // 모든 타원의 고정 크기
const ellipseGap = 10; // 타원 사이의 간격

function createEllipses(row, direction) {
    const yPos = (canvas.height / 4) * row;
    const speed = direction === "left" ? -3 : 3;
    const count =
        Math.ceil(canvas.width / (ellipseRadius * 2 + ellipseGap)) + 1;

    for (let i = 0; i < count; i++) {
        const x =
            i * (ellipseRadius * 2 + ellipseGap) -
            (direction === "left" ? 0 : ellipseRadius * 2);
        const color = `rgb(${128 + Math.random() * 127}, 0, ${
            128 + Math.random() * 127
        })`;
        ellipses.push(new Ellipse(x, yPos, ellipseRadius, color, speed));
    }
}

createEllipses(1, "left");
createEllipses(2, "right");
createEllipses(3, "left");

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const ellipse of ellipses) {
        ellipse.update();
        ellipse.draw();
    }

    requestAnimationFrame(animate);
}

animate();
