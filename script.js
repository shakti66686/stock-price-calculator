let buying_price = document.querySelector("#buying-price");
let stock = document.querySelector("#stocks");
let current_price = document.querySelector("#current-price");
let btn = document.querySelector("#button");
let h3_1 = document.querySelector("#h3-1");
let h3_2 = document.querySelector("#h3-2");
let h3_3 = document.querySelector("#h3-3");

btn.addEventListener("click", function calculate() {
  let buyPrice = buying_price.value;
  let buyingPriceTotal = stock.value * buyPrice;
  let currentValueTotal = stock.value * current_price.value;
  let profitOrLoss = currentValueTotal - buyingPriceTotal;

  if (profitOrLoss >= 0) {
    alert(`your profit is ${profitOrLoss} and your profit percent is % return`);
  } else {
    alert(`your loss is ${profitOrLoss} and your loss percent is % return`);
  }
});
