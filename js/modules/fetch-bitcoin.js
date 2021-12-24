export default function fetchBiticoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (10 / bitcoin.BRL.sell).toFixed(7);
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
