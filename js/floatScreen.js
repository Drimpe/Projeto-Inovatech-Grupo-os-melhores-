export default function floatScreen() {
   
   function floatScreen(event) {
      console.log(event);
      let [X, Y] = [event.clientX, event.clientY];
      
      
      if (X >= (window.innerWidth - outputLibras.offsetWidth)) {
         outputLibras.style.left = `${window.innerWidth - outputLibras.offsetWidth}px`;
      }
      else {
         outputLibras.style.left = `${X - 20}px`;
         outputLibras.style.top = `${Y - 20}px`;
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
   // outputLibras.addEventListener('mousedown', mouseDown);

   function createPopUp() {
      const popupDiv = document.createElement('div');
      

   }


   const floatButton = document.querySelector('.float-button');

   floatButton.addEventListener('click', createPopUp);
} 
