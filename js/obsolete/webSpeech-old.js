export default function initWebSpeech() {
   /***********************
      * Reconhecimento de fala (Web Speech API)
      ***********************/
   const $ = sel => document.querySelector(sel);
   const btnRec = $('#btnRec');
   const btnSend = $('#btnSendToLibras');
   const btnClear = $('#btnClear');
   const asrOut = $('#asrOut');
   const recDot = $('#recDot');
   const recStatus = $('#recStatus');
   const librasOut = $('#librasOut');
   
   let recognition = null;
   let isRecording = false;
   
   function setupASR(){
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if(!SR){
      recStatus.textContent = 'Reconhecimento de fala não suportado neste navegador.'; recDot.className = 'dot err';
      btnRec.disabled = true;
         return;
      }
      recognition = new SR();
      recognition.lang = 'pt-BR';
      recognition.continuous = true;
      recognition.interimResults = true;
   
      let finalTranscript = '';
   
      recognition.onstart = () => {
         isRecording = true;
         btnRec.classList.add('active');
         btnRec.textContent = '⏹Parar Gravação';
         recStatus.textContent = 'Ouvindo… fale normalmente.';
         recDot.className = 'dot ok';
      };

      recognition.onresult = (event) => {
         let interim = '';
         let finalTranscript = '';
         for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscript += transcript + ' ';
            else interim += transcript;
         }
         asrOut.value = (finalTranscript + interim).trim();
      };
      
      recognition.onerror = (e) => {
         recStatus.textContent = 'Erro: ' + e.error;
         recDot.className = 'dot err';
      };

      recognition.onend = () => {
         isRecording = false;
         btnRec.classList.remove('active');
         btnRec.textContent = '🎤Iniciar Gravação';
         if(!asrOut.value) { recStatus.textContent = 'Aguardando…'; recDot.className = 'dot'; }
      };
   }
   
   setupASR();
   
   btnRec.addEventListener('click', () => {
      if(!recognition) return;
      if(!isRecording) recognition.start(); else recognition.stop();
   });
    
     // Função para enviar o texto para a Hand Talk
       function sendTextToHandTalk(text) {
           // Usa um timeout para garantir que o plugin Hand Talk esteja carregado
           setTimeout(() => {
               if (window.HandTalk) {
                   window.HandTalk.set({
                       text: text,
                       showWidget: true
                   });
               } else {
                   console.error("Plugin Hand Talk não encontrado.");
               }
           }, 500); // 500ms de espera para garantir que o plugin carregue
       }
   
       // Envia o texto para a Hand Talk
       btnSend.addEventListener('click', () => {
           const text = (asrOut.value || '').trim();
           if (!text) {
               recStatus.textContent = 'Nenhum texto para traduzir.';
               recDot.className = 'dot warn';
               return;
           }
           
           // Coloca o texto na div que a Hand Talk irá ler
           const textToLibrasDiv = document.getElementById('textoParaLibras');
           textToLibrasDiv.innerHTML = `<h3>Traduzir a Fala</h3><p>${text}</p>`;
   
           sendTextToHandTalk(text);
           recStatus.textContent = 'Texto enviado. O plugin Hand Talk será exibido para tradução.';
           recDot.className = 'dot ok';
       });
   
   btnClear.addEventListener('click', () => { 
       asrOut.value=''; 
       const textToLibrasDiv = document.getElementById('textoParaLibras');
       textToLibrasDiv.innerHTML = '<h3>Traduzir a Fala</h3>'; 
   });
   
   // Qualidade de vida
   asrOut.addEventListener('keydown', (e)=>{
      if(e.key==='Enter' && (e.ctrlKey||e.metaKey)) btnSend.click();
   });
   asrOut.placeholder = 'Ex.: "Olá, bom dia! Gostaria de saber o horário de atendimento."';
}