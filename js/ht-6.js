let total = 0;
let result;

while (true) {
  let input = prompt("Введите число");

  if (input === null) {
    alert("Отменено пользоватилем");
    break;
  }
  input = Number(input);

  const invalidNumber = Number.isNaN(input);

  if (invalidNumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  total += input;
  result = `Общая сумма чисел равна ${total}`;
}

alert(result);
