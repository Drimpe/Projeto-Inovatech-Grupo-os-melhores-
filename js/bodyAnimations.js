export default function bodyAnimation() {
   window.onload = () => {
      const body = document.querySelector('body');
      const recordingSection = document.querySelector('.recording-section');
      const librasSection = document.querySelector('.output-libras-section');
      setTimeout(() => {
         body.classList.add('show');
      }, 0);
   
      setTimeout(() => {
         recordingSection.classList.add('show');
      }, 500);
   
      setTimeout(() => {
         librasSection.classList.add('show');
      }, 1000);
   
   }
}
