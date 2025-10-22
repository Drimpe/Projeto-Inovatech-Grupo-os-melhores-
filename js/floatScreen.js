export default function floatScreen() {
   // Está "funcionando", mas tem um bug de criar barras de scroll horizontais e verticais. Vou corrigir isso outra hora...
   
   function floatScreen(event) {
      let [X, Y] = [event.clientX, event.clientY];
      let rightDistance = window.innerWidth - outputLibras.offsetLeft - outputLibras.offsetWidth;

      // console.log(rightDistance);
      outputLibras.style.top = `${Y}px`;
      outputLibras.style.left = `${X}px`;
      
      // if (rightDistance > 10){
      // }
      // else {
      //    console.log(X);
      //    // outputLibras.style.left = `${rightDistance}px`;
      //    // outputLibras.style.left = `${X + 10}px`;
      // }     


      if (X == window.innerWidth - outputLibras.offsetWidth) {
         window.alert("TEST");
      }
   }

   function mouseDown() {
      document.body.addEventListener('mousemove', floatScreen);
      document.body.addEventListener('mouseup', mouseUp);
      outputLibras.classList.add('float-mode');
   }

   function mouseUp() {
      document.body.removeEventListener('mousemove', floatScreen);
      document.body.addEventListener('mouseup', mouseUp);
      // outputLibras.classList.remove('float-mode');
   }

   const outputLibras = document.querySelector('.output-libras-section');
   outputLibras.addEventListener('mousedown', mouseDown);
} 
