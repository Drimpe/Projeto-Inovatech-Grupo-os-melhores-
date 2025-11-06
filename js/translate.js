const alphabet = {
    '0': '/js/libras/0.gif',
    '1': '/js/libras/1.gif',
    '2': '/js/libras/2.gif',
    '3': '/js/libras/3.gif',
    '4': '/js/libras/4.gif',
    '5': '/js/libras/5.gif',
    '6': '/js/libras/6.gif',
    '7': '/js/libras/7.gif',
    '8': '/js/libras/8.gif',
    '9': '/js/libras/9.gif',
    'a': '/js/libras/a.gif',
    'b': '/js/libras/b.gif',
    'c': '/js/libras/c.gif',
    'ç': '/js/libras/ç.gif',
    'd': '/js/libras/d.gif',
    'e': '/js/libras/e.gif',
    'f': '/js/libras/f.gif',
    'g': '/js/libras/g.gif',
    'h': '/js/libras/h.gif',
    'i': '/js/libras/i.gif',
    'j': '/js/libras/j.gif',
    'k': '/js/libras/k.gif',
    'l': '/js/libras/l.gif',
    'm': '/js/libras/m.gif',
    'n': '/js/libras/n.gif',
    'o': '/js/libras/o.gif',
    'p': '/js/libras/p.gif',
    'q': '/js/libras/q.gif',
    'r': '/js/libras/r.gif',
    's': '/js/libras/s.gif',
    't': '/js/libras/t.gif',
    'u': '/js/libras/u.gif',
    'v': '/js/libras/v.gif',
    'w': '/js/libras/w.gif',
    'x': '/js/libras/x.gif',
    'y': '/js/libras/y.gif',
    'z': '/js/libras/z.gif',

}

export default function Translate() {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    async function translateToLibras(arr) {
        const outputLibras = document.querySelector('.output-libras img');

        for (const item of arr) {
            const imageUrl = alphabet[item];
            if (imageUrl) {
                outputLibras.src = imageUrl;

            }

            await delay(1250);
        }
    }

    function formatText() {
        let textValue = document.querySelector('.rec-text').value.toLowerCase();
        textValue = textValue.replace(/\s/g, '');
        const letterArray = textValue.split('');
        translateToLibras(letterArray);
    }

    const translateButton = document.querySelector('.translate-button');

    translateButton.addEventListener('click', formatText);

}