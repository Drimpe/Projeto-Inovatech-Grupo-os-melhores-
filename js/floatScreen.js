export default function floatScreen() {
   // Está "funcionando", mas tem um bug de criar barras de scroll horizontais e verticais. Vou corrigir isso outra hora...
   
   function floatScreen(event) {
      console.log(event);
      let [X, Y] = [event.clientX, event.clientY];
      
      console.log(X);
      if (X >= (window.innerWidth - outputLibras.offsetWidth)) {
         outputLibras.style.left = `${window.innerWidth - outputLibras.offsetWidth}px`;
      }
      else {
         outputLibras.style.left = `${X - 20}px`;
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
