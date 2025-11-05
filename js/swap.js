
export default function swapScreen() {

    function Swap() {
        const outputLibras = document.querySelector('.output-libras-section');
        outputLibras.classList.toggle('swap');
    }

    const swapButton = document.querySelector('.swap-button');
    swapButton.addEventListener('click', Swap);
}
