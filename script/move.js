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
        if (this.speed > 0 && this.x > canvas.width) {
            this.x = -this.width;
        } else if (this.speed < 0 && this.x + this.width < 0) {
            this.x = canvas.width;
        }
    }
}

const rectangles = [];
const rectProps = { width: 80, height: 30, radius: 15, gap: 30 };

function createRectangles(row, direction) {
    const y = 10 + ((canvas.height - 20) / 12) * (row + 1);
    const speed = direction === "left" ? -2 : 2;
    const count =
        Math.ceil(canvas.width / (rectProps.width + rectProps.gap)) + 1;

    for (let i = 0; i < count; i++) {
        const x =
            i * (rectProps.width + rectProps.gap) -
            (direction === "left" ? 0 : rectProps.width);
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
    for (let i = 0; i < 12; i++)
        createRectangles(i, i % 2 === 0 ? "left" : "right");
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
