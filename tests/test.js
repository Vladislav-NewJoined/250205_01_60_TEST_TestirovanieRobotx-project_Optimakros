const { Builder, By, until } = require('selenium-webdriver');

(async function test() {
  // Инициализация драйвера
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Открытие сайта
    await driver.get('http://localhost:3000/');

    // Проверка заголовка страницы
    let title = await driver.getTitle();
    if (title.includes('ROBOTX')) {
      console.log('Тест пройден: заголовок страницы корректен.');
    } else {
      console.log('Тест не пройден: заголовок страницы некорректен.');
    }
  } finally {
    // Закрытие браузера
    await driver.quit();
  }
})();