
// Функция для открытия локального увеличенного изображения в центрированном окне
function openCenteredImage(imageName, width, height) {
  // рассчитываем координаты для центрирования окна
  const left = (window.screen.width / 2) - (width / 2);
  const top = (window.screen.height / 2) - (height / 2);

  // создаём новое окно
  const win = window.open("", "_blank",
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=no`);

  // если окно успешно открылось — вставляем в него HTML с увеличенной версией изображения
  if (win) {
    win.document.write(`
      <!doctype html>
      <html lang="ru">
      <head>
        <meta charset="utf-8">
        <title>Увеличенное изображение</title>
      </head>
      <body style="margin:0; display:flex; align-items:center; justify-content:center; background-color:#000;">
        <img src="${imageName}" width="${width}" height="${height}" alt="Увеличенное изображение">
      </body>
      </html>
    `);
    win.document.close();
  } else {
    alert("Разрешите всплывающие окна для этого сайта, чтобы просмотреть изображение.");
  }
}

// 2) Скрипт выделения текущего пункта навигации
(function highlightNav() {
  try {
    // взять все ссылки с классом nav-link
    var links = document.querySelectorAll('.nav-link');
    var path = window.location.pathname;
    // Получаем имя файла (например index.html)
    var current = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    // попытка сопоставить data-page атрибут с именем файла
    links.forEach(function(a){
      var page = a.getAttribute('data-page');
      // простое соответствие: index -> index.html, team -> team.html и т.д.
      var expectedFile = page ? (page + '.html') : null;
      if (expectedFile === current || (page === 'index' && (current === '' || current === 'index.html'))) {
        // выделим элемент — т.к. не используем внешние css-файлы, применим inline-стиль
        a.style.fontWeight = '700';
        a.style.backgroundColor = '#ffffcc';
        a.style.padding = '2px 6px';
        a.setAttribute('aria-current','page');
      }
    });
  } catch (e) {
    console.error('highlightNav error', e);
  }
})();


