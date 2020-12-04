const credits = 23580;
const pricePerDroit = 3000;

const orderQuantity = prompt(
  "Введите количество дроидов, которые хотите заказать"
);
let totalPrice;
let maxQuantity = credits / pricePerDroit;
let notification;

if (orderQuantity === null) {
  notification = "Отменено пользователем!";
} else if (orderQuantity > maxQuantity) {
  notification = "Недостаточно средств на счету!";
} else {
  totalPrice = orderQuantity * pricePerDroit;
  notification = `Вы купили ${orderQuantity} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
}
console.log(notification);
