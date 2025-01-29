function calculate() {
  let sum = 0;
  let nanFound = false;
  for (i = 1; i <= 7; i++) {
    let value = parseInt(document.getElementById("t" + i).value);
    let weight = parseInt(document.getElementById("s" + i).textContent);
    if (value < 0 || value > 10) {
      value = 0;
      document.getElementById("t" + i).value = 0;
    }

    if (isNaN(value)) {
      nanFound = true;
    }
    sum += value * weight;
  }
  nanFound ?  document.getElementById("atlag").innerHTML = "írj mindenhova egy számot" : document.getElementById("atlag").innerHTML = sum / 30;
}