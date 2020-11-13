document.getElementById('form').onsubmit = function() {
  var num1 = parseInt(document.getElementById('form').num1.value, 10);
  if (parseInt(document.getElementById('form').num1.value, 10) > -10000){
    var bool1 = "true";
  } else {
    var bool1 = "false";
  }

  var symbol = document.getElementById('form').symbol.value;

  var num2 = parseInt(document.getElementById('form').num2.value);
  if (parseInt(document.getElementById('form').num2.value) > -10000){
    var bool2 = "true";
  } else {
    var bool2 = "false";
  }

  if (bool1 === "true" && bool2 === "true"){
    if (symbol === "+") {
      var res = num1 + num2;
    } else if (symbol === "-") {
      var res = num1 - num2;
    } else if (symbol === "×") {
      var res = num1 * num2;
    } else if (symbol === "÷") {
      var res = num1 / num2;
    } else if (symbol === "%"){
      var res = num1 % num2;
    }
    String(num1)
    String(num2)
    // var p = document.createElement('p');
    // p.textContent = num1 + symbol + num2 + "=" + res;
    // document.getElementById('text').appendChild(p);
    document.getElementById('text').innerHTML = num1 + symbol + num2 + "=" + res;
  } else {
    window.alert('-9999から9999までの値を入力してください');
  }
  return false;
}
