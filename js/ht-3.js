const ADMIN_PASSWORD = "jqueryismyjam";
const message = prompt("Введите пароль");

let result;

switch (message) {
  case null:
    result = "Отменено пользователем!";
    break;

  case ADMIN_PASSWORD:
    result = "Добро пожаловать!";
    break;

  default:
    result = "Доступ запрещен, неверный пароль!";
}

alert(result);
