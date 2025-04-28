const dropdown = document.querySelector('.dropdown');
const dropdown_shadow = document.querySelector('.shadow');
const dropdown_btn = document.querySelector('.dropdown-button'); 
const dropdown_items = dropdown.querySelector('.items');
const dropdown_item = dropdown.querySelectorAll('.item');
const dropdown_indicator = dropdown.querySelector('.indicator');

const firstItem = dropdown_item[0];

console.log(dropdown_item)

setTimeout(() => {
    IndicatorPosition(firstItem);
}, 0);

dropdown.addEventListener('click', (e) => {
    e.stopPropagation()

    dropdown_shadow.classList.toggle('show');
    dropdown_btn.classList.toggle('lift');
    dropdown_items.classList.toggle('show');
});

dropdown_item.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        IndicatorPosition(item);
    });

    item.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

function IndicatorPosition (currentButton) {
    const itemsContainer = dropdown_items.getBoundingClientRect();
    const itemRect = currentButton.getBoundingClientRect();
    const itemsContainerTop = itemsContainer.top;
    const itemTop = itemRect.top;
    const itemBottom = itemRect.bottom;
    const position = ((itemTop + itemBottom) / 2) - (itemsContainerTop + 2);

    dropdown_indicator.style.top = `${position}px`;
};