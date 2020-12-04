const message = prompt("Укажите страну доставки");
const countryDelivery =
  message &&
  message.charAt(0).toUpperCase() + message.substring(1).toLowerCase();

let price = 0;
let country;
let result;

switch (countryDelivery) {
  case null:
    result = "Пользователь отменил доставку!";
    break;

  case "Китай":
    price = 100;
    country = "Китай";
    result = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case "Чили":
    price = 250;
    country = "Чили";
    result = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case "Австралия":
    price = 170;
    country = "Австралию";
    result = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case "Индия":
    price = 80;
    country = "Индию";
    result = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  case "Ямайка":
    price = 120;
    country = "Ямайку";
    result = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

  default:
    result = "В вашей стране доставка не доступна";
}

alert(result);
