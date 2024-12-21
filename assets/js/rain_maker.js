
    const canvas = document.getElementById('rain_canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 500;

    class Raindrop {
        constructor(x, y, length, speed, color) {
            this.x = x;
            this.y = y;
            this.length = length;
            this.speed = speed;
            this.color = color;
        }

        fall() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = Math.random() * -canvas.height;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.length);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }

    const raindrops = [];
    const numRaindrops = 100;

    for (let i = 0; i < numRaindrops; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height - canvas.height;
        const length = Math.random() * 20 + 10;
        const speed = Math.random() * 4 + 2;
        const color = 'rgba(173, 216, 230, 0.7)';
        raindrops.push(new Raindrop(x, y, length, speed, color));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        raindrops.forEach(raindrop => {
            raindrop.fall();
            raindrop.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
