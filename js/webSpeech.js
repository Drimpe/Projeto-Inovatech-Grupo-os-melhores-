export default function speechRecognition() {
   let recognition = null;

   let isRecording = false;
   // Variável para indicar o status da gravação

   /* Seleciona os elementos necessários para a gravação: */
   const recButton = document.querySelector('.rec-button');
   // Botão de gravação 

   const recStatus = document.querySelector('.rec-status');
   // Indicador de status

   const clearButton = document.querySelector('.clear-button');
   // Botão de 'limpar' o campo do formulário

   const translateButton = document.querySelector('.translate-button');
   // Botão de conversão

   const recText = document.querySelector('#rec-text');
   // O formulário com o texto digitado
   
   // Função de setup inicial
   function Setup() {

      // Cria um objeto (nativo do navegador) de reconhecimento de voz
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;

      // Verifica se o navegador atual NÃO é compatível com reconhecimento de voz;
      if (!SpeechRec) {
         recStatus.textContent = 'Reconhecimento de fala não suportado neste navegador.';
         recStatus.classList.remove('waiting');
         recStatus.classList.add('error');
         recButton.disabled = true;

         // Se o navegador não for compatível, o return cancela toda a execução abaixo
         return;
      }

      // Caso o if acima seja ignorado, significa que o navegador é compatível com reconhecimento de voz:

      // Cria um novo objeto para reconhecimento de voz. A partir de agora, todo o processo de gravação será gerenciado pelo 'recognition'
      recognition = new SpeechRec();

      recognition.lang = 'pt-BR';
      // Define o idioma

      recognition.continuous = true;
      // Define a gravação como contínua

      recognition.interimResults = true;
      
      // Ao iniciar a gravação, executa a seguinte função:
      recognition.onstart = () => {
         isRecording = true;

         recButton.textContent = 'Parar Gravação';
         // Altera o texto do botão de gravação.

         recStatus.classList.remove('waiting');
         // Remove o status de 'espera' do indicador de status. → Cor cinza.
         
         recStatus.classList.add('recording');
         // Adiciona o status de 'gravando' ao indicador de status → Cor verde.
         
         recStatus.textContent = `Gravando`;
         // Altera o texto do indicador de status para 'Gravando"

         // Desativa ambos os botões de tradução e limpar durante a gravação de voz
         translateButton.disabled = true;
         clearButton.disabled = true;
      }
      
      // Ao encerrar a gravação, executa a seguinte função:
      recognition.onend = () => {
         isRecording = false;

         // Todo o conteúdo volta ao seu estado anterior (antes da gravação)
         recButton.textContent = 'Nova gravação';
         recStatus.classList.remove('recording');
         recStatus.classList.add('waiting');
         recStatus.textContent = 'Aguardando';
         

         // Ativa ambos os botões de tradução e limpar.
         translateButton.disabled = false;
         clearButton.disabled = false;
      }
      
      let finalTranscript = '';
      let interim = '';
      
      recognition.onresult = (event) => {
         interim = '';
         finalTranscript = '';
         for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscript += transcript + ' ';
            else interim += transcript;
         }
         recText.value = (finalTranscript + interim).trim();
      };
      

      // Caso ocorra algum erro durante a gravação, esta função é ativada:
      recognition.onerror = () => {
         recStatus.classList.add('error');
         // Adiciona o status de 'erro' ao indicador de status → Cor vermelha.
   
         recStatus.textContent = `Erro. Recarregando a página...`;
         // Muda o texto do indicador de status

         // Após o erro, recarrega a página depois de 1000ms (1 segundo)
         setTimeout(() => {
            location.reload();
         }, 1000);
      }
   }
   
   // A seguinte função é ativada ao clicar no botão de 'Limpar'
   function clearForm() {
      recText.value = '';

      // Limpa todo o texto do formulário
   }
   
   // Inicia a função 'Setup' para definir todas as configurações e funcionalidades do reconhecimento de voz
   Setup();
   
   // Adiciona o evento de 'clique' ao botão de gravação/finalizar gravação
   recButton.addEventListener('click', () => {

      // O que acontece ao clicar no botão depende do valor definido na variável 'isRecording' que será true ou false.

      // Se não estiver gravando:
      if (!isRecording) {
         recognition.start();
         // Inicia a gravação
      }
      else {
         // Se já estiver gravando, ou seja, 'isRecording = true' então encerra a gravação.
         recognition.stop();
      }
   });
   
   // Adiciona o evento de 'clique' no botão de limpar → Ativa a função clearForm ao clicar no botão.
   clearButton.addEventListener('click', clearForm);
   
}