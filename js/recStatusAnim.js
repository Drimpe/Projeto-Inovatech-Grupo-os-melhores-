export default function initStatusAnim() {

   const recStatus = document.querySelector('.rec-status');

   if (recStatus.classList.contains('waiting')){
      const statusAnim = document.querySelector('#status-anim');
      
      if (statusAnim) {
         setInterval(() => {
            if (statusAnim.textContent != '...') {
               statusAnim.textContent += '.';
            }
            else {
               statusAnim.textContent = '';
            }
         }, 500);
      }
   }
}
