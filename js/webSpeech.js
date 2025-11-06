export default function speechRecognition() {
   let recognition = null;
   let isRecording = false;

   const recButton = document.querySelector('.rec-button');
   const recStatus = document.querySelector('.rec-status');
   const clearButton = document.querySelector('.clear-button');
   const translateButton = document.querySelector('.translate-button');
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
      let interim = '';

      recognition.onstart = () => {
         isRecording = true;
         recButton.textContent = 'Parar Gravação';
         recStatus.classList.remove('waiting');
         recStatus.classList.add('recording');
         recStatus.textContent = `Gravando`;

         translateButton.disabled = true;
         clearButton.disabled = true;
      }

      recognition.onend = () => {
         isRecording = false;
         recButton.textContent = 'Nova gravação';
         recStatus.classList.remove('recording');
         recStatus.classList.add('waiting');
         recStatus.textContent = 'Aguardando';

         translateButton.disabled = false;
         clearButton.disabled = false;
      }

      recognition.onresult = (event) => {
         let interim = '';
         let finalTranscript = '';
         for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscript += transcript + ' ';
            else interim += transcript;
         }
         recText.value = (finalTranscript + interim).trim();
      };

      recognition.onerror = () => {
         recStatus.classList.add('error');
         recStatus.textContent = `Erro. Recarregando a página...`;

         setTimeout(() => {
            location.reload();
         }, 1500);
      }
   }
   
   function clearForm() {
      recText.value = '';
   }
   
   Setup();
   
   recButton.addEventListener('click', () => {
      if (!isRecording) {
         recognition.start();
      }
      else {
         recognition.stop();
      }
   });
   
   clearButton.addEventListener('click', clearForm);
   
}