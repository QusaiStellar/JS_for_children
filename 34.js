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
   let score = 0;



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
      clearInterval(requestId);
      ctx.font = "60px Courier";
      ctx.fillStyle = "Black";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText("Конец игры", width / 2, height / 2);
   };

   let keyActions = {
      13: "enter",
      16: "shift",
      18: "alt",
      32: "stop",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
   };

   $("body").keydown(function (event) {
      newDirection = keyActions[event.keyCode];
      if (newDirection !== undefined) {
         snake.setDirection(newDirection);
      }
   });

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

      checkCollision(head) {

         console.log(head.col);
         console.log(head.row);
         let leftCollision = (head.col === 0);
         let topCollision = (head.row === 0);
         let rightCollison = (head.row === width);
         let bottomCollision = (head.col === height);

         let wallCollison = leftCollision || topCollision || rightCollison || bottomCollision;
         let selfCollision = false;

         for (let i = 0; i < this.segments.length; i++) {
            if (head.equal(this.segments[i])) {
               selfCollision = true;
            }
         }
         return wallCollison || selfCollision;

      };

      setDirection() {
         if (this.direction === "up" && newDirection === "down") {
            return;
         } else if (this.direction === "right" && newDirection === "left") {
            return;
         } else if (this.direction === "down" && newDirection === "up") {
            return;
         } else if (this.direction === "left" && newDirection === "right") {
            return;
         }

         this.nextDirection = newDirection;
      };

      move() {
         let head = this.segments[0];
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

   class Apple {
      constructor() {
         this.position = new Block(10, 100);
      };

      draw() {
         this.position.drawCircle("Black");
      };

      move() {
         let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
         let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
         this.position = new Block(randomCol, randomRow);
      };

   };

   let apple = new Apple();
   let snake = new Snake();
   apple.move();


   let requestId = setInterval(function () {
      canvas.width |= 0;
      drawBorder();
      drawScore();
      apple.draw();
      snake.draw();
      snake.move();
   }, 100);



   window.addEventListener(`resize`, init);

})();
