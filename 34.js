(() => {
   const canvas = document.getElementById("canvas");
   const ctx = canvas.getContext("2d");

   function init() {
      canvas.width = document.getElementById('snake').offsetWidth;
      canvas.height = document.getElementById('snake').offsetWidth;
   }
   init();

   const width = canvas.width;
   const height = canvas.width;
   const blockSize = 10;
   const widthInBlocks = width / blockSize;
   const heightInBlocks = height / blockSize;
   const score = 0;

   function drawBorder() {
      ctx.fillStyle = "#2B343A";
      ctx.fillRect(0, 0, width, blockSize);
      ctx.fillRect(0, height - blockSize, width, blockSize);
      ctx.fillRect(0, 0, blockSize, height);
      ctx.fillRect(width - blockSize, 0, blockSize, height);

   };

   function drawScore() {
      ctx.font = "20px Courier";
      ctx.fillStyle = "Black";
      ctx.textBaseLine = "top";
      ctx.textAlign = "left";
      ctx.fillText("Счет: " + score, blockSize, blockSize + 15);
   };

   function circle(x, y, radius, fillCircle) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      if (fillCircle) {
         ctx.fill();
      } else {
         ctx.stroke();
      }
   };

   function gameOver(requestId) {
      cancelAnimationFrame(requestId);
      ctx.font = "60px Courier";
      ctx.fillStyle = "Black";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText("Конец игры", width / 2, height / 2);
   };

   class Block {
      constructor(col, row) {
         this.col = col;
         this.row = row;
      };
      
      drawSquare(color) {
         let x = this.col * blockSize;
         let y = this.row * blockSize;
         ctx.fillStyle = color;
         ctx.fillRect(x, y, blockSize, blockSize);
      };

      drawCircle(color) {
         let centerX = this.col * blockSize + blockSize / 2;
         let centerY = this.row * blockSize + blockSize / 2;
         ctx.fillStyle = color;
         circle(centerX, centerY, blockSize / 2, true);
      };

      equal(otherBlock) {
         return this.col === otherBlock.col && this.row === otherBlock.row;
      };
   };

   class Snake {
      constructor() {
         this.segments = [
            new Block(7, 5),
            new Block(6, 5),
            new Block(5, 5),
         ];
         this.direction = "right";
         this.nextDirection = "right";
      };

      draw() {
         for (let i = 0; i < this.segments.length; i++) {
            this.segments[i].drawSquare("Blue");
         }
      };

      move() {
         const head = this.segments[0];
         let newHead;

         this.direction = this.nextDirection;

         if (this.direction === "right") {
            newHead = new Block(head.col + 1, head.row);
         } else if (this.direction === "down") {
            newHead = new Block(head.col, head.row + 1);
         } else if (this.direction === "left") {
            newHead = new Block(head.col - 1, head.row);
         } else if (this.direction === "up") {
            newHead = new Block(head.col, head.row - 1);
         }

         if (this.checkCollision(newHead)) {
            gameOver();
            return;
         }

         this.segments.unshift(newHead);

         if (newHead.equal(apple.position)) {
            score++;
            apple.move();
         } else {
            this.segments.pop();
         }
      };
   }

   const apple = new Block(2, 5);
   const head = new Block(3, 5);
   const snake = new Snake();

   function loop() {
      canvas.width |= 0;
      drawBorder();
      drawScore();
      snake.draw();
      head.equal(apple);
      head.drawSquare("LightBlue");
      apple.drawCircle("LightGreen");
      let requestId = requestAnimationFrame(loop);
      //gameOver(requestId);
   }
   loop();


   window.addEventListener(`resize`, init);

})();
