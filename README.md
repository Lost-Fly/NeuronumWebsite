# NeuroNum - Платформа речевой аналитики

## Обзор

NeuroNum - это передовая платформа речевой аналитики, разработанная для анализа телефонных звонков между сотрудниками организации и клиентами с использованием новейших языковых моделей и нейронных сетей. Платформа интегрируется с телефонной службой (например, https://app.uiscom.ru), извлекает необходимые данные, обрабатывает их с помощью нейросетей для речевой аналитики и сохраняет результаты в базу данных для последующего просмотра и анализа. NeuroNum предлагает представления о паттернах коммуникации, эффективности сотрудников и взаимодействии с клиентами, способствуя повышению бизнес-эффективности и удовлетворенности клиентов.

## Безопасность и конфиденциальность

Мы признаем чувствительность данных телефонии и реализовали надежные меры безопасности, включая использование аутентификации JWT и шифрование данных, чтобы обеспечить конфиденциальность и целостность информации. Хотя репозиторий не раскрывает полной реализации из-за этих соображений безопасности, он дает представление о разработке и возможностях платформы.

## Особенности

- **Речевая аналитика:** Использование нейронных сетей для анализа телефонных разговоров и извлечения ценной информации из записей звонков.
- **Сохранение данных:** Аналитические результаты, вместе с широким спектром связанных данных, таких как дата звонка, теги, транскрипт разговора, имя сотрудника, номер телефона клиента и анализ деятельности администратора, хранятся в безопасности в базе данных PostgreSQL.
- **Инструменты визуализации:** Платформа предоставляет широкий спектр вариантов визуализации, включая сводные таблицы и графики, для облегчения анализа данных.
- **Комплексный анализ:** Возможности кросс-анализа способствуют более глубокому пониманию взаимодействия с клиентами и оценке работы организации в целом.

## Технический Стек

- **Фронтенд:**
  - ReactJS для динамичных и отзывчивых пользовательских интерфейсов.
  - Tailwind CSS, HTML, CSS3 для изящного стиля и дизайна макета.
  - Axios для выполнения REST API вызовов к бэкенд сервисам.

- **Бэкенд:**
  - Java Spring Boot как фундамент для создания масштабируемых веб-приложений.
  - Selenium для задач веб-скрапинга.
  - RestAPI и WebSocket для реального времени двунаправленной основанной на событиях связи.
  - Питоновская микросервисная архитектура с использованием FastAPI и Django для обработки определенных бэкенд сервисов.
  - БД: PostgreSQL как реляционная база данных для эффективного хранения и запроса данных.

## Интеллектуальный анализ данных

NeuroNum - это не просто хранение данных; это раскрытие потенциала в коммуникации. С нашими передовыми аналитическими инструментами администраторы могут следить за тенденциями, определять передовые практики и предпринимать проактивные шаги для обучения и руководства рабочей силы с целью улучшения взаимодействия с клиентами.

## Примеры работы продукта (все данные фиктивны)

### Общий вид таблицы (установлен фильтр по спец тегам)

![image](https://github.com/Lost-Fly/NeuronumWebsite/assets/114507453/12dd7f08-080a-46c4-957a-31b4a2474d33)

### Анализ звонка

![image](https://github.com/Lost-Fly/NeuronumWebsite/assets/114507453/0d3c3d77-668e-4d29-bed7-729c3dad1c73)

### Анализ работы администратора

![image](https://github.com/Lost-Fly/NeuronumWebsite/assets/114507453/1d4d578a-06e4-4768-81a7-18ba46dc7715)

### Дашборды

![image](https://github.com/Lost-Fly/NeuronumWebsite/assets/114507453/90ffa795-afe5-404d-aaa9-924b31aaa178)

### Графики

![image](https://github.com/Lost-Fly/NeuronumWebsite/assets/114507453/bb38b67d-3e8a-4c55-879c-9bb3fff6636a)



### Контактная информация
- Вы можете предложить варианты развития продукта или сделать запрос на его внедрение в вашу организацию связавшись с нами: lvmlabs750@gmail.com



