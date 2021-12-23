export default function initFetchBiticoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (10 / bitcoin.BRL.sell).toFixed(7);
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
