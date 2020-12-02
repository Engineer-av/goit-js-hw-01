const message = prompt("Укажите страну доставки");
const countryDelivery =
  message.charAt(0).toUpperCase() + message.substring(1).toLowerCase();

let price = 0;
let result;
let country;

switch (countryDelivery) {
  case "Китай":
    price = 100;
    result = `Доставка в ${countryDelivery} будет стоить ${price} кредитов`;
    break;

  case "Чили":
    price = 250;
    result = `Доставка в ${countryDelivery} будет стоить ${price} кредитов`;
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
