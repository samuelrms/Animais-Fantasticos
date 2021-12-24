import AnimaNumeros from './anima-numeros.js';

export default function criarAnimais(url, target) {

  // Cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Define cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function definirAnimais(animal){
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaisNumerosAnimados(){
    const animaNumeros = new AnimaNumeros('[data-numero]','.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais atraves de um arquivo json
  // e cria cada animais utilizando create animais
  async function fetchAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de json, ativa as funções
      // Para preencher e animar os números
      animaisJSON.forEach(animal => definirAnimais(animal))
      animaisNumerosAnimados()
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchAnimais()

}
