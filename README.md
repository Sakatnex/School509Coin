# Здарова!
Это официальный репозиторий School 509 Coin!
# Гайд по настройке.

# V1
После клонирования репозитория у первой версии вы можете изменить монеты, музыку, частоту регенерации энергии (energyRegenInterval в `app.js`). Главное музыку и картинки нужно будет отметить в том же самом `app.js`, а также добавляйте, изменяйте и удаляйте что хотите, только не рекомендую изменять максимальную энергию через `SetScore()`. После этого вы можете спокойно деплоить на любой хостинг. Бота создать проще простого! Создаём через [Botfather](https://t.me/botfather). Затем пишем /mybots, выбираем бота, выбираем Bot Settings и Menu Button. Там вписываем название кнопки и URL вашего приложение.

# V2
Здесь куда сложнее, нежели как первая версия. Сначало устанавливаем пакеты `npm i`, далее устанавливаем Telegraf `npm i telegraf`. Ведь в `bot/app.js` нужно указать ссылку на наше веб-приложение, а также токен бота. Заранее собираем и деплоим куда-либо (Сборка: `npm run build` и должно собраться в папку `dist`).Деплоим его на хостинг, например [Selectel](https://selectel.ru), а потом делаем те же операции с Botfather, что и с V1. `index.html` - общий файл. Меняем иконки в `src/assets`. В `src/views/FriendsView.vue` обязательно меняем ссылку на бота и сумму получения за реферала, на ту же, что изменили в `/src/api/app.js` и в нём же: ID, который браузер будет считать нас, если не зайти с Телеграмма. В `src/stores/app.js` меняем имя реферала, который перешёл не через Telegram. В той же папке, в `score.js` меняем длину массива и baseLevelScore. Самое последнее - создать базу данных [SupaBase](https://supabase.com). Регистрируемся, создаём проект. Копируем выданные ссылку и ключ API, а также куда-либо сохраняем пароль. Заходим в редактор таблиц и создаём две таблицы: **users** и **tasks**. У обоих отключаем защиту. У **tasks** создаём id - int8, title - varchar, url - varchar и amount - int4. И в них добавляем содержимое заданий: порядковый номер, заголовок ссылку, и количество монет за прохождение. У **users** - id - int8, score - int8, friends - json ({} - значение), telegram - int8 и tasks - json ({} - значение). Пересобираем и деплоим.

# Бот с донатом Telegram Stars
Я решил это добавить, тк я использовал него вместе с V1. Устанавливаем пакеты через `pip install -r requirements.txt`. Указываем в `config.toml` токен бота. В `l10n/locale.ftl` изменяем словарь бота, по желанию. Деплоим и всё работает.

# По вопросам 
Любые вопросы - [сюда](https://t.me/SakatFeed_bot)
