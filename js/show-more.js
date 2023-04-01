const showMore = document.querySelector('.show-more');
const itemLength = document.querySelectorAll('.featured__item').length;
let items = 6;

showMore.addEventListener('click', () => {
    items += 3;

    const array = Array.from(document.querySelector('.featured__body').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === itemLength) {
        showMore.style.display = 'none';
    }
});