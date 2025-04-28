const dropdown = document.querySelector('.dropdown');
const dropdown_shadow = document.querySelector('.shadow');
const dropdown_btn = document.querySelector('.dropdown-button'); 
const dropwdown_items = dropdown.querySelector('.items');
const dropdown_item = dropdown.querySelectorAll('.item');
const dropdown_indicator = dropdown.querySelector('.indicator');

dropdown.addEventListener('click', (e) => {
    e.stopPropagation()

    dropdown_shadow.classList.toggle('show');
    dropdown_btn.classList.toggle('lift');
    dropwdown_items.classList.toggle('show');
});

dropdown_item.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const itemsContainer = dropwdown_items.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const itemsContainerTop = itemsContainer.top;
        const itemTop = itemRect.top;
        const itemBottom = itemRect.bottom;
        const position = ((itemTop + itemBottom) / 2) - (itemsContainerTop + 2);
        
        dropdown_indicator.style.top = `${position}px`;
    });

    item.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});