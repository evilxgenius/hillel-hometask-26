В html маємо ієрархію ul.root>li{Item $}*3>ul*2>li{Item $}*5 (emmet pattern).

1. Написати скрипт, який додасть клас `last` усім останнім li у групах.
2. Написати функцію setFirstItemClassName(level), де level - це номер рівня вкладеності, у якому необхідно зробити зміни. Функція setFirstItemClassName має встановити першому li рівня клас `first`.

** при додаванні класів - повинен змінитися колір фону на червоний (first) та зелений (last), з анімацією - затримка 2 секунди

Приклад для setFirstItemClassName(2)

```html
<ul class="root"> // level 1
    <li>Item 1
        <ul> // level 2
            <li class="first">Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li class="last">Item 5</li>
        </ul>
        <ul> // level 2
            <li class="first">Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li class="last">Item 5</li>
        </ul>
    </li>
    <li>Item 2
        <ul> // level 2
            <li class="first">Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li class="last">Item 5</li>
        </ul>
        <ul> // level 2
            <li class="first">Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li class="last">Item 5</li>
        </ul>
    </li>
    <li class="last">Item 3
        <ul> // level 2
            <li class="first">Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li class="last">Item 5</li>
        </ul>
        <ul> // level 2
            <li class="first">Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li class="last">Item 5</li>
        </ul>
    </li>
</ul>```