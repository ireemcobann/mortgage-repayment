let amount = document.querySelector(".amount");
let yearly = document.querySelector(".term");
let rate = document.querySelector(".rate");
let resultButton = document.querySelector(".resultBtn");

const footer = document.querySelector(".footer");

resultButton.addEventListener("click", hesapla);

function hesapla() {
  let amountError = document.querySelector("#amountError");
  let yılError = document.querySelector("#yılError");
  let oranError = document.querySelector("#oranError");

  // inputlardan en az biri boşsa
  if (amount.value.trim() == "") {
    amountError.style.display = "block";
  } else {
    amountError.style.display = "none";
  }

  if (yearly.value.trim() == "") {
    yılError.style.display = "block";
  } else {
    yılError.style.display = "none";
  }

  if (rate.value.trim() == "") {
    oranError.style.display = "block";
  } else {
    oranError.style.display = "none";
  }

  // tüm inputlar doluysa hesaplama yapalım
  if (
    amount.value.trim() !== "" &&
    yearly.value.trim() !== "" &&
    rate.value.trim() !== ""
  ) {
    let aylikFaiz = Number(rate.value) / 100 / 12;
    let toplamAylik = Number(yearly.value) * 12;
    let aylikodeme =
      (Number(amount.value) * aylikFaiz) /
      (1 - Math.pow(1 + aylikFaiz, -toplamAylik));
    let geriodeme = aylikodeme * toplamAylik;
    sonucuGoster(aylikodeme, geriodeme);
  }
}

function sonucuGoster(aylikodeme, geriodeme) {
  footer.innerHTML = `
    <h2>Your Results</h2>
    <p>
      Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div class="result-screen"> 
      <h2>Your monthly repayments</h2>
      <p>£${aylikodeme.toFixed(2)}</p>
      <hr>
      <h2>Total you'll repay over the term</h2>
      <p>£${geriodeme.toFixed(2)}</p>
    </div>
  `;
}

const clearBtn = document.querySelector(".clearBtn");

clearBtn.addEventListener("click", clearAll);

function clearAll() {
  amount.value = " ";
  yearly.value = " ";
  rate.value = "";
  footer.innerHTML= "";
}


