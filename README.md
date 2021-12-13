# coffe

## Клонируем себе репозиторий черезе команду

git clone git@github.com:cofeGB/cofeGB.git (если у вас есть SSH) или git clone
https://github.com/cofeGB/cofeGB.git

### Подключение зависимойстей и запуск проекта

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Ссылка на Vuetify https://vuetifyjs.com/en/

### После успешного запуска создаем у себя новую ветку и работаем в ней так же в нее пушим все изминения и делаем риквест с dev веткой. После 1 одобрения можно будет замержить все правки. Если у вас много commit-ов желательно squosh-ить все в 1 commit но можно и без этого.

### Предлагаю Все бить на компоненты. Страница должна отображать контент а не являться им сама по себе. Все компоненты предлагаю хранить в папке components. Если компонентов на странице много и они не повторяются в папке components создаем папку с названием страницы и храним их там. Если компоненты часто используемые храним их просто в папке components.

## Тестируем Pull Request в ветку dev (например)

### Проверяем код из PR

- Убираем изменения из локального репозитария (`git stash` или `git reset`).
- В консоли выполняем (ID - номер пул-реквеста):

```bash
git fetch origin pull/ID/head && git checkout FETCH_HEAD
```

- Собираем проект, запускаем, смотрим на наличие ошибок компиляции и функционал.

### Делаем локальный тестовый мерж PR в целевую ветку

- В консоли выполняем (ID - номер пул-реквеста):

```bash
git checkout dev && git pull && git checkout -b dev-merge-test
git fetch origin pull/ID/head && git merge FETCH_HEAD
```

- Если в результате видим что-то типа `CONFLICT (content): Merge conflict in src/store/index.js`,
  значит автор PR должен сначала сделать мерж из целевой ветки (dev в данном случае) в свою ветку и
  разрешить все конфликты, затем обновить PR или создать новый. После этого начинаем все
  [сначала](#проверяем-код-из-PR). Для отмены тестового мержа делаем `git merge --abort`.
- Если ошибок мержа не было, собираем проект, запускаем, смотрим на наличие ошибок компиляции и
  функционал. Если все ок, PR достоин аппрува и скорейшего мержа, пока кто-то другой не внес правки
  в dev.
- **Исходную ветку удаляем после реального мержа PR, одна задача - одна ветка, сложные задачи дробим
  на части, чаще мерж - меньше конфликтов.**
- Не забываем удалить ветку в тестовым мержем `git branch -D dev-merge-test`.

Если прям по шагам то давайте так :

git add .

git commit - m 'название комита'

git push origin <название вашей ветки>

git pull origin dev --rebase

Если есть конфликты их решаем и потом

git push origin <название вашей ветки> --force
