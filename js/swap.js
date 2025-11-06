export default function swapScreen() {
    const isDesktopOrTablet = window.matchMedia('(min-width: 768px)').matches;

    if (isDesktopOrTablet) {
        function Swap() {
            const outputLibras = document.querySelector('.output-libras-section');
            outputLibras.classList.toggle('swap');
        }
    
        const swapButton = document.querySelector('.swap-button');
        swapButton.addEventListener('click', Swap);
    }
}
