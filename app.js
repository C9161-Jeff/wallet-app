/* ------------ Selectors ----------- */

const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleFormu = document.getElementById("ekle-formu");
const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalan = document.getElementById("kalan");

/* ------------ variables ----------- */
let gelirler = 0;

/* ----------- event listeners ----------- */
window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler") || 0); /*shortsurcet*/
  gelirinizTd.textContent = gelirler;
});

ekleFormu.addEventListener("submit", (e) => {
  e.preventDefault();
  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);
  ekleFormu.reset();
  localStorage.setItem("gelirler", gelirler);
  gelirinizTd.textContent = gelirler;
});
