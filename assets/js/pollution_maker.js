const pcanvas = document.getElementById('emit_canvas');
const ptx = pcanvas.getContext('2d');
pcanvas.width = window.innerWidth;
pcanvas.height = window.innerHeight;

        class Pollute {
            constructor(x, y, size, speedX, speedY, color) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.speedX = speedX;
                this.speedY = speedY;
                this.color = color;
            }

            update() {
                // this.x += this.speedX;
                this.y += this.speedY;

                // Reset position if the particle moves out of bounds
                if (this.y > pcanvas.height || this.y < 0) {
                    // this.x = 2 * pcanvas.width;
                    this.y = pcanvas.height * -1;
                }
            }

            draw() {
                ptx.beginPath();
                ptx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ptx.fillStyle = this.color;
                ptx.fill();
            }
        }

        const particles = [];
        const numPollutes = 300;

        for (let i = 0; i < numPollutes; i++) {
            const x = Math.random() * pcanvas.width;
            const y = Math.random() * pcanvas.height + 2;
            const size = Math.random() * 2 + 1;
            const speedX = Math.random() * 1 - 0.5;
            const speedY = Math.random() * 1 - 0.5;
            const color = `rgba(10,10,10, 0.1)`;
            particles.push(new Pollute(x, y, size, speedX, speedY, color));
        }

        function animate_p() {
            // ptx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ptx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate_p);
        }

        animate_p();
