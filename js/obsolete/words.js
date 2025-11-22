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
