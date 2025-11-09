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
    'b': ['/js/libras/alfabeto/b.gif', 1770],
    'c': ['/js/libras/alfabeto/c.gif', 1890],
    'ç': ['/js/libras/alfabeto/ç.gif', 2850],
    'd': ['/js/libras/alfabeto/d.gif', 3000],
    'e': ['/js/libras/alfabeto/e.gif', 1530],
    'f': ['/js/libras/alfabeto/f.gif', 3060],
    'g': ['/js/libras/alfabeto/g.gif', 2400],
    'h': ['/js/libras/alfabeto/h.gif', 3000],
    'i': ['/js/libras/alfabeto/i.gif', 1860],
    'j': ['/js/libras/alfabeto/j.gif', 2310],
    'k': ['/js/libras/alfabeto/k.gif', 3150],
    'l': ['/js/libras/alfabeto/l.gif', 1920],
    'm': ['/js/libras/alfabeto/m.gif', 2310],
    'n': ['/js/libras/alfabeto/n.gif', 1950],
    'o': ['/js/libras/alfabeto/o.gif', 2730],
    'p': ['/js/libras/alfabeto/p.gif', 2970],
    'q': ['/js/libras/alfabeto/q.gif', 2070],
    'r': ['/js/libras/alfabeto/r.gif', 2730],
    's': ['/js/libras/alfabeto/s.gif', 2910],
    't': ['/js/libras/alfabeto/t.gif', 2850],
    'u': ['/js/libras/alfabeto/u.gif', 2850],
    'v': ['/js/libras/alfabeto/v.gif', 2130],
    'w': ['/js/libras/alfabeto/w.gif', 2190],
    'x': ['/js/libras/alfabeto/x.gif', 1950],
    'y': ['/js/libras/alfabeto/y.gif', 2100],
    'z': ['/js/libras/alfabeto/z.gif', 1740],
}

const words = {
    'zero': ['/js/libras/alfabeto/0.gif', 1530],
    'um': ['/js/libras/alfabeto/1.gif', 1590],
    'dois': ['/js/libras/alfabeto/2.gif', 1590],
    'tres': ['/js/libras/alfabeto/3.gif', 2010],
    'quatro': ['/js/libras/alfabeto/4.gif', 1590],
    'cinco': ['/js/libras/alfabeto/5.gif', 1590],
    'seis': ['/js/libras/alfabeto/6.gif', 1830],
    'sete': ['/js/libras/alfabeto/7.gif', 2070],
    'oito': ['/js/libras/alfabeto/8.gif', 1470],
    'nove': ['/js/libras/alfabeto/9.gif', 1650],
    'banana': ['/js/libras/palavras/banana.gif', 1580],
    'boanoite': ['/js/libras/palavras/boanoite.gif', 3500],
    'boatarde': ['/js/libras/palavras/boatarde.gif', 2300],
    'bolo': ['/js/libras/palavras/bolo.gif', 3100],
    'bom': ['/js/libras/palavras/bom.gif', 1800],
    'bomdia': ['/js/libras/palavras/bomdia.gif', 2600],
    'bonito': ['/js/libras/palavras/bonito.gif', 1800],
    'cadeira': ['/js/libras/palavras/cadeira.gif', 1590],
    'calma': ['/js/libras/palavras/calma.gif', 2800],
    'calor': ['/js/libras/palavras/calor.gif', 2470],
    'cartaodecredito': ['/js/libras/palavras/calor.gif', 1800],
    'casa': ['/js/libras/palavras/casa.gif', 1800],
    'castelo': ['/js/libras/palavras/castelo.gif', 2600],
    'caverna': ['/js/libras/palavras/caverna.gif', 5800],
    'sentar': ['/js/libras/palavras/sentar.gif', 1590],
}

export default function Translate() {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function wordConvert(textValue) {
        const outputLibras = document.querySelector('.output-libras img');
        let isWord = false;
        let gifDuration = 0;
        
        if (words[textValue]) {
            const imageUrl = words[textValue][0];
            outputLibras.src = imageUrl;
            gifDuration = words[textValue][1];
            isWord = true;
        }

        if (isWord) {
            setTimeout(() => {
                outputLibras.src = '';
            }, gifDuration + 50);
        }

        return isWord;
    }

    async function letterConvert(letterArray) {
        const outputLibras = document.querySelector('.output-libras img');
        let gifDuration = 0;

        for (const letter of letterArray) {
            const imageUrl = alphabet[letter][0];

            if (imageUrl) {
                outputLibras.src = imageUrl;
                gifDuration = alphabet[letter][1];
            }
            
            await delay(gifDuration);
        }

        outputLibras.src = '';
    }

    function formatText() {
        let textValue = document.querySelector('.rec-text').value.toLowerCase();
        textValue = textValue.replace(/\s/g, '');
    
        if (textValue) {
            const convertedToWord = wordConvert(textValue);
            
            if(convertedToWord) {
                return;
            }
            else {
                const letterArray = textValue.split('');
                letterConvert(letterArray);
            }
        }
    }

    const translateButton = document.querySelector('.translate-button');
    translateButton.addEventListener('click', formatText);
}