export default function floatScreen() {
   const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

   if (isDesktop) {
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
   
   
      function floatConfirm () {
         const noConfirm = document.querySelector('.confirm-button.no');
         const yesConfirm = document.querySelector('.confirm-button.yes');

         noConfirm.addEventListener('click', () => {
            const floatPopUp = document.querySelector('.float-popup-confirm');
            floatPopUp.classList.add('hide');
            setTimeout(() => {
               floatPopUp.remove();
            }, 500);
         })
      }

      function createPopUp() {
         const floatPopUp = document.createElement('div');
         floatPopUp.classList.add('float-popup-confirm', 'show');
         floatPopUp.innerHTML = `
         <div class="float-confirmBox">
            <h1>Tornar a janela de saída flutuante?</h1>
            <div class="float-confirm-buttons">
               <button class="confirm-button yes">Sim</button>
               <button class="confirm-button no">Não</button>
            </div>
         </div>
         `;
   
         document.body.appendChild(floatPopUp);
         floatConfirm();
      }
   
      const floatButton = document.querySelector('.float-button');
   
      floatButton.addEventListener('click', createPopUp);
      
   }

   
} 
