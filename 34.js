(() => {
   const canvas = document.getElementById("canvas");
   const ctx = canvas.getContext("2d");

   function init() {
      canvas.width = document.getElementById('snake').offsetWidth;
      canvas.height = document.getElementById('snake').offsetHeight;
   }
   init();
})();
