  function SpawnDots(container){
       container.innerHTML =  `<canvas id="dotCanvas"></canvas>`;
       var canvas = document.querySelector("#dotCanvas");
       const ctx = canvas.getContext('2d');
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;

       const dots = [];
       const image = new Image();
       image.src = './assets/imgs/plus.png'; // Replace with your image URL

       class Dot {
           constructor(x, y) {
               this.x = x;
               this.y = y;
               this.size =0;
               this.opacity = 1;
               this.growth = Math.random() * 2 + 1;
               this.fade = Math.random() * 0.002 + 0.01;
               this.rotation = 0;
               this.rotationSpeed = Math.random() * 0.05 + 0.01;
           }

           update() {
               this.size += this.growth;
               this.opacity -= this.fade;
               if(this.opacity < 0){
                 this.opacity = 0;
               }
               this.rotation += this.rotationSpeed;
           }

           draw() {
               ctx.save();
               ctx.translate(this.x, this.y);
               ctx.rotate(this.rotation);
               ctx.globalAlpha = this.opacity;
               ctx.drawImage(image, -this.size / 2, -this.size / 2, this.size, this.size);
               ctx.restore();
           }

           isFaded() {

              return this.opacity <= 0;
           }
       }

       function spawnDots() {
           for (let i = 0; i < 10; i++) {
               const x = Math.random() * canvas.width;
               const y = Math.random() * canvas.height;
               dots.push(new Dot(x, y));
           }
       }

       function animate() {
           ctx.clearRect(0, 0, canvas.width, canvas.height);

           dots.forEach((dot, index) => {
               dot.update();
               dot.draw();
               if (dot.isFaded()) {

                  dots.splice(index, 1);
               }
           });

           if (dots.length < 10) {
               spawnDots();
           }

           requestAnimationFrame(animate);
       }

       image.onload = () => {
           spawnDots();
           animate();
       };

       window.addEventListener('resize', () => {
           canvas.width = window.innerWidth;
           canvas.height = window.innerHeight;
       });

}
