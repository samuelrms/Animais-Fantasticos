export default function initTemas() {
  function handleKeyboard(event) {
    if (event) document.body.classList.toggle('noturno');
  }
  const mudarCor = document.querySelector('[href^="mudar-cor.html"]');
  mudarCor.addEventListener('click', handleKeyboard);

  function handleClickT(event) {
    console.log(event.key);
    if (event) document.documentElement.classList.toggle('textomaior');
  }
  const aumentarFonte = document.querySelector('[href^="aumentar-fonte.html"]');
  aumentarFonte.addEventListener('click', handleClickT);
}
