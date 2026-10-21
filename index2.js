const choises = ['Камень', 'Ножницы', 'Бумага', 'Ящерица', 'Спок'];
// камень - ножницы и ящерицу
// ножницы - бумагу и ящерицу
// бумага - камень и спок
// ящерица - спока и бумагу
// спок - ножницы и камень

const userChoises = ['Камень', 'Бумага', 'Ящерица', 'Спок', 'Ножницы']; 
let counter = 0;
const history = [];

while (counter < userChoises.length) 
{
    const userChoice = userChoises[counter];

// Рандомный ход компьютера 
    const randomIndex = Math.floor(Math.random() * choises.length);
    const compChoice = choises[randomIndex];

    let result = '';

//кто выиграл
    if (userChoice == compChoice) {
        result = 'Ничья';
    } else if (
        (userChoice == 'Камень' && (compChoice == 'Ножницы' || compChoice == 'Ящерица')) ||
        (userChoice == 'Ножницы' && (compChoice == 'Бумага' || compChoice == 'Ящерица')) ||
        (userChoice == 'Бумага' && (compChoice == 'Камень' || compChoice == 'Спок')) ||
        (userChoice == 'Ящерица' && (compChoice == 'Спок' || compChoice == 'Бумага')) ||
        (userChoice == 'Спок' && (compChoice == 'Ножницы' || compChoice == 'Камень'))
    ) {
        result = 'Игрок выиграл';
    } else {
        result = 'Компьютер выиграл';
    }

// результат раунда
    history.push(`Раунд ${counter + 1}: Игрок - ${userChoice}, Компьютер - ${compChoice} - ${result}`); //('Раунд ' + (counter + 1) + ': Игрок  ' + userChoice + ', Компьютер  ' + compChoice + ' - ' + result);

// следующий райнд
    counter++;
}

history.forEach(record => {
    console.log(record);
});