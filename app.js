const person = [{effects: {
    speed: {type: 'none', meaning: '0'},
    health: {type: 'none', meaning: '0'},
    shield: {type: 'small', meaning: '0'}
}}];

document.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Координаты клика: X = ${x}, Y = ${y}`);
    let speed = 10;
    const personElement = document.querySelector('.person');
    personElement.style.top = `${y - 32}px`;
    personElement.style.left = `${x - 32}px`;
    personElement.style.transition = `top ${speed}s ease-in-out, left ${speed}s ease-in-out`;
});

let items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('dblclick', function() {
        let itemId = this.id;
        console.log(itemId);
        let activeItem = document.getElementById(`${itemId}`);
        activeItem.querySelector('.burger_menu').style.display = 'flex';
        activeItem.querySelector('.use-btn').addEventListener('click', function() {
            potionSpeed(person[0]);
        });
    });
});

function useItem() {
    // Ваша логика для использования предмета
}

function potionSpeed(obj) {
    for (let key in obj.effects) {
        if (obj.effects[key].type != 'none') {
            console.log(`Найдено в массиве: ${key}`);
            return true;
        }
    }
    return false;

}
