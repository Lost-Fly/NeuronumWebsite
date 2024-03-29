# NeuronumWebsite
# Website for Neuronum project (Using ReactJS)
Проект заключается в анализе телефонных звонков между сотрудниками организации и клиентами на основе языковых моделей. С сайта https://app.uiscom.ru собирается необходимая информация, отправляется нейросети для речевой аналитики, результат обработки сохраняется в базу данных и далее доступен для просмотра и анализа на сайте.
Помимо полученного анализа в таблицу также записывается дата разговора, краткие теги по нему, оригинал текста звонка, фио сотрудника, телефон клиента, анализ работы администратора, сквозная аналитика. По полученным данным строятся сводные таблицы и диаграммы для удобного анализа.

- Frontend (React JS, Tailwind CSS, HTML, CSS3, Axios)
- Backend (Java Spring Boot, RestAPI, WebSocket, Python Microservices Architecture (Fast Api, Django), DB: PostgreSQL)

# Анализ и хранение данных:

Речевая аналитика: Нейросети применяются для анализа речи в телефонных разговорах, что позволяет извлекать ценную информацию из аудиозаписей.

Сохранение результатов в базу данных: Результаты анализа сохраняются в PostgreSQL, включая данные о дате разговора, тегах, оригинале текста звонка, ФИО сотрудника, телефоне клиента и анализе работы администратора.

# Визуализация данных:

Сводные таблицы и диаграммы: Для удобного анализа данных на сайте реализован функционал построения сводных таблиц и диаграмм.
# Комплексный анализ:

Сквозная аналитика: Возможность проведения сквозного анализа позволяет получать комплексные данные для более глубокого понимания взаимодействия с клиентами и оценки работы организации в целом.
Проект Neuronum объединяет эти технологии, обеспечивая мощный инструмент для мониторинга и оптимизации коммуникаций организации с клиентами.
