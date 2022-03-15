(() => {
   const canvas = document.getElementById("canvas");
   const ctx = canvas.getContext("2d");

   function init() {
      canvas.width = document.getElementById('snake').offsetWidth;
      canvas.height = document.getElementById('snake').offsetHeight;
   }
   init();

   const width = canvas.width;
   const height = canvas.height;
   const blockSize = 10;
   const widthInBlocks = width / blockSize;
   const heightInBlocks = height / blockSize;
   const score = 0;

   function drawBorder() {
      ctx.fillStyle = "Grey";
      ctx.fillRect(0, 0, width, blockSize);
      ctx.fillRect(0, height - blockSize, width, blockSize);
      ctx.fillRect(0, 0, blockSize, height);
      ctx.fillRect(width - blockSize, 0, blockSize, height);

   };

   function drawScore() {
      ctx.font = "20px Courier";
      ctx.fillStyle = "Black";
      ctx.textAlign = "left";
      ctx.fillText("Счет: " + score, blockSize, blockSize + 15);
   }

   function gameOver(requestId) {
      cancelAnimationFrame(requestId);
      ctx.font = "60px Courier";
      ctx.fillStyle = "Black";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText("Конец игры", width / 2, height / 2);
   }

   function loop() {
      canvas.width |= 0;
      drawBorder();
      drawScore();
      let requestId = requestAnimationFrame(loop);
      //gameOver(requestId);
   }
   loop();


   window.addEventListener(`resize`, init);

})();
