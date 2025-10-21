function openCenteredImage(imageName, width, height) {
  const left = (window.screen.width / 2) - (width / 2);
  const top = (window.screen.height / 2) - (height / 2);

  
  const win = window.open("", "_blank",
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=no`);

  
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


(function highlightNav() {
  try {
    
    var links = document.querySelectorAll('.nav-link');
    var path = window.location.pathname;
    var current = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

    
    links.forEach(function(a){
      var page = a.getAttribute('data-page');
      var expectedFile = page ? (page + '.html') : null;
      if (expectedFile === current || (page === 'index' && (current === '' || current === 'index.html'))) {
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



