# rw

Карточная игра "Найди пару"

- После старта в игре генерируется игровое поле с картами. В чем заключается генерация? Есть 4 масти и 9 рангов.

От уровня сложности зависит количество карт на поле:
    - Легкий уровень: 6 карт
    - Средний уровень: 12 карт
    - Сложный уровень: 18 карт
    
- На 5 секунд показываются пользователю сгенерированные карточки. Через 5 сек карточки переворачиваются.
- При клике на рубашку карточки, карточка показывается. При выборе второй карточки, производится сравнение.
- Если карточки совпадают ⇒ игра продолжается
  Если карточки не совпадают ⇒ игра заканчивается

  Если были найдены все пары, игрок побеждает.

Каким бы ни был финал игры, пользователю показывается всплывающее окно со:

- Статусом (проиграл / выиграл).
- Временем, затраченным на игру.
- Кнопкой, предлагающей сыграть снова.
