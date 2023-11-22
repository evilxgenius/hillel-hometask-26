// 1. Написати скрипт, який додасть клас `last` усім останнім li у групах.
document.querySelectorAll('ul>li:last-child').forEach(el => el.classList.add('last'));

// 2. Написати функцію setFirstItemClassName(level), де level - це номер рівня вкладеності,
// у якому необхідно зробити зміни. Функція setFirstItemClassName має встановити першому li рівня клас `first`.
function setFirstItemClassName(level, root = document.querySelector('ul.root')) {
    if (level < 1) {
        console.log('Level must be equal to one or more!');
    } else if (level === 1) {
        root.querySelector('li').classList.add('first');
    } else {
        level--;

        [...root.children].forEach(li => {
            [...li.children].forEach(ul => setFirstItemClassName(level, ul));
        });
    }
}

setFirstItemClassName(2);
