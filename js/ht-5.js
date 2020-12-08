const message = prompt("Укажите страну доставки");
const countryDelivery =
  message &&
  message.charAt(0).toUpperCase() + message.substring(1).toLowerCase();

let price;
let country;
let result;

switch (countryDelivery) {
  case null:
    result = "Пользователь отменил доставку!";
    break;

  case "Китай":
    price = 100;
    country = "Китай";
    break;

  case "Чили":
    price = 250;
    country = "Чили";
    break;

  case "Австралия":
    price = 170;
    country = "Австралию";
    break;

  case "Индия":
    price = 80;
    country = "Индию";
    break;

  case "Ямайка":
    price = 120;
    country = "Ямайку";
    break;

  default:
    result = "В вашей стране доставка не доступна";
}

console.log(result);

if (country) {
  console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
}
