const choises = ['Камень', 'Ножницы', 'Бумага'];

let computerWinsCounter = 0;
let userWinCounter = 0;

function getRandomComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choises.length);
    return choises[randomIndex];
}

while (computerWinsCounter != 3 && userWinCounter != 3) {

    const promptUserData = prompt('Введите: Камень, Ножницы или Бумага');

    if (!promptUserData || !choises.includes(promptUserData)) {
        console.log('Нет такого варианта');
        continue;
    }

    const computerChoice = getRandomComputerChoice();

    if (promptUserData === computerChoice) {
        console.log('Ничья');
    } else if (
        (promptUserData === 'Камень' && (computerChoice === 'Ножницы')) ||
        (promptUserData === 'Ножницы' && (computerChoice === 'Бумага')) ||
        (promptUserData === 'Бумага' && (computerChoice === 'Камень'))
    ) {
        console.log('Вы выиграли');
        userWinCounter++;
    } else {
        console.log('Вы проиграли');
        computerWinsCounter++;
    }
}

console.log('Конец игры');