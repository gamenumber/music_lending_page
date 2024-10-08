const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const inner = document.querySelector(".inner");

class RoundedRectangle {
    constructor(x, y, width, height, radius, color, speed) {
        Object.assign(this, { x, y, width, height, radius, color, speed });
    }

    draw() {
        ctx.beginPath();
        ctx.roundRect(this.x, this.y, this.width, this.height, this.radius);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.speed;
        if (this.x > canvas.width) {
            this.x = -this.width;
        }
    }
}

const rectangles = [];
const rectProps = { width: 80, height: 30, radius: 15, gap: 30 };

function createRectangles(row) {
    const rowCount = 3;
    const margin = 20;
    const availableHeight = canvas.height - margin * 2;
    const y = margin + (availableHeight / rowCount) * (row + 0.5);

    const speed = 2; // All rectangles move to the right
    const count =
        Math.ceil(canvas.width / (rectProps.width + rectProps.gap)) + 1;

    for (let i = 0; i < count; i++) {
        const x = i * (rectProps.width + rectProps.gap) - rectProps.width;
        const color = `rgb(${128 + Math.random() * 127}, 0, ${
            128 + Math.random() * 127
        })`;
        rectangles.push(
            new RoundedRectangle(
                x,
                y,
                rectProps.width,
                rectProps.height,
                rectProps.radius,
                color,
                speed
            )
        );
    }
}

function resizeCanvas() {
    canvas.width = inner.clientWidth;
    canvas.height = inner.clientHeight * 6;
    rectangles.length = 0;
    for (let i = 0; i < 3; i++) createRectangles(i);
}

(function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rectangles.forEach((rect) => {
        rect.update();
        rect.draw();
    });
    requestAnimationFrame(animate);
})();

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
