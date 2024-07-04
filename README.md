# Сервис точек (инцидентов)

## Описание

Данный репозиторий содержит реализацию микросервиса точек (инцидентов), входящего в состав проекта ***incidents***.
Этот сервис нужен для хранения и обработки созданных пользователями точек на карте. В базе данных хранятся данные с информацией о происшествиях.
В качестве CУБД был выбран PostgreSQL. Для определения ближайшых точек используется расширение PostGIS.
Связь с API-шлюзом осуществляется через WebSocket.

## Установка

```bash
# Установка зависимостей
npm install

# Запуск в dev режиме
npm run start:dev
```

## Проектирование

_Диаграммы можно сохранять и редактировать в ***[draw.io](https://app.diagrams.net/)***_
  
- ### ER-диагрмма 
  ![ERD точки](https://github.com/ByeLarry/indcidents-marks-service/assets/120035099/5f73b2a3-3c2a-4f66-846a-b6136be328cf)

- ### Коммуникация клиента и сервиса точек (инцидентов)
  ![Коммуникация клиента и сервиса инцидентов](https://github.com/ByeLarry/indcidents-marks-service/assets/120035099/5b81ec10-9df1-430a-8662-b65a1d137368)

