const alphabet = {
    '0': '/js/libras/alfabeto/0.gif',
    '1': '/js/libras/alfabeto/1.gif',
    '2': '/js/libras/alfabeto/2.gif',
    '3': '/js/libras/alfabeto/3.gif',
    '4': '/js/libras/alfabeto/4.gif',
    '5': '/js/libras/alfabeto/5.gif',
    '6': '/js/libras/alfabeto/6.gif',
    '7': '/js/libras/alfabeto/7.gif',
    '8': '/js/libras/alfabeto/8.gif',
    '9': '/js/libras/alfabeto/9.gif',
    'a': '/js/libras/alfabeto/a.gif',
    'b': '/js/libras/alfabeto/b.gif',
    'c': '/js/libras/alfabeto/c.gif',
    'ç': '/js/libras/alfabeto/ç.gif',
    'd': '/js/libras/alfabeto/d.gif',
    'e': '/js/libras/alfabeto/e.gif',
    'f': '/js/libras/alfabeto/f.gif',
    'g': '/js/libras/alfabeto/g.gif',
    'h': '/js/libras/alfabeto/h.gif',
    'i': '/js/libras/alfabeto/i.gif',
    'j': '/js/libras/alfabeto/j.gif',
    'k': '/js/libras/alfabeto/k.gif',
    'l': '/js/libras/alfabeto/l.gif',
    'm': '/js/libras/alfabeto/m.gif',
    'n': '/js/libras/alfabeto/n.gif',
    'o': '/js/libras/alfabeto/o.gif',
    'p': '/js/libras/alfabeto/p.gif',
    'q': '/js/libras/alfabeto/q.gif',
    'r': '/js/libras/alfabeto/r.gif',
    's': '/js/libras/alfabeto/s.gif',
    't': '/js/libras/alfabeto/t.gif',
    'u': '/js/libras/alfabeto/u.gif',
    'v': '/js/libras/alfabeto/v.gif',
    'w': '/js/libras/alfabeto/w.gif',
    'x': '/js/libras/alfabeto/x.gif',
    'y': '/js/libras/alfabeto/y.gif',
    'z': '/js/libras/alfabeto/z.gif',
}

const words = {
    'banana': ['/js/libras/palavras/banana.gif', 1580],
    'boanoite': ['/js/libras/palavras/boanoite.gif', 3500],
    'boatarde': ['/js/libras/palavras/boatarde.gif', 2300],
    'bolo': ['/js/libras/palavras/bolo.gif', 3100],
    'bom': '/js/libras/palavras/bom.gif',
    'bomdia': ['/js/libras/palavras/bomdia.gif', 2600],
    'bonito': '/js/libras/palavras/bonito.gif',
    'cadeira': '/js/libras/palavras/cadeira.gif',
    'calma': '/js/libras/palavras/calma.gif',
    'calor': '/js/libras/palavras/calor.gif',
    'cartaodecredito': '/js/libras/palavras/cartaodecredito.gif',
    'casa': '/js/libras/palavras/casa.gif',
    'castelo': '/js/libras/palavras/castelo.gif',
    'caverna': '/js/libras/palavras/caverna.gif',
    'sentar': '/js/libras/palavras/sentar.gif',
}

export default function Translate() {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function wordConvert(textValue) {
        const outputLibras = document.querySelector('.output-libras img');
        let isWord = false;
        let gifDuration = 0;
        
        for (const word in words) {

            if (word === textValue) {
                const imageUrl = words[word][0];
                outputLibras.src = imageUrl;

                gifDuration = words[word][1];
                isWord = true;

                break;
            }
        }

        if (isWord) {
            setTimeout(() => {
                outputLibras.src = '';
            }, gifDuration + 10);
        }

        return isWord;
    }

    async function convertToLibras(arr) {
        const outputLibras = document.querySelector('.output-libras img');

        for (const letter of arr) {
            const imageUrl = alphabet[letter];

            if (imageUrl) {
                outputLibras.src = imageUrl;
            }
            
            await delay(1500);
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
                convertToLibras(letterArray);
            }

        }
        
    }

    const translateButton = document.querySelector('.translate-button');

    translateButton.addEventListener('click', formatText);

}