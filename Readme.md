1. Підключення проекта до локального сервера
  - після встановлення php/xampp додайте свій проект до теки: xampp/htdocs
2. Налаштування домена
  - відкрити файл xampp\apache\conf\extra\httpd-vhosts.conf 
  - Додаємо в кінець файла наступний код
  <VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot "D:/xampp/htdocs/project_field"
    ServerName example.com
    ServerAlias www.example.com
  </VirtualHost>
  де, project_field - назва теки з вашим проектом
  example.com - можна замінити на будь-який домен
3. Налаштування хоста
  - відкрити файл c:\Windows\System32\drivers\etc\hosts
  - в кінець файла додати
  127.0.0.1 example.com
  127.0.0.1 www.example.com
4. Запустити xampp, стартовати apache
5. В браузері відкрити example.com