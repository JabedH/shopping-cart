function updatePrice(product, price, isIncising) {
  const ProductInput = document.getElementById(product + "-number");
  let productNumber = ProductInput.value;
  if (isIncising) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  ProductInput.value = productNumber;
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  //
  calculateTotal();
}
//
function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const phoneNumber = parseInt(productInput.value);
  return phoneNumber;
}

//
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1298;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const text = subTotal / 10;
  const total = subTotal + text;
  //
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("text-amount").innerText = text;
  document.getElementById("total-price").innerText = total;
  console.log(subTotal);
}
// phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updatePrice("phone", 1289, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updatePrice("phone", 1289, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  updatePrice("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updatePrice("case", 59, false);
});
