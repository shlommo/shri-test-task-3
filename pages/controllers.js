module.exports.index = function (req, res) {
  res.send(`
      <!DOCTYPE html>
      <html lang="ru">
      
      <head>
          <meta charset="utf-8">
      
          <title>Переговорки</title>
          <meta name="description" content="">
      
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      
          <link rel="shortcut icon" href="/img/favicon/favicon.png">
          <link rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-76x76.png" sizes="76x76">
          <link rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-120x120.png" sizes="120x120">
          <link rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-152x152.png" sizes="152x152">
          <link rel="apple-touch-icon" href="/img/favicon/apple-touch-icon-180x180.png" sizes="180x180">
      
          <!-- Chrome, Firefox OS and Opera -->
          <meta name="theme-color" content="#007DFF">
          <!-- Windows Phone -->
          <meta name="msapplication-navbutton-color" content="#007DFF">
          <!-- iOS Safari -->
          <meta name="apple-mobile-web-app-status-bar-style" content="#007DFF">
      </head>
      
      <body>
        <div id="app">Hello</div>
        
        <link rel="stylesheet" href="/css/main.min.css">
        <script src="/js/main.js"></script>
      </body>
    </html>
    `);
};
