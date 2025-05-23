Это просто упражнение по созданию API при помощи фреймворка Laravel2
При скачивании, не забудьте установить зависимости:

```bash
composer install
```

Затем установите js зависимости командой

```bash
yarn install
```
или

```bash
npm install
```

После этого следует скопировать .env.example в .env

```bash
cp .env.example .env
```

Сгенерируйте ключ

```bash
php artisan key:generate
```

Позже, сделайте ссылку на хранилище
```bash
php artisan storage:link
```

Так как в зависимостях указано symfony/filesystem, можно сделать путь относительным
```bash
php artisan storage:link --relative
```

После этого можно сделать миграцию (желательно с сидером)

```bash
php artisan migrate --seed
```
или

```bash
php artisan migrate:fresh --seed
```

Для запуска используйте эти команды:

```bash
php artisan serve # Это запустит обычный отладочный сервер Laravel
```

а так же введите:

```bash
yarn dev # или же npm run dev
```
Это включит сборку JS пакетов. (использовал Inertia+React)

Для работы с внешним сайтом, используете вот этот сайт: https://github.com/Bakamashine/two_server
После установки, запустите его такой командой:

```bash
php -S localhost:9001
```
