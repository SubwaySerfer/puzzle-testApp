# Проект: "Puzzle-testApp"

---

## Описание:

Приложение должно реализовать:

- вывод списка моделей;
- выбор модели для редактирования;
- редактирование свойств модели:

  1.  имя сервера (server_name), input;
  2.  тип сервера (server_type), select;

Требования к приложению:

- Для реализации использовать React/Next, Vue/Nuxt;
- Выполнить базовую верстку страницы. Интерфейс приложения состоит из списка слева и формы редактирования справа.
- Продемонстрировать владение ES6+, SCSS/LESS/Stylus;
- Если ранее использовали Typescript, то покажите это в тестовом задании (не обязательно);
- Можно использовать любой UI фреймворк, например, Bootstrap или Tailwind (не обязательно).

<!-- [Ссылка на деплой]() -->

---

#### Стэк технологий:

Vue3, TS, SCSS, Vite, Vue-router

---

## Установка

- `npm install` — установить зависимости
- `npm run dev` — запуск сервера разработки
- `npm run build` — сборка проекта

---

## Пример кода:

Vuex mutation example:

```
handleServer(id: string) {
      this.currentServerId = this.servers.find((el: { customer_id: string; }) => el.customer_id == id);
      this.$emit('updateServer', (this.currentServerId))
    }
```
