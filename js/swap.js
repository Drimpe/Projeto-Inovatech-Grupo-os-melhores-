
export default function swapScreen() {
    const isDesktop = window.matchMedia('(min-width: 1200px)').matches;

    if (isDesktop) {
        function Swap() {
            const outputLibras = document.querySelector('.output-libras-section');
            outputLibras.classList.toggle('swap');
        }
    
        const swapButton = document.querySelector('.swap-button');
        swapButton.addEventListener('click', Swap);
    }
}
