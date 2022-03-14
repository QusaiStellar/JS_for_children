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
      ctx.textBaseLine = "top";
      ctx.fillText("Hellp", 20, 20);
   }

   function loop() {
      canvas.width |= 0;
      drawBorder();
      drawScore();
      requestAnimationFrame(loop);
   }
   loop();

   window.addEventListener(`resize`, init);

})();
