export default function speechRecognition() {
   // let recognition = null;
   let isRecording = false;

   const recButton = document.querySelector('.rec-button');
   const recStatus = document.querySelector('.rec-status');
   
   function Setup() {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRec) {
         recStatus.textContent = 'Reconhecimento de fala não suportado neste navegador.';
         recStatus.classList.remove('waiting');
         recStatus.classList.add('error');
         recButton.disabled = true;
         return;
      }

      const recognition = new SpeechRec();
      recognition.lang = 'pt-BR';
      recognition.continuous = true;
      recognition.interimResults = true;

      let finalTranscript = '';

      recognition.onstart = () => {
         isRecording = true;

      }


   }
   
   Setup();


   recButton.addEventListener("click", () => {
      window.alert("INOVATECH");
   })

}