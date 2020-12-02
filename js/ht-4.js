const credits = 23580;
const pricePerDroit = 3000;

let orderQuantity = prompt(
  "Введите количество дроидов, которые хотите заказать"
);
let totalPrice;
let maxQuantity = credits / pricePerDroit;

if (orderQuantity === null) {
  console.log("Отменено пользователем!");
} else if (orderQuantity > maxQuantity) {
  console.log("Недостаточно средств на счету!");
} else if (orderQuantity < maxQuantity) {
  totalPrice = orderQuantity * pricePerDroit;
  console.log(
    `Вы купили ${orderQuantity} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`
  );
}
