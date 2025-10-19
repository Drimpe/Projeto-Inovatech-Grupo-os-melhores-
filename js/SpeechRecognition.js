export default function speechRecognition() {
   let recognition = null;
   let isRecording = false;

   const recButton = document.querySelector('.rec-button');
   const recStatus = document.querySelector('.rec-status');
   const recText = document.querySelector('#rec-text');
   
   function Setup() {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRec) {
         recStatus.textContent = 'Reconhecimento de fala não suportado neste navegador.';
         recStatus.classList.remove('waiting');
         recStatus.classList.add('error');
         recButton.disabled = true;
         return;
      }

      recognition = new SpeechRec();
      recognition.lang = 'pt-BR';
      recognition.continuous = true;
      recognition.interimResults = true;

      let finalTranscript = '';

      recognition.onstart = () => {
         isRecording = true;
         recButton.textContent = 'Parar Gravação';
         recStatus.classList.remove('waiting');
         recStatus.classList.add('recording');
         recStatus.textContent = `Gravando`;
      }

      recognition.onend = () => {
         isRecording = false;
         recButton.textContent = 'Nova gravação';
         recStatus.classList.remove('recording');
         recStatus.classList.add('waiting');
         recStatus.textContent = 'Aguardando';
      }

      recognition.onresult = (event) => {
         console.log(event);
      }
   }
   
   Setup();


   recButton.addEventListener("click", () => {
      if (!isRecording) {
         recognition.start();
      }
      else {
         recognition.stop();
      }
   })

}