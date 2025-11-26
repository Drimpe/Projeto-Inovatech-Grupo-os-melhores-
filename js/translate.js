/* 

PARA FACILITAR O SEU ENTENDIMENTO: 
→ O CÓDIGO SEMPRE ESTÁ MANIPULANDO/ALTERANDO O ARQUIVO INDEX.HTML 
*/

// Objeto com o endereço de cada gif e sua respectiva duração (em milissegundos)
const alphabet = {
    '0': ['/js/libras/alfabeto/0.gif', 1530],
    '1': ['/js/libras/alfabeto/1.gif', 1590],
    '2': ['/js/libras/alfabeto/2.gif', 1590],
    '3': ['/js/libras/alfabeto/3.gif', 2010],
    '4': ['/js/libras/alfabeto/4.gif', 1590],
    '5': ['/js/libras/alfabeto/5.gif', 1590],
    '6': ['/js/libras/alfabeto/6.gif', 1830],
    '7': ['/js/libras/alfabeto/7.gif', 2070],
    '8': ['/js/libras/alfabeto/8.gif', 1470],
    '9': ['/js/libras/alfabeto/9.gif', 1650],
    'a': ['/js/libras/alfabeto/a.gif', 2160],
    'á': ['/js/libras/alfabeto/a.gif', 2160],
    'à': ['/js/libras/alfabeto/a.gif', 2160],
    'ã': ['/js/libras/alfabeto/a.gif', 2160],
    'b': ['/js/libras/alfabeto/b.gif', 1770],
    'c': ['/js/libras/alfabeto/c.gif', 1890],
    'ç': ['/js/libras/alfabeto/ç.gif', 2850],
    'd': ['/js/libras/alfabeto/d.gif', 3000],
    'e': ['/js/libras/alfabeto/e.gif', 1530],
    'é': ['/js/libras/alfabeto/e.gif', 1530],
    'è': ['/js/libras/alfabeto/e.gif', 1530],
    'ê': ['/js/libras/alfabeto/e.gif', 1530],
    'f': ['/js/libras/alfabeto/f.gif', 3060],
    'g': ['/js/libras/alfabeto/g.gif', 2400],
    'h': ['/js/libras/alfabeto/h.gif', 3000],
    'i': ['/js/libras/alfabeto/i.gif', 1860],
    'í': ['/js/libras/alfabeto/i.gif', 1860],
    'j': ['/js/libras/alfabeto/j.gif', 2310],
    'k': ['/js/libras/alfabeto/k.gif', 3150],
    'l': ['/js/libras/alfabeto/l.gif', 1920],
    'm': ['/js/libras/alfabeto/m.gif', 2310],
    'n': ['/js/libras/alfabeto/n.gif', 1950],
    'o': ['/js/libras/alfabeto/o.gif', 2730],
    'ó': ['/js/libras/alfabeto/o.gif', 2730],
    'ò': ['/js/libras/alfabeto/o.gif', 2730],
    'ô': ['/js/libras/alfabeto/o.gif', 2730],
    'õ': ['/js/libras/alfabeto/o.gif', 2730],
    'p': ['/js/libras/alfabeto/p.gif', 2970],
    'q': ['/js/libras/alfabeto/q.gif', 2070],
    'r': ['/js/libras/alfabeto/r.gif', 2730],
    's': ['/js/libras/alfabeto/s.gif', 2910],
    't': ['/js/libras/alfabeto/t.gif', 2850],
    'u': ['/js/libras/alfabeto/u.gif', 2850],
    'ú': ['/js/libras/alfabeto/u.gif', 2850],
    'v': ['/js/libras/alfabeto/v.gif', 2130],
    'w': ['/js/libras/alfabeto/w.gif', 2190],
    'x': ['/js/libras/alfabeto/x.gif', 1950],
    'y': ['/js/libras/alfabeto/y.gif', 2100],
    'z': ['/js/libras/alfabeto/z.gif', 1740],
}


/* 
    Como funciona o objeto? É por meio da associação chave-valor
    O primeiro item é achave (letra), e o segundo item (valor) é um array(ou lista [])com dois sub-itens, onde o primeiro[0] é o endereço do gif (nas pastas) e o segundo [1] é o tempo de duração em milissegundos.

    Exemplo:
    alphabet['x'] → ['/js/libras/alfabeto/x.gif', 1950]
    alphabet['x'][0] → '/js/libras/alfabeto/x.gif'
    alphabet['x'][1] →  1950
*/

export default function Translate() {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Função de conversão de letras para gifs
    async function letterConvert(letterArray) {
        const outputLibras = document.querySelector('.output-libras img');
        // Seleciona o campo de saída e o armazena em uma constante

        let gifDuration = 0;
        // Duração do gif é inicialmente definida em 0

        // Laço de repetição (for of) para percorrer cada letra do texto
        for (const letter of letterArray) {

            // Verifica se o endereço para a letra ATUAL existe no objeto de letras do alfabeto.
            const imageUrl = alphabet[letter][0];
            if (imageUrl) {

                outputLibras.src = imageUrl;
                // Se a letra existir, adicione o endereço do gif ao campo de saída

                gifDuration = alphabet[letter][1];
                // Adiciona a duração do gif selecionado
            }
            
            await delay(gifDuration);
            // Espera o gif rodar antes de ir para a próxima letra.
        }

        outputLibras.src = '';
        // Limpa o campo de saída após a exibição de todas as letras (em gifs).
    }

    // Função de formatação de texto
    function formatText() {
        let textValue = document.querySelector('.rec-text').value.toLowerCase();
        // Seleciona todo o texto do formulário e o converte para letras minúsculas.

        textValue = textValue.replace(/\s/g, '');
        // Remove todos os espaços do texto
    
        // Verifica se algo foi digitado no campo de formulário.
        if (textValue) {
            // Separa cada letra do texto em um array (variável composta) onde cada posição desse array possui uma letra do texto
            const letterArray = textValue.split('');

            letterConvert(letterArray);
            // Executa a função de conversão de letras e envia todas as letras do texto.
        }
    }

    const translateButton = document.querySelector('.translate-button');
    // Seleciona o botão de tradução e o armazena em uma constante.

    translateButton.addEventListener('click', formatText);
    // Adiciona um evento de 'clique' ao botão de tradução. Ao ser clicado, aciona a função 'formatText'
}