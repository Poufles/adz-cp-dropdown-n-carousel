const carousel = document.querySelector('.carousel');
const content = carousel.querySelector('.content');
const items = content.querySelectorAll('.item');
const navigation = carousel.querySelector('.navigation');
const navigationDots = navigation.querySelectorAll('.pointers');
const leftArrow = carousel.querySelector('#left-arrow');
const rightArrow = carousel.querySelector('#right-arrow');

const dotContentLinkDict = [];

for (let index = 0; index < navigationDots.length; index++) {
    const dot = navigationDots[index];
    const item = items[index];

    const templateObj = {
        dot,
        item
    };

    dotContentLinkDict.push(templateObj);
};

CarouselPlacement(content.firstElementChild);

dotContentLinkDict.forEach(obj => {
    obj.dot.addEventListener('click', (e) => {
        e.stopPropagation();

        const currentSelected = navigation.querySelector('.selected');

        currentSelected.classList.toggle('selected');
        obj.dot.classList.toggle('selected');
        CarouselPlacement(obj.item);
    });
});

leftArrow.addEventListener('click', (e) => {
    e.stopPropagation();

    for (let index = 0; index < dotContentLinkDict.length; index++) {
        const obj = dotContentLinkDict[index]
        const item = obj.item;
        const dot = obj.dot;
        
        if (item.classList.contains('center')) {

            const newItem = dotContentLinkDict[index - 1];

            if (newItem) {
                CarouselPlacement(newItem.item);
                dot.classList.toggle('selected');
                newItem.dot.classList.toggle('selected');
                break;
            };
            
        };
    };
});

rightArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    
    for (let index = 0; index < dotContentLinkDict.length; index++) {
        const obj = dotContentLinkDict[index]
        const item = obj.item;
        const dot = obj.dot;
        
        if (item.classList.contains('center')) {

            const newItem = dotContentLinkDict[index + 1];

            if (newItem) {
                CarouselPlacement(newItem.item);
                dot.classList.toggle('selected');
                newItem.dot.classList.toggle('selected');
                break;
            };
            
        };
    };
});

function CarouselPlacement(child) {
    const currentCenter = content.querySelector('.center');
    const itemRect = child.getBoundingClientRect();
    const itemLeft = itemRect.left;
    const itemWidth = itemRect.width;
    const itemHalfWidth = itemWidth / 2;

    const carouselRect = carousel.getBoundingClientRect();
    const carouselWidth = carouselRect.width;
    const carouselHalfWidth = carouselWidth / 2;

    const contentRect = content.getBoundingClientRect();
    const contentLeft = contentRect.left;

    const itemRelativePosition = itemLeft - contentLeft;

    const position = `${carouselHalfWidth - itemRelativePosition - itemHalfWidth - 10}px`;
    content.style.left = position;

    currentCenter.classList.toggle('center');
    child.classList.toggle('center');
};