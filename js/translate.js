const alphabet = {
    '0': '',
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    'a': '',
    'b': '',
    'c': '',
    'ç': '',
    'd': '',
    'e': '',
    'f': '',
    'g': '',
    'h': '',
    'i': '',
    'j': '',
    'k': '',
    'l': '',
    'm': '',
    'n': '',
    'o': '',
    'p': '',
    'q': '',
    'r': '',
    's': '',
    't': '',
    'u': '',
    'v': '',
    'w': '',
    'x': '',
    'y': '',
    'z': '',

}

export default function Translate() {

    function translateToLibras() {
        window.alert('test');
    }

    const translateButton = document.querySelector('.translate-button');

    translateButton.addEventListener('click', translateToLibras);

}