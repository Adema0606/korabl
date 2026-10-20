// Исходные данные
let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];

// 1 Проверка безопасности
cargoHold.forEach(cargo => {
    console.log('Внимание: груз ' + cargo + ' проверен');
    if (cargo == 'Кристаллы') 
    {
        console.log('Внимание! Обнаружен ценный груз!');
    }
});

// 2 Срочная разгрузка
let last = cargoHold.pop();
console.log('Разгружен последний отсек: ' + last);

// 3 Секретная миссия
let scienceCargo = cargoHold.slice(1, 4); 
console.log(scienceCargo);  
console.log(cargoHold);     // Выведет оригинальный массив

// 4 Атака космических пиратов
cargoHold.splice(1, 2); 
console.log(cargoHold);     

// 5 Контрабанда
cargoHold.splice(1, 0, 'Золото', 'Детектор лжи');
console.log(cargoHold);    